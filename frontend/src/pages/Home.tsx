///////////////////////
// Main Page Component
///////////////////////
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (formData: any) => {
        setIsSubmitted(true);

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const results = await response.text();
                console.log('Form data successfully sent: ', results);
                // Simulate loading and generating ads
                setTimeout(() => {
                    navigate('/results', {
                        state: {
                            results: results,
                            image: formData.get('image')
                        }
                    });
                }, 2000);
            } else {
                console.error('Failed to send form data', response.statusText);
                setIsSubmitted(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsSubmitted(false);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [isSubmitted]);

    return (
        <div className='w-full min-h-screen bg-gray-400'>
            <div className='flex items-center justify-center pt-8 md:pt-12 pb-6 px-2'>
                {isSubmitted ? (
                    <LoadingSpinner />
                ) : (
                    <Form onSubmit={handleFormSubmit} />
                )}
            </div>
        </div>
    );
};

export default Home;