////////////////
// Results Page
////////////////
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';

const Results = () => {
    const location = useLocation();
    let results = location.state?.results;
    const { image } = location.state

    results = JSON.parse(results)
    console.log(results);

    // Framer Motion animation variants
    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center pb-4 bg-gray-300">
            <div className="my-8 max-md:my-7 px-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {results.map((result:any, idx:any) => (
                    <motion.div
                        key={idx}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.6, delay: idx * 0.7 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <PostCard text={result} image={image} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Results;
