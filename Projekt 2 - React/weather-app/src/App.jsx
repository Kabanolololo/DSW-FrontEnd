import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Left from './components/Left';
import Block from './components/Block';
import About from './components/About';
import Settings from './components/Settings'; 
import store from './redux/store';
import './App.css';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <nav>
            <Link to="/city-details">City Details</Link>
            <Link to="/about">About</Link>
            <Link to="/settings">Settings</Link>
          </nav>
          
          {/* Warunkowe renderowanie Left na podstawie ścieżki */}
          <div className="content">
            <Routes>
              <Route path="/" element={<><Left setSelectedCity={setSelectedCity} /><Block selectedCity={selectedCity} /></>} />
              <Route path="/city-details" element={<><Left setSelectedCity={setSelectedCity} /><Block selectedCity={selectedCity} /></>} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
