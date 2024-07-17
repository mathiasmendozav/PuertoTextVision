// Post Card Components will go here
import React from 'react';

// asset
import Profilepic from '../../public/logo.jpg';

const PostCard = ({ text, imageUrl }) => {
    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center mb-4">
                <img
                    src={Profilepic}
                    alt="User Avatar"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <div>
                    <div className="font-bold">Puerto Madero Urubó</div>
                    <div className="text-sm text-gray-500">Vista Previa de tu anunció</div>
                </div>
            </div>
            <div className="mb-4">
                <p>{text}</p>
            </div>
            <div>
                <img src={imageUrl} alt="Ad Visual" className="w-full" />
            </div>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <div className="flex space-x-3">
                    <button className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1">
                        <span>↪️</span>
                        <span>Share</span>
                    </button>
                </div>
                <div>1h</div>
            </div>
        </div>
    );
};

export default PostCard;
