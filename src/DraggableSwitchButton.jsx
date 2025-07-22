import React, { useState, useRef, useEffect } from 'react';

const DraggableSwitchButton = ({ onClick }) => {
  const buttonRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('switchButtonPos');
    return saved ? JSON.parse(saved) : { x: 20, y: 20 };
  });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX;
    const newY = e.clientY;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      localStorage.setItem('switchButtonPos', JSON.stringify(position));
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        backgroundColor: '#22c55e',
        color: '#0f172a',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
        cursor: 'grab',
        zIndex: 9999,
        userSelect: 'none',
      }}
    >
      🌀 Switch Mode
    </button>
  );
};

export default DraggableSwitchButton;
