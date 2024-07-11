import React, { useState } from 'react';
import { TbMessages } from 'react-icons/tb';
import { GiMoneyStack } from 'react-icons/gi';
import { BsHearts, BsRobot } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Form: React.FC = () => {
    const [campaignTarget, setCampaignTarget] = useState('');
    const [promoKeywords, setPromoKeywords] = useState('');
    const [textKeywords, setTextKeywords] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [showImageHint, setShowImageHint] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);
        console.log({
            campaignTarget,
            promoKeywords,
            textKeywords,
            image
        });
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImage(null);
            setImagePreview(null);
        }
    };

    const loadingAnimation = {
        width: [100, 100, 250, 100, 100],
        height: [100, 100, 250, 100, 100],
        borderRadius: ['20%', '50%', '20%', '50%', '20%'],
        rotate: [0, 360],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
        }
    };

    return (
        <motion.div 
            className="bg-[#001540] p-10 rounded-lg shadow-2xl max-w-xl mx-auto mt-10"
            animate={isSubmitted ? loadingAnimation : {}}
            transition={{ duration: 0.5 }}
        >
            {!isSubmitted && (
                <>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Formulario de Campaña</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white mb-4 font-medium">Objetivo de la Campaña</label>
                            <div className="flex justify-between space-x-4">
                                {['Mensajes', 'Ventas', 'Interacción'].map((target) => {
                                    const icons = {
                                        'Mensajes': <TbMessages size={24} />,
                                        'Ventas': <GiMoneyStack size={24} />,
                                        'Interacción': <BsHearts size={24} />
                                    };
                                    return (
                                        <label
                                            key={target}
                                            className={`flex items-center justify-center cursor-pointer w-1/3 p-2 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${campaignTarget === target ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                                            onClick={() => setCampaignTarget(target)}
                                        >
                                            <input
                                                type="radio"
                                                name="campaignTarget"
                                                value={target}
                                                checked={campaignTarget === target}
                                                onChange={() => setCampaignTarget(target)}
                                                className="hidden"
                                            />
                                            {icons[target]}
                                            <span className="font-medium ml-2">{target}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-medium">Subir Imagen</label>
                            <div
                                className="relative w-full h-full min-h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                onMouseEnter={() => setShowImageHint(true)}
                                onMouseLeave={() => setShowImageHint(false)}
                            >
                                {imagePreview ? (
                                    <div className="relative w-full h-full">
                                        <img src={imagePreview} alt="Vista previa" className="w-full h-full object-cover" />
                                        <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300 ${showImageHint ? 'opacity-100' : 'opacity-0'}`}>
                                            Haz clic para cambiar de imagen
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-white text-center">Haz clic para subir una imagen</div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-medium" htmlFor="promoKeywords">Palabras Clave de la Promoción</label>
                            <input
                                type="text"
                                id="promoKeywords"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Introduce palabras clave para la promoción"
                                value={promoKeywords}
                                onChange={(e) => setPromoKeywords(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-medium" htmlFor="textKeywords">Palabras Clave del Texto Deseado</label>
                            <input
                                type="text"
                                id="textKeywords"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Introduce palabras clave para el texto"
                                value={textKeywords}
                                onChange={(e) => setTextKeywords(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full flex justify-center gap-2 items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg hover:from-teal-600 hover:to-blue-600 transition duration-300">
                            <BsRobot />
                            Generar Textos
                        </button>
                    </form>
                </>
            )}
        </motion.div>
    );
};

export default Form;
