// Main App Component
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results'

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/results' Component={Results} />
        </Routes>
      </BrowserRouter>
    );
};

export default App;
