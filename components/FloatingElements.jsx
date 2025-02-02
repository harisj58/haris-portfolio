"use client"
import React, { useEffect, useRef, useState } from 'react';

const FloatingElements = ({ count = 12 }) => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);
    const mousePosition = useRef({ x: null, y: null });
    const animationFrameId = useRef();
    const [elements, setElements] = useState([]);

    const getRandomShape = () => {
        const shapes = [
            { shape: 'rounded-full', aspectRatio: '1' }, // circle
            { shape: 'rounded-full', aspectRatio: '2.5' }, // pill
        ];
        return shapes[Math.floor(Math.random() * shapes.length)];
    };

    // Initialize a single element
    const createElement = () => {
        const baseSize = 20 + Math.random() * 100;
        const shapeInfo = getRandomShape();
        const width = baseSize;
        const height = shapeInfo.aspectRatio === '1' ? baseSize : baseSize * 0.4;

        return {
            x: Math.random() * (window.innerWidth - width),
            y: Math.random() * (window.innerHeight - height),
            width,
            height,
            speed: 0.5 + Math.random() * 0.5,
            rotation: Math.random() * 360,
            directionX: Math.random() > 0.5 ? 1 : -1,
            directionY: Math.random() > 0.5 ? 1 : -1,
            shape: shapeInfo.shape,
            aspectRatio: shapeInfo.aspectRatio,
        };
    };

    // Initialize all elements
    useEffect(() => {
        const newElements = Array.from({ length: count }, () => createElement());
        setElements(newElements);
        elementsRef.current = newElements;
    }, [count]);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleMouseMove = (e) => {
            mousePosition.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        const handleResize = () => {
            elementsRef.current = elementsRef.current.map(element => ({
                ...element,
                x: Math.min(element.x, window.innerWidth - element.width),
                y: Math.min(element.y, window.innerHeight - element.height),
            }));
        };

        const animate = () => {
            const elements = containerRef.current?.getElementsByClassName('floating-element');
            if (!elements) return;

            elementsRef.current.forEach((element, index) => {
                const el = elements[index];
                if (!el) return;

                let dx = 0;
                let dy = 0;
                let distance = Infinity;

                if (mousePosition.current.x !== null && mousePosition.current.y !== null) {
                    dx = mousePosition.current.x - (element.x + element.width / 2);
                    dy = mousePosition.current.y - (element.y + element.height / 2);
                    distance = Math.sqrt(dx * dx + dy * dy);
                }

                const repelDistance = 150;
                const repelStrength = 2;

                if (distance < repelDistance) {
                    const angle = Math.atan2(dy, dx);
                    const force = (repelDistance - distance) / repelDistance * repelStrength;
                    element.x -= Math.cos(angle) * force;
                    element.y -= Math.sin(angle) * force;
                }

                const nextX = element.x + element.directionX * Math.sin(Date.now() * 0.001 * element.speed) * 0.5;
                const nextY = element.y + element.directionY * Math.cos(Date.now() * 0.001 * element.speed) * 0.5;

                if (nextX >= 0 && nextX <= window.innerWidth - element.width) {
                    element.x = nextX;
                } else {
                    element.directionX *= -1;
                }

                if (nextY >= 0 && nextY <= window.innerHeight - element.height) {
                    element.y = nextY;
                } else {
                    element.directionY *= -1;
                }

                element.rotation += 0.1 * element.speed;

                el.style.transform = `translate(${element.x}px, ${element.y}px) rotate(${element.rotation}deg)`;
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [count]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden -z-0"
        >
            {elements.map((element, i) => (
                <div
                    key={i}
                    className={`floating-element absolute backdrop-blur-lg bg-white/5 
                        ${element.shape}
                        ${i % 2 === 0 ? 'border border-white/10' : ''}
                    `}
                    style={{
                        width: `${element.width}px`,
                        height: `${element.height}px`,
                        aspectRatio: element.aspectRatio,
                        transform: `translate(${element.x}px, ${element.y}px)`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;