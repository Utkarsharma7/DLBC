import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";

// Load all JPEG images from assets folder
const imageModules = import.meta.glob("../assets/*.jpg", { eager: true });

function sortByPathNumeric([aPath], [bPath]) {
  return aPath.localeCompare(bPath, undefined, { numeric: true, sensitivity: "base" });
}

const images = Object.entries(imageModules)
  .sort(sortByPathNumeric)
  .map(([, mod]) => mod.default);

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


const Bubble = React.memo(({ bubble, bubbleSize, focus, scale }) => {
  return (
    <div
      className="absolute rounded-full overflow-hidden shadow-md will-change-transform"
      style={{
        left: bubble.x,
        top: bubble.y,
        width: bubbleSize,
        height: bubbleSize,
        transform: `scale(${scale})`,
        transition: "transform 0.1s linear",
      }}
    >
      <img
        src={bubble.img}
        alt=""
        className="w-full h-full object-cover select-none"
        loading="lazy"
        decoding="async"
        draggable={false}
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
  const dragStart = useRef(null);
  const animationFrame = useRef(null);
  // Images are now loaded directly from the module imports

  const isMobile = w < 768; // Tailwind "md" breakpoint
  const bubbleSize = isMobile ? 80 : 120;
  const spacing = isMobile ? 18 : 35;

  // Memoize calculated values
  const { stepX, stepY, cols, rows } = useMemo(() => {
    const stepX = bubbleSize + spacing;
    const stepY = (Math.sqrt(3) / 2) * (bubbleSize + spacing);
    const cols = Math.ceil(w / stepX) + 2;
    const rows = Math.ceil(h / stepY) + 2;
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


  // Memoize bubbles calculation - only recalculate when dependencies change
  const visibleBubbles = useMemo(() => {
    const bubbles = [];
    const baseX = worldOffset.x % stepX;
    const baseY = worldOffset.y % stepY;
    
    // Add viewport culling - only render bubbles that could be visible
    const margin = bubbleSize * 2; // Extra margin for scaling effects
    
    for (let row = -rows; row < rows; row++) {
      for (let col = -cols; col < cols; col++) {
        const x = col * stepX + (row % 2 === 0 ? 0 : stepX / 2) + baseX - stepX;
        const y = row * stepY + baseY - stepY;
        
        // Viewport culling - skip bubbles that are definitely not visible
        if (x + bubbleSize + margin < 0 || x - margin > w || 
            y + bubbleSize + margin < 0 || y - margin > h) {
          continue;
        }
        
        const linearIndex = row * cols + col;
        const len = Math.max(1, images.length);
        const safeIndex = ((linearIndex % len) + len) % len;
        const img = images[safeIndex] ?? "";
        bubbles.push({ id: `${row}-${col}`, x, y, img });
      }
    }
    return bubbles;
  }, [worldOffset, stepX, stepY, cols, rows, bubbleSize, w, h, images]);

  // Memoize focus point
  const focus = useMemo(() => cursor ?? { x: w / 2, y: h / 2 }, [cursor, w, h]);

  return (
    <div
      className="relative w-full h-screen bg-white overflow-hidden mt-20"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ willChange: 'transform' }} // GPU acceleration hint
    >
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
          />
        );
      })}
    </div>
  );
};

export default Gallery;