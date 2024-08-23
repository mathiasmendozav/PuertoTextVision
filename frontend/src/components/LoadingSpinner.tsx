/////////////////////////////
// Loading Spinner Component
/////////////////////////////
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [showFinalText, setShowFinalText] = useState(false); // Track if final text should be shown
    const loadingTexts = [
        "Analizando Foto...",
        "Extrayendo...",
        "Generando textos..."
    ];

    useEffect(() => {
        if (showFinalText) return; // Stop updating if final text should be shown

        const timeout = setTimeout(() => {
            setTextIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex === loadingTexts.length) {
                    setShowFinalText(true); // Show final text
                }
                return nextIndex;
            });
        }, 3000); // Change text every 3 seconds

        return () => clearTimeout(timeout); // Clear timeout on component unmount
    }, [textIndex, showFinalText]);

    return (
        <div className="flex items-center justify-center w-[250px] h-[250px] bg-[#001540] rounded-md shadow-xl mt-[130px] max-w-lg relative">
            <motion.div
                animate={{ scale: [1, 1.8, 1], rotate: [0, 360, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center relative"
            >
                <motion.div
                    className="w-24 h-24 bg-white rounded-full absolute"
                    animate={{ scale: [1.2, 2.5, 1.2], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
            <span className="absolute text-white text-lg font-bold">
                {showFinalText ? loadingTexts[2] : loadingTexts[textIndex]}
            </span>
        </div>
    );
};

export default LoadingSpinner;
