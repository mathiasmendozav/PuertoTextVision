///////////////////////
// Main Page Component
///////////////////////
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import LoadingSpinner from '../components/LoadingSpinner';
import dummyData from '../data/dummyData';

const Home = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = (formData) => {
        setIsSubmitted(true);
        // Simulate loading and generating ads
        setTimeout(() => {
            navigate('/results', { state: { generatedAds: dummyData } });
        }, 6000); // Wait for 5 seconds
    };

    return (
        <div className='w-full min-h-screen bg-gray-300'>
            <div className='flex items-center justify-center pt-16 pb-24'>
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
