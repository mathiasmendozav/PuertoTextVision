// Main App Component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/home" component={Home} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
