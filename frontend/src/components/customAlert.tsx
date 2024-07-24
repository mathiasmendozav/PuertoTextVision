import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const CustomAlert = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
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
                        className="bg-[#001540] p-4 w-64 h-42 border-4 border-white rounded-3xl shadow-lg shadow-gray-900"
                        initial={{ y: '-50%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-50%' }}
                        transition={{ duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center font-semibold mt-1">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1.1 }}
                                exit={{ scale: 1.1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: "easeInOut",
                                    repeat: 3,
                                    repeatType: "reverse"
                                }}
                            >
                                <IoCheckmarkDoneCircle
                                    className='text-[75px] text-green-500 shadow-sm shadow-white rounded-full'
                                />
                            </motion.div>
                            <div className='mt-2 text-lg italic text-white'>{message}</div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomAlert;
