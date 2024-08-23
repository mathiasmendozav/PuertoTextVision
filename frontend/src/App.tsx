//////////////////////////
// Main App Component
//////////////////////////
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
