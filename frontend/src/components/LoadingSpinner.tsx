import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
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
            <span className="absolute text-white text-lg font-bold">Generando...</span>
        </div>
    );
};

export default LoadingSpinner;
