import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Left from './components/Left';
import Block from './components/Block';
import About from './components/About';
import './App.css';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <Router>
      <div className='app'>
        <nav>
          <Link to="/city-details">City Details</Link>
          <Link to="/about">About</Link>
        </nav>
        <Left setSelectedCity={setSelectedCity} />
        <Routes>
          <Route path="/" element={<Left setSelectedCity={setSelectedCity} />} />
          <Route
            path="/city-details"
            element={<Block selectedCity={selectedCity} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
