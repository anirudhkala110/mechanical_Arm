import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ texts, typingSpeed = 100, pauseDuration = 2000, loop = true }) => {
    const [text, setText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingDelay, setTypingDelay] = useState(typingSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentTextIndex];
            if (isDeleting) {
                setText(texts.substring(0, text.length - 1));
            } else {
                setText(texts.substring(0, text.length + 1));
            }

            if (!isDeleting && texts === text && loop) {
                setTypingDelay(pauseDuration);
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                setTypingDelay(typingSpeed);
            } else {
                setTypingDelay(typingSpeed);
            }
        };

        const timer = setTimeout(handleTyping, typingDelay);

        return () => clearTimeout(timer);
    }, [text, isDeleting, typingDelay, currentTextIndex, texts, typingSpeed, pauseDuration]);

    useEffect(() => {
        setTypingDelay(typingSpeed);
    }, [typingSpeed]);

    return <p className='mb-0' dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TypewriterEffect;
