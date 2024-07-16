///////////////////////
// Main Page Component
///////////////////////
import { useState } from 'react';

// extra components
import Form from '../components/Form';
import LoadingSpinner from '../components/LoadingSpinner';

// assets
import HomeBG from '../assets/promocreditoBack.webp';

const Home = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (formData: FormData) => {
        setIsSubmitted(true);
        console.log(formData); // Perform any other action with formData
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-3 bg-slate-100" style={{ backgroundImage: `url(${HomeBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {isSubmitted ? (
                <LoadingSpinner />
            ) : (
                <Form onSubmit={handleFormSubmit} />
            )}
        </div>
    );
}

export default Home;
