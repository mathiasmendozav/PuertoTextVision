////////////////
// Results Page
////////////////
import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';

const Results = () => {
    const location = useLocation();
    const { generatedAds } = location.state || { generatedAds: [] };

    // Framer Motion animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center pb-16 bg-gray-300">
            <div className="my-8 max-md:my-7 px-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {generatedAds.map((ad, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: .6, delay: index * 0.1 }}
                    >
                        <PostCard text={ad.text} imageUrl={ad.imageUrl} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Results;
