import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";

// Load all JPEG images from assets folder
const imageModules = import.meta.glob("../assets/*.jpg", { eager: true });

function sortByPathNumeric([aPath], [bPath]) {
  return aPath.localeCompare(bPath, undefined, { numeric: true, sensitivity: "base" });
}

// Function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const images = shuffleArray(
  Object.entries(imageModules)
    .sort(sortByPathNumeric)
    .map(([, mod]) => mod.default)
    .filter(img => img) // Filter out any undefined images
);

console.log('Loaded images:', images.length, images); // Debug log

// helper: track viewport size
function useWindowSize() {
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  useEffect(() => {
    const handle = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return size;
}

const Bubble = React.memo(({ bubble, bubbleSize, focus, scale, onImageClick }) => {
  // Don't render if no image
  if (!bubble.img) {
    return null;
  }

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Bubble clicked:', bubble.img); // Debug log
    onImageClick(bubble.img);
  };

  return (
    <div
      className="absolute rounded-full overflow-hidden shadow-md cursor-pointer image-bubble hover:shadow-lg transition-shadow"
      style={{
        left: bubble.x,
        top: bubble.y,
        width: bubbleSize,
        height: bubbleSize,
        transform: `scale(${scale})`,
        transition: "transform 0.1s linear, shadow 0.2s ease",
        zIndex: 10 + Math.floor(scale * 5), // Dynamic z-index based on scale, but below modal
        pointerEvents: 'auto',
      }}
      onClick={handleClick}
      onMouseDown={(e) => {
        e.stopPropagation(); // Prevent drag from starting
      }}
      onTouchStart={(e) => {
        e.stopPropagation(); // Prevent touch drag
      }}
    >
      <img
        src={bubble.img}
        alt=""
        className="w-full h-full object-cover select-none"
        loading="lazy"
        decoding="async"
        draggable={false}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
});

Bubble.displayName = "Bubble";

const Gallery = () => {
  const { w, h } = useWindowSize();
  const [cursor, setCursor] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [worldOffset, setWorldOffset] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const dragStart = useRef(null);
  const animationFrame = useRef(null);

  const isMobile = w < 768; // Tailwind "md" breakpoint
  const bubbleSize = isMobile ? 80 : 120;
  const spacing = isMobile ? 18 : 35;

  // Memoize calculated values
  const { stepX, stepY, cols, rows } = useMemo(() => {
    const stepX = bubbleSize + spacing;
    const stepY = (Math.sqrt(3) / 2) * (bubbleSize + spacing);
    const cols = Math.ceil(w / stepX) + 2;
    const rows = Math.ceil(h / stepY) + 1; // Reduced by 1 row
    return { stepX, stepY, cols, rows };
  }, [bubbleSize, spacing, w, h]);

  // Throttled cursor update
  const updateCursor = useCallback((x, y) => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      setCursor({ x, y });
    });
  }, []);

  // --- mouse drag
  const handleMouseDown = useCallback((e) => {
    // Don't start dragging if clicking on an image bubble
    if (e.target.closest('.image-bubble')) {
      return;
    }
    // Also check if we're clicking on the bubble container itself
    if (e.target.classList.contains('image-bubble')) {
      return;
    }
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      setWorldOffset((prev) => ({
        x: prev.x + (e.clientX - dragStart.current.x),
        y: prev.y + (e.clientY - dragStart.current.y),
      }));
      dragStart.current = { x: e.clientX, y: e.clientY };
    } else {
      updateCursor(e.clientX, e.clientY);
    }
  }, [isDragging, updateCursor]);

  // --- touch drag
  const handleTouchStart = useCallback((e) => {
    // Don't start dragging if touching an image bubble
    if (e.target.closest('.image-bubble')) {
      return;
    }
    // Also check if we're touching the bubble container itself
    if (e.target.classList.contains('image-bubble')) {
      return;
    }
    if (e.touches[0]) {
      dragStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches[0]) {
      const touch = e.touches[0];
      if (dragStart.current) {
        setWorldOffset((prev) => ({
          x: prev.x + (touch.clientX - dragStart.current.x),
          y: prev.y + (touch.clientY - dragStart.current.y),
        }));
      }
      dragStart.current = { x: touch.clientX, y: touch.clientY };
      updateCursor(touch.clientX, touch.clientY);
    }
  }, [updateCursor]);

  const handleTouchEnd = useCallback(() => (dragStart.current = null), []);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handleMouseUp, handleMouseMove, handleTouchEnd]);

  // Memoize bubbles calculation - restored to original layout
  const visibleBubbles = useMemo(() => {
    const bubbles = [];
    const baseX = worldOffset.x % stepX;
    const baseY = worldOffset.y % stepY;
    
    // Increased margin to ensure all bubbles are rendered and clickable
    const margin = bubbleSize * 2; // Reduced margin for better performance
    
    for (let row = -rows; row < rows * 2; row++) {
      for (let col = -cols; col < cols * 2; col++) {
        const x = col * stepX + (row % 2 === 0 ? 0 : stepX / 2) + baseX - stepX;
        const y = row * stepY + baseY - stepY;
        
        // More generous viewport culling - ensure all visible bubbles are rendered
        if (x + bubbleSize + margin < 0 || x - margin > w || 
            y + bubbleSize + margin < 0 || y - margin > h) {
          continue;
        }
        
        const linearIndex = row * cols + col;
        const len = Math.max(1, images.length);
        const safeIndex = ((linearIndex % len) + len) % len;
        const img = images[safeIndex] ?? "";
        
        if (img) { // Only add bubbles with valid images
          bubbles.push({ id: `${row}-${col}`, x, y, img });
        }
      }
    }
    console.log('Total bubbles rendered:', bubbles.length); // Debug log
    return bubbles;
  }, [worldOffset, stepX, stepY, cols, rows, bubbleSize, w, h, images]);

  // Modal functions
  const handleImageClick = (imageSrc) => {
    console.log('Opening modal for image:', imageSrc); // Debug log
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Memoize focus point
  const focus = useMemo(() => cursor ?? { x: w / 2, y: h / 2 }, [cursor, w, h]);

  return (
    <div
      className="relative w-full h-screen bg-white overflow-hidden mt-20"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ willChange: 'transform' }}
    >
      {/* Render all bubbles with proper pointer events */}
      {visibleBubbles.map((bubble) => {
        const dx = focus.x - (bubble.x + bubbleSize / 2);
        const dy = focus.y - (bubble.y + bubbleSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(0.6, 1.5 - dist / 300);

        return (
          <Bubble
            key={bubble.id}
            bubble={bubble}
            bubbleSize={bubbleSize}
            focus={focus}
            scale={scale}
            onImageClick={handleImageClick}
          />
        );
      })}
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-20 flex items-center justify-center p-4 overflow-auto"
          style={{ zIndex: 9999 }}
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full my-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-gray-900 cursor-pointer z-10 bg-white bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;