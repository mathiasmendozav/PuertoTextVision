////////////////
// Results Page
////////////////
import React from 'react';
import { useLocation } from 'react-router-dom';
import PostCard from '../components/PostCard';
import HomeBG from '../assets/promocreditoBack.webp'

const Results = () => {
    const location = useLocation();
    const { generatedAds } = location.state || { generatedAds: [] };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-3 bg-gray-400">
            <div className="my-10 px-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {generatedAds.map((ad, index) => (
                    <PostCard key={index} text={ad.text} imageUrl={ad.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default Results;
