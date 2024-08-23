////////////////////
// Form Component
////////////////////
import { useState } from 'react';
import { TbMessages } from 'react-icons/tb';
import { GiMoneyStack } from 'react-icons/gi';
import { BsHearts, BsRobot } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Form = ({ onSubmit }: any) => {
    const [campaignTarget, setCampaignTarget] = useState('');
    const [textKeywords, setTextKeywords] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [showImageHint, setShowImageHint] = useState(false);
    const [includePrices, setIncludePrices] = useState(false);
    const [prices, setPrices] = useState('');
    const [contacto, setContacto] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('campaignTarget', campaignTarget);
        formData.append('textKeywords', textKeywords);
        formData.append('prices', prices);
        formData.append('contacto', contacto);

        if (image !== null) {
            formData.append('image', image);
        }

        onSubmit(formData);
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

    return (
        <motion.div 
            className="bg-[#001540] max-sm:w-[90%] shadow-2xl shadow-gray-900 border-[2.5px] border-gray-300 mb-6 flex items-center justify-center rounded-md"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-xl max-sm:w-full p-8 sm:p-8 md:p-10 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Generador de Textos</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <label className="block text-white mb-3 font-medium">Objetivo de la Campaña</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {['Mensajes', 'Ventas', 'Interacción'].map((target) => {
                                const icons: any = {
                                    'Mensajes': <TbMessages size={24} />,
                                    'Ventas': <GiMoneyStack size={24} />,
                                    'Interacción': <BsHearts size={24} />
                                };
                                return (
                                    <motion.label
                                        key={target}
                                        className={`flex items-center justify-center cursor-pointer p-3 border border-black rounded-lg shadow-lg transform transition-transform ${campaignTarget === target ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                                        onClick={() => setCampaignTarget(target)}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <input
                                            type="radio"
                                            name="campaignTarget"
                                            value={target}
                                            checked={campaignTarget === target}
                                            onChange={() => setCampaignTarget(target)}
                                            className="hidden"
                                            required
                                        />
                                        {icons[target]}
                                        <span className="font-medium ml-2">{target}</span>
                                    </motion.label>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label className="block text-white mb-3 font-medium">Subir Imagen</label>
                        <div
                            className="relative w-full min-h-48 h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                                required
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label className="block text-white mb-3 font-medium" htmlFor="textKeywords">Palabras Clave para el Texto Deseado</label>
                        <input
                            type="text"
                            id="textKeywords"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Introduce palabras clave para el texto"
                            value={textKeywords}
                            onChange={(e) => setTextKeywords(e.target.value)}
                            required
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <label className="block text-white mb-3 font-medium">¿Incluir Precios en el Texto?</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="includePrices"
                                    value="yes"
                                    checked={includePrices === true}
                                    onChange={() => setIncludePrices(true)}
                                    className="form-radio text-teal-500 focus:ring-teal-500"
                                />
                                <span className="ml-2 text-white">Sí</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="includePrices"
                                    value="no"
                                    checked={includePrices === false}
                                    onChange={() => setIncludePrices(false)}
                                    className="form-radio text-teal-500 focus:ring-teal-500"
                                />
                                <span className="ml-2 text-white">No</span>
                            </label>
                        </div>
                    </motion.div>
                    {includePrices && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <label className="block text-white mb-3 font-medium" htmlFor="prices">Introduce los Precios</label>
                            <input
                                type="text"
                                id="prices"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Introduce los precios a mencionar"
                                value={prices}
                                onChange={(e) => setPrices(e.target.value)}
                                required
                            />
                        </motion.div>
                    )}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <label className="block text-white mb-3 font-medium" htmlFor="contacto">Introduce tu Número o enlace de Whatsapp</label>
                        <input
                            type="text"
                            id="contacto"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Introduce los precios a mencionar"
                            value={contacto}
                            onChange={(e) => setContacto(e.target.value)}
                            required
                        />
                    </motion.div>
                    <motion.button 
                        type="submit" 
                        className="w-full flex justify-center gap-2 items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:from-teal-600 hover:to-blue-600 transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <BsRobot />
                        Generar Textos
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default Form;