///////////////////////
// Main Page Component
///////////////////////
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import LoadingSpinner from '../components/LoadingSpinner';
import HomeBG from '../assets/promocreditoBack.webp';
import dummyData from '../data/dummyData';

const Home = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = (formData) => {
        setIsSubmitted(true);
        // Simulate loading and generating ads
        setTimeout(() => {
            navigate('/results', { state: { generatedAds: dummyData } });
        }, 5000); // Wait for 5 seconds
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-slate-100' style={{ backgroundImage: `url(${HomeBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {isSubmitted ? (
                <LoadingSpinner />
            ) : (
                <Form onSubmit={handleFormSubmit} />
            )}
        </div>
    );
};

export default Home;
