import React from 'react';

// asset
import Profilepic from '../../public/logo.jpg';
import { FaWhatsapp } from "react-icons/fa";


const PostCard = ({ text, imageUrl }) => {
    return (
        <div className="bg-[#001540] text-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center mb-4">
                <img
                    src={Profilepic}
                    alt="User Avatar"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <div>
                    <div className="font-bold">Puerto Madero Urubó</div>
                    <div className="text-sm text-gray-400">Vista Previa de tu anunció</div>
                </div>
            </div>
            <div className="mb-4">
                <p>{text}</p>
            </div>
            <div className="-mx-4">
                <img src={imageUrl} alt="Ad Visual" className="w-full" />
            </div>
            <div className="bg-gray-100 text-black -mx-4 px-4 py-3 flex justify-between items-center mb-4">
                <div>
                    <div className='font-semibold text-sm'>WHATSAPP</div>
                    <span className='font-bold text-lg'>Contáctanos! ✅👉🏻</span>
                </div>
                <button className="bg-gray-300 text-black flex items-center gap-1 rounded-lg px-3 py-2">
                    <FaWhatsapp className="text-xl" />
                    <span className="font-bold">WhatsApp</span> <i className="fab fa-whatsapp"></i>
                </button>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400">
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-1 focus:outline-none">
                        <span>👍</span>
                        <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1 focus:outline-none">
                        <span>💬</span>
                        <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1 focus:outline-none">
                        <span>↪️</span>
                        <span>Share</span>
                    </button>
                </div>
                <div>1h</div>
            </div>
            <div className="mt-2 text-sm text-gray-400">
                <span className="font-bold">Sofia E Vargas Abrego</span> y 11 personas más
            </div>
        </div>
    );
};

export default PostCard;
