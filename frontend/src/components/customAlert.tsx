import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrCopy } from "react-icons/gr";

const CustomAlert = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 50000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 flex items-center justify-center text-center mb-40 z-50"
                >
                    <motion.div
                        className="bg-[#001540] p-4 w-64 h-42 border-4 border-green-500 rounded-2xl shadow-lg"
                        initial={{ y: '-50%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-50%' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center font-semibold mt-3">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1.1}}
                                exit={{ scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: "easeInOut",
                                    repeat: 2,
                                    repeatType: "reverse"
                                }}
                            >
                                <GrCopy className='text-[70px] text-green-500'/>
                            </motion.div>
                            <div className='mt-3 text-lg italic'>{message}</div>
                        </div>
                        
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomAlert;
