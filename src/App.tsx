import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from 'C:/Users/ThinkPad/Desktop/Ousss/ad-performance-dashboard/src/components/NavBar';
import Home from 'C:/Users/ThinkPad/Desktop/Ousss/ad-performance-dashboard/src/components/Home';
import About from './components/About';
import Dashboard from 'C:/Users/ThinkPad/Desktop/Ousss/ad-performance-dashboard/src/components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
