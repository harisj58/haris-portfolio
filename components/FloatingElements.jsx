import React, { useEffect, useRef } from 'react';


const FloatingElements = () => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);
    const mousePosition = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialize floating elements
        elementsRef.current = Array.from({ length: 8 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: 20 + Math.random() * 100,
            speed: 0.5 + Math.random() * 0.5,
            rotation: Math.random() * 360,
        }));

        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mousePosition.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                };
            }
        };

        const animate = () => {
            const elements = containerRef.current?.getElementsByClassName('floating-element');
            if (!elements) return;

            elementsRef.current.forEach((element, index) => {
                const el = elements[index];
                if (!el) return;

                // Calculate distance from mouse
                const dx = mousePosition.current.x - element.x;
                const dy = mousePosition.current.y - element.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Move away from mouse if close
                if (distance < 200) {
                    const angle = Math.atan2(dy, dx);
                    element.x -= Math.cos(angle) * 2;
                    element.y -= Math.sin(angle) * 2;
                }

                // Add some natural floating movement
                element.x += Math.sin(Date.now() * 0.001 * element.speed) * 0.5;
                element.y += Math.cos(Date.now() * 0.001 * element.speed) * 0.5;
                element.rotation += 0.1 * element.speed;

                // Keep elements within bounds
                element.x = Math.max(0, Math.min(element.x, window.innerWidth - element.size));
                element.y = Math.max(0, Math.min(element.y, window.innerHeight - element.size));

                // Apply transforms
                el.style.transform = `translate(${element.x}px, ${element.y}px) rotate(${element.rotation}deg)`;
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className={`floating-element absolute backdrop-blur-lg bg-white/5 rounded-full transition-transform duration-300
            ${i % 2 === 0 ? 'border border-white/10' : ''}
          `}
                    style={{
                        width: `${20 + Math.random() * 100}px`,
                        height: `${20 + Math.random() * 100}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;