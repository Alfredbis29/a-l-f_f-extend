import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse position for subtle cursor glow
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop - only cursor glow, no particles or squares
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle cursor glow only
      if (mouseX > 0 && mouseY > 0) {
        const cursorGradient = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 150
        );
        cursorGradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
        cursorGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
        cursorGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = cursorGradient;
        ctx.fillRect(mouseX - 150, mouseY - 150, 300, 300);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default AnimatedBackground;

