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

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    const mouseTrail: Array<{ x: number; y: number; opacity: number }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Add to trail
      mouseTrail.push({ x: mouseX, y: mouseY, opacity: 1 });
      if (mouseTrail.length > 5) {
        mouseTrail.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Square class for medium squares
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    class Square {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 30 + 30; // 30-60px (medium size)
        this.speed = Math.random() * 0.5 + 0.3; // 0.3-0.8 (good speed)
        this.opacity = Math.random() * 0.008 + 0.002; // 0.002-0.01 (very transparent)
      }

      update(codeSnippets: Array<{ x: number; y: number; width: number; height: number }>) {
        this.y += this.speed;
        
        // Check if square is inside any code snippet area and reposition if needed
        let isInsideCode = false;
        codeSnippets.forEach((snippet) => {
          const padding = 30; // Extra padding to keep squares away
          const snippetLeft = snippet.x - padding;
          const snippetRight = snippet.x + snippet.width + padding;
          const snippetTop = snippet.y - padding;
          const snippetBottom = snippet.y + snippet.height + padding;
          
          if (this.x >= snippetLeft && this.x <= snippetRight &&
              this.y >= snippetTop && this.y <= snippetBottom) {
            isInsideCode = true;
          }
        });
        
        // If inside code area, move square away
        if (isInsideCode) {
          this.x = Math.random() * canvasWidth;
          this.y = Math.random() * canvasHeight;
        }
        
        if (this.y > canvasHeight) {
          this.y = -this.size;
          // Make sure new position is not in code snippet area
          let validPosition = false;
          let attempts = 0;
          while (!validPosition && attempts < 10) {
            this.x = Math.random() * canvasWidth;
            validPosition = true;
            codeSnippets.forEach((snippet) => {
              const padding = 30; // Extra padding
              const snippetLeft = snippet.x - padding;
              const snippetRight = snippet.x + snippet.width + padding;
              const snippetTop = snippet.y - padding;
              const snippetBottom = snippet.y + snippet.height + padding;
              
              if (this.x >= snippetLeft && this.x <= snippetRight &&
                  this.y >= snippetTop && this.y <= snippetBottom) {
                validPosition = false;
              }
            });
            attempts++;
          }
        }
      }

      draw() {
        if (!ctx) return;
        // Draw squares with even lower opacity and ensure they don't interfere with code snippets
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Code snippet class (representing code scripts)
    class CodeSnippet {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      codeLines: string[];
      lineHeight: number;
      width: number;
      height: number;
      id: number;

      constructor(id: number, initialY: number, totalSnippets: number = 3) {
        this.id = id;
        // Distribute across full width with much better spacing
        const minX = 100; // Start from 100px from left
        const maxX = canvasWidth - 450; // End 450px from right (accounting for code width)
        // Create wider zones with more separation
        const totalWidth = maxX - minX;
        const snippetWidth = 350;
        const spacing = 200; // Increased minimum spacing between snippets
        const zoneWidth = (totalWidth - ((totalSnippets - 1) * spacing)) / totalSnippets;
        
        const zone = id % totalSnippets;
        // Calculate position with proper spacing
        this.x = minX + (zone * (zoneWidth + spacing)) + Math.random() * Math.max(0, zoneWidth - snippetWidth);
        
        this.y = initialY; // Stagger initial positions
        this.speed = Math.random() * 0.5 + 0.8; // 0.8-1.3 (increased speed)
        this.opacity = Math.random() * 0.3 + 0.3; // 0.3-0.6 (more visible)
        this.lineHeight = 18;
        this.width = 350;
        this.height = 0; // Will be calculated
        
        // Different code snippets
        const snippets = [
          [
            '<section id="contact"',
            '  className="py-20 px-6">',
            '  <motion.div',
            '    initial={{ opacity: 0 }}',
            '    whileInView={{ opacity: 1 }}',
            '    viewport={{ once: true }}>',
            '    <h2>Contact me</h2>',
            '  </motion.div>',
            '</section>'
          ],
          [
            'const Contact = () => {',
            '  return (',
            '    <section id="contact">',
            '      <motion.div',
            '        initial={{ opacity: 0, y: 30 }}',
            '        whileInView={{ opacity: 1 }}',
            '        transition={{ duration: 0.6 }}>',
            '        <h2>Contact me</h2>',
            '      </motion.div>',
            '    </section>',
            '  );',
            '};'
          ],
          [
            '<motion.div',
            '  initial={{ opacity: 0, y: 30 }}',
            '  whileInView={{ opacity: 1, y: 0 }}',
            '  viewport={{ once: true }}',
            '  transition={{ duration: 0.6 }}>',
            '  {/* Section Title */}',
            '  <h2 className="text-2xl">',
            '    Contact me',
            '  </h2>',
            '</motion.div>'
          ],
          [
            'import { motion } from',
            '  "framer-motion";',
            '',
            'const Contact = () => {',
            '  return (',
            '    <section id="contact">',
            '      <motion.div',
            '        initial={{ opacity: 0 }}>',
            '        <h2>Contact me</h2>',
            '      </motion.div>',
            '    </section>',
            '  );',
            '};'
          ]
        ];
        
        this.codeLines = snippets[Math.floor(Math.random() * snippets.length)];
      }

      update() {
        this.y += this.speed;
        if (this.y > canvasHeight + 400) {
          // Reset with better vertical spacing
          this.y = -400 - Math.random() * 300;
          // Keep in same zone with proper horizontal spacing
          const minX = 100;
          const maxX = canvasWidth - 450;
          const totalWidth = maxX - minX;
          const snippetWidth = 350;
          const spacing = 200; // Increased spacing
          const totalSnippets = 3; // Match the count
          const zoneWidth = (totalWidth - ((totalSnippets - 1) * spacing)) / totalSnippets;
          const zone = this.id % totalSnippets;
          this.x = minX + (zone * (zoneWidth + spacing)) + Math.random() * Math.max(0, zoneWidth - snippetWidth);
          
          // Regenerate code snippet
          const snippets = [
            [
              '<section id="contact"',
              '  className="py-20 px-6">',
              '  <motion.div',
              '    initial={{ opacity: 0 }}',
              '    whileInView={{ opacity: 1 }}',
              '    viewport={{ once: true }}>',
              '    <h2>Contact me</h2>',
              '  </motion.div>',
              '</section>'
            ],
            [
              'const Contact = () => {',
              '  return (',
              '    <section id="contact">',
              '      <motion.div',
              '        initial={{ opacity: 0, y: 30 }}',
              '        whileInView={{ opacity: 1 }}',
              '        transition={{ duration: 0.6 }}>',
              '        <h2>Contact me</h2>',
              '      </motion.div>',
              '    </section>',
              '  );',
              '};'
            ],
            [
              '<motion.div',
              '  initial={{ opacity: 0, y: 30 }}',
              '  whileInView={{ opacity: 1, y: 0 }}',
              '  viewport={{ once: true }}',
              '  transition={{ duration: 0.6 }}>',
              '  {/* Section Title */}',
              '  <h2 className="text-2xl">',
              '    Contact me',
              '  </h2>',
              '</motion.div>'
            ],
            [
              'import { motion } from',
              '  "framer-motion";',
              '',
              'const Contact = () => {',
              '  return (',
              '    <section id="contact">',
              '      <motion.div',
              '        initial={{ opacity: 0 }}>',
              '        <h2>Contact me</h2>',
              '      </motion.div>',
              '    </section>',
              '  );',
              '};'
            ]
          ];
          this.codeLines = snippets[Math.floor(Math.random() * snippets.length)];
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Draw code background with professional styling - fully visible
        const padding = 20;
        const width = this.width;
        const height = this.codeLines.length * this.lineHeight + padding * 2;
        this.height = height;
        
        // Shadow for depth
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        
        // Background with gradient - fully opaque
        const bgGradient = ctx.createLinearGradient(-padding, -padding, -padding, height - padding);
        bgGradient.addColorStop(0, 'rgba(20, 20, 30, 1)');
        bgGradient.addColorStop(1, 'rgba(15, 15, 25, 1)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(-padding, -padding, width, height);
        
        ctx.shadowBlur = 0;
        
        // Professional border with gradient - more visible
        const borderGradient = ctx.createLinearGradient(-padding, -padding, width - padding, -padding);
        borderGradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
        borderGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.5)');
        borderGradient.addColorStop(1, 'rgba(139, 92, 246, 0.8)');
        ctx.strokeStyle = borderGradient;
        ctx.lineWidth = 2;
        ctx.strokeRect(-padding, -padding, width, height);
        
        // Top accent line - more visible
        ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
        ctx.fillRect(-padding, -padding, width, 3);
        
        // Apply opacity only to text, not background
        ctx.globalAlpha = this.opacity;
        
        // Draw code lines with syntax highlighting
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.textAlign = 'left';
        
        let yPos = 5;
        this.codeLines.forEach((line) => {
          if (line.trim() === '') {
            yPos += this.lineHeight;
            return;
          }
          
          // Syntax highlighting - make text more visible
          if (line.includes('<') || line.includes('>')) {
            // JSX tags
            const parts = line.split(/(<[^>]+>)/);
            let xPos = 0;
            parts.forEach((part) => {
              if (part.startsWith('<')) {
                ctx.fillStyle = 'rgba(139, 92, 246, 1)'; // primary color for tags - fully opaque
                ctx.fillText(part, xPos, yPos);
              } else if (part.includes('=') && part.includes('"')) {
                // Attributes
                const attrParts = part.split(/(="[^"]+")/);
                attrParts.forEach((attrPart) => {
                  if (attrPart.startsWith('=')) {
                    ctx.fillStyle = 'rgba(34, 197, 94, 1)'; // green for values - fully opaque
                    ctx.fillText(attrPart, xPos, yPos);
                  } else {
                    ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // white for text - fully opaque
                    ctx.fillText(attrPart, xPos, yPos);
                  }
                  xPos += ctx.measureText(attrPart).width;
                });
              } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // white for text - fully opaque
                ctx.fillText(part, xPos, yPos);
              }
              xPos += ctx.measureText(part).width;
            });
          } else if (line.includes('const') || line.includes('import') || line.includes('return')) {
            // Keywords
            ctx.fillStyle = 'rgba(139, 92, 246, 1)'; // primary for keywords - fully opaque
            ctx.fillText(line, 0, yPos);
          } else if (line.includes('{') || line.includes('}') || line.includes('()')) {
            // Functions/objects
            ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // fully opaque
            ctx.fillText(line, 0, yPos);
          } else if (line.includes('//')) {
            // Comments
            ctx.fillStyle = 'rgba(156, 163, 175, 1)'; // gray for comments - fully opaque
            ctx.fillText(line, 0, yPos);
          } else {
            // Default text
            ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // fully opaque
            ctx.fillText(line, 0, yPos);
          }
          
          yPos += this.lineHeight;
        });
        
        ctx.restore();
      }
    }

    // Create medium squares
    const squares: Square[] = [];
    const squareCount = 12;
    for (let i = 0; i < squareCount; i++) {
      squares.push(new Square());
    }

    // Create code snippets with much better spacing - fewer snippets for better separation
    const codeSnippets: CodeSnippet[] = [];
    const codeSnippetCount = 3; // Reduced to 3 for better separation
    // Stagger initial positions - start closer to visible area
    for (let i = 0; i < codeSnippetCount; i++) {
      const initialY = -400 - (i * 500) - Math.random() * 300; // Better vertical separation but visible
      codeSnippets.push(new CodeSnippet(i, initialY, codeSnippetCount));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update mouse trail opacity
      mouseTrail.forEach((point) => {
        point.opacity = Math.max(0, point.opacity - 0.15);
      });

      // Draw mouse trail
      mouseTrail.forEach((point) => {
        if (point.opacity > 0) {
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, 80
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${point.opacity * 0.3})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${point.opacity * 0.1})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(point.x - 80, point.y - 80, 160, 160);
        }
      });

      // Draw cursor glow (increased size)
      if (mouseX > 0 && mouseY > 0) {
        const cursorGradient = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 200 // Increased from 100 to 200
        );
        cursorGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        cursorGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
        cursorGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.05)');
        cursorGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = cursorGradient;
        ctx.fillRect(mouseX - 200, mouseY - 200, 400, 400); // Increased from 200 to 400
      }

      // Draw code snippets first (on their own layer)
      codeSnippets.forEach((snippet) => {
        snippet.update();
        snippet.draw();
      });

      // Draw medium squares separately (on different layer, behind code) - very subtle
      // Update squares first to avoid code snippet areas
      const snippetBounds = codeSnippets.map(s => ({
        x: s.x,
        y: s.y,
        width: s.width,
        height: s.height
      }));
      
      squares.forEach((square) => {
        square.update(snippetBounds);
      });
      
      // Draw squares
      squares.forEach((square) => {
        // Draw square with very low opacity
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = square.opacity;
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.fillRect(square.x, square.y, square.size, square.size);
          ctx.restore();
        }
      });

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

