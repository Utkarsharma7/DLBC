import React, { useState, useRef, useEffect } from "react";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";

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

const Gallery= () => {
  const { w, h } = useWindowSize();
  const [cursor, setCursor] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [worldOffset, setWorldOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef(null);

  const isMobile = w < 768; // Tailwind "md" breakpoint
  const bubbleSize = isMobile ? 80 : 120;
  const spacing = isMobile ? 18 : 35;
  const stepX = bubbleSize + spacing;
  const stepY = (Math.sqrt(3) / 2) * (bubbleSize + spacing);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  // --- mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (isDragging) {
      setWorldOffset((prev) => ({
        x: prev.x + (e.clientX - dragStart.current.x),
        y: prev.y + (e.clientY - dragStart.current.y),
      }));
      dragStart.current = { x: e.clientX, y: e.clientY };
    } else {
      setCursor({ x: e.clientX, y: e.clientY });
    }
  };

  // --- touch drag
  const handleTouchStart = (e) => {
    if (e.touches[0]) {
      dragStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };
  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      const touch = e.touches[0];
      if (dragStart.current) {
        setWorldOffset((prev) => ({
          x: prev.x + (touch.clientX - dragStart.current.x),
          y: prev.y + (touch.clientY - dragStart.current.y),
        }));
      }
      dragStart.current = { x: touch.clientX, y: touch.clientY };
      setCursor({ x: touch.clientX, y: touch.clientY });
    }
  };
  const handleTouchEnd = () => (dragStart.current = null);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  // --- viewport fill
  const cols = Math.ceil(w / stepX) + 4;
  const rows = Math.ceil(h / stepY) + 4;

  const bubbles = [];
  const baseX = worldOffset.x % stepX;
  const baseY = worldOffset.y % stepY;

  for (let row = -rows; row < rows; row++) {
    for (let col = -cols; col < cols; col++) {
      const x = col * stepX + (row % 2 === 0 ? 0 : stepX / 2) + baseX - stepX;
      const y = row * stepY + baseY - stepY;
      const linearIndex = row * cols + col;
      const safeIndex = ((linearIndex % images.length) + images.length) % images.length;
      const img = images[safeIndex];
      bubbles.push({ id: `${row}-${col}`, x, y, img });
    }
  }

  return (
    <div
      className="relative w-full h-screen bg-white overflow-hidden mt-20"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {bubbles.map((bubble) => {
        const focus = cursor ?? { x: w / 2, y: h / 2 };
        const dx = focus.x - (bubble.x + bubbleSize / 2);
        const dy = focus.y - (bubble.y + bubbleSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(0.6, 1.5 - dist / 300);

        return (
          <div
            key={bubble.id}
            className="absolute rounded-full overflow-hidden shadow-md"
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
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;