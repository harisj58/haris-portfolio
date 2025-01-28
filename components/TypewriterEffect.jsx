"use client"

import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 150;
        const word = words[currentWordIndex];

        if (!isDeleting && currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCurrentText(prev =>
                isDeleting
                    ? prev.slice(0, -1)
                    : word.slice(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className="text-emerald-400">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
}

export default TypewriterEffect;