import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size - works on all devices
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Position for cursor/touch glow
    let pointerX = 0;
    let pointerY = 0;
    let isActive = false;

    // Mouse events for desktop
    const handleMouseMove = (e: MouseEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      isActive = true;
    };

    const handleMouseLeave = () => {
      isActive = false;
    };

    // Touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointerX = e.touches[0].clientX;
        pointerY = e.touches[0].clientY;
        isActive = true;
      }
    };

    const handleTouchEnd = () => {
      // Keep the glow visible for a moment after touch ends
      setTimeout(() => {
        isActive = false;
      }, 500);
    };

    // Add event listeners for both mouse and touch
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Animation loop - cursor/touch glow that works on all devices
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle cursor/touch glow
      if (isActive && pointerX > 0 && pointerY > 0) {
        const cursorGradient = ctx.createRadialGradient(
          pointerX, pointerY, 0,
          pointerX, pointerY, 150
        );
        cursorGradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
        cursorGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
        cursorGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = cursorGradient;
        ctx.fillRect(pointerX - 150, pointerY - 150, 300, 300);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
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

