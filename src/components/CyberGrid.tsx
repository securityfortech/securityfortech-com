
import React, { useEffect, useRef } from "react";

const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Grid properties
    const gridSize = 30;
    const gridColor = "#1A1F2C";
    const gridHighlightColor = "#8B5CF6";
    
    // Create data points
    const dataPoints: { x: number; y: number; vx: number; vy: number; connections: number[] }[] = [];
    const numPoints = Math.floor(canvas.width * canvas.height / 15000);

    for (let i = 0; i < numPoints; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    // Animation function
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      
      ctx.stroke();

      // Update and draw data points
      for (let i = 0; i < dataPoints.length; i++) {
        const point = dataPoints[i];
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off walls
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        // Clear old connections
        point.connections = [];
      }

      // Find connections
      const connectionDistance = 150;
      
      for (let i = 0; i < dataPoints.length; i++) {
        const pointA = dataPoints[i];
        
        for (let j = i + 1; j < dataPoints.length; j++) {
          const pointB = dataPoints[j];
          const dx = pointB.x - pointA.x;
          const dy = pointB.y - pointA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            pointA.connections.push(j);
            pointB.connections.push(i);
            
            // Draw connection
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - distance / connectionDistance) * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw points
      for (let i = 0; i < dataPoints.length; i++) {
        const point = dataPoints[i];
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = point.connections.length > 0 ? gridHighlightColor : "#3E3E6B";
        ctx.fill();
      }
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-50"
    />
  );
};

export default CyberGrid;
