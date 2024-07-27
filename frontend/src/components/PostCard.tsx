////////////////////////////////
// Post Card Results Component
///////////////////////////////
import { useState } from 'react';
import Typewriter from 'react-typewriter-effect';
import Profilepic from '../../public/logo.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { GrCopy } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import CustomAlert from './customAlert';

const PostCard = ({ text, imageUrl }) => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setAlertMessage('Texto ha sido copiado!');
                setAlertVisible(true);
            })
            .catch(err => {
                setAlertMessage('Error al copiar el texto');
                setAlertVisible(true);
                console.error('Error al copiar el texto: ', err);
            });
    };

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    return (
        <div className="bg-[#001540] text-white p-4 rounded-lg shadow-2xl shadow-black max-w-md w-full relative">
            <div className="flex items-center mb-4">
                <img
                    src={Profilepic}
                    alt="User Avatar"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <div>
                    <div className="font-bold">Puerto Madero Urubó</div>
                    <div className="text-sm text-gray-400">Vista Previa de tu anuncio</div>
                </div>
                <div className='ml-auto flex gap-2'>
                    <span className='text-xl hover:bg-slate-700 bg-transparent rounded-full p-2'><HiDotsHorizontal /></span>
                    <span className='text-xl hover:bg-slate-700 bg-transparent rounded-full p-2'><RxCross2 /></span>
                </div>
            </div>

            <div className="mb-4">
                <div className="whitespace-pre-line w-full">
                    <Typewriter
                        text={text}
                        cursorColor="white"
                        typeSpeed={14}
                        deleteSpeed={15}
                        delay={500}
                        loop={false}
                    />
                </div>
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
            <div className="my-2">
                <button 
                    className="w-3/4 max-sm:w-5/6 py-2.5 flex items-center justify-center mx-auto gap-2 rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-xl"
                    onClick={copyToClipboard}
                >
                    <GrCopy className='text-xl'/>
                    <span>Copiar Texto Generado</span>
                </button>
            </div>
            <CustomAlert message={alertMessage} isVisible={alertVisible} onClose={handleCloseAlert} />
        </div>
    );
};

export default PostCard;
