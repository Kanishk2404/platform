import React, { useRef, useEffect } from "react";
import './Hyperspeed.css';

// Simple animated starfield/hyperspeed tunnel using canvas
const HyperspeedBackground = ({ starCount = 200, speed = 0.04 }) => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    // Initialize stars
    stars.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      for (let star of stars.current) {
        // Move star
        star.z -= speed * width;
        if (star.z <= 1) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }
        // Project 3D to 2D
        const k = 128 / star.z;
        const sx = star.x * k;
        const sy = star.y * k;
        // Fade and size
        const alpha = Math.max(0, 1 - star.z / width);
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5 + 2 * (1 - star.z / width), 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(180,255,255,${alpha})`;
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.restore();
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="hyperspeed-bg"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
        background: 'black',
      }}
    />
  );
};

export default HyperspeedBackground;
