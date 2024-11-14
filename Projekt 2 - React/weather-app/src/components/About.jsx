import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Weather App</h1>
      <p className="about-description">
        Welcome to the Weather App, where you can easily check the weather
        for different cities. Get real-time temperature, forecasts for the
        upcoming days, and detailed information like wind speed, cloud coverage,
        and rain chances.
      </p>
      <p className="about-info">
        Paweł Muszyński 48770
      </p>
    </div>
  );
};

export default About;
