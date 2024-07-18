import React from 'react';
import Typewriter from 'react-typewriter-effect';
import Profilepic from '../../public/logo.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { GrCopy } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const PostCard = ({ text, imageUrl }) => {
    return (
        <div className="bg-[#001540] text-white p-4 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex items-center mb-4">
                <img
                    src={Profilepic}
                    alt="User Avatar"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <div>
                    <div className="font-bold">Puerto Madero Urubó</div>
                    <div className="text-sm text-gray-400">Vista Previa de tu anúnci</div>
                </div>
                <div className='ml-auto flex gap-2'>
                    <span className='text-xl'><HiDotsHorizontal /></span>
                    <span className='text-xl'><RxCross2 /></span>
                </div>
            </div>

            <div className="mb-4">
                <p>
                    <Typewriter
                        text={text}
                        cursorColor="white" // Customize cursor color
                        typeSpeed={20} // Adjust typing speed here
                        deleteSpeed={15} // Speed of backspacing
                        delay={500} // Delay before starting typing
                        loop={false} // Set to true if you want it to loop
                    />
                </p>
            </div>
            <div className="-mx-4">
                <img src={imageUrl} alt="Ad Visual" className="w-full" />
            </div>
            <div className="bg-gray-100 text-black -mx-4 px-4 py-3 flex justify-between items-center mb-4">
                <div>
                    <div className='font-semibold text-sm'>WHATSAPP</div>
                    <span className='font-bold text-lg'>Contáctanos! ✅👉🏻</span>
                </div>
                <button className="bg-gray-300 text-black flex items-center gap-1 rounded-lg px-4 py-2 transition-transform transform hover:scale-105 hover:bg-gray-400">
                    <FaWhatsapp className="text-xl" />
                    <span className="font-bold">WhatsApp</span>
                </button>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400">
                {/* Add other elements here if needed */}
            </div>
            <div className="my-2">
                <button className="w-4/6 py-2.5 flex items-center justify-center mx-auto gap-2 rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-xl">
                    <GrCopy className='text-xl'/>
                    <span>Copiar Texto Generado</span>
                </button>
            </div>
        </div>
    );
};

export default PostCard;
