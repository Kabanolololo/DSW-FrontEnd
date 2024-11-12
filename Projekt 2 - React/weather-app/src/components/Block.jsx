import React from 'react';
import './Block.css';
import sun_icon from '../assets/sun.svg';
import moon_icon from '../assets/moon.svg';
import snow_icon from '../assets/snow.svg';
import rain_icon from '../assets/rain.svg';
import thunder_icon from '../assets/thunder.svg';

// Ikony pogody
const weatherIcons = {
  sunny: sun_icon,
  moon: moon_icon,
  snow: snow_icon,
  rain: rain_icon,
  thunder: thunder_icon,
};

const Block = ({ selectedCity }) => {
  if (!selectedCity) {
    return <p>Please select a city to see the weather.</p>; // Jeśli miasto nie jest wybrane, wyświetl komunikat
  }

  return (
    <div className='weather'>
      <h1 className='cityname'>{selectedCity.name}</h1>
      <img
        className='big-picture'
        src={weatherIcons[selectedCity.weather] || sun_icon}
        alt='weather icon'
      />
      <p className='degrees'>{selectedCity.temp}℃</p>
      <div className='next-days'>
        <div className='day'>
          <p className='little-degrees'>Day: Mon</p>
          <img
            className='little-picture'
            src={weatherIcons[selectedCity.weather] || sun_icon}
            alt='weather icon'
          />
          <p className='little-degrees'>Avg: 15℃</p>
        </div>
        <div className='day'>
          <p className='little-degrees'>Day: Tue</p>
          <img
            className='little-picture'
            src={weatherIcons[selectedCity.weather] || sun_icon}
            alt='weather icon'
          />
          <p className='little-degrees'>Avg: 16℃</p>
        </div>
        <div className='day'>
          <p className='little-degrees'>Day: Wed</p>
          <img
            className='little-picture'
            src={weatherIcons[selectedCity.weather] || sun_icon}
            alt='weather icon'
          />
          <p className='little-degrees'>Avg: 17℃</p>
        </div>
        <div className='day'>
          <p className='little-degrees'>Day: Thu</p>
          <img
            className='little-picture'
            src={weatherIcons[selectedCity.weather] || sun_icon}
            alt='weather icon'
          />
          <p className='little-degrees'>Avg: 18℃</p>
        </div>
        <div className='day'>
          <p className='little-degrees'>Day: Fri</p>
          <img
            className='little-picture'
            src={weatherIcons[selectedCity.weather] || sun_icon}
            alt='weather icon'
          />
          <p className='little-degrees'>Avg: 19℃</p>
        </div>
      </div>
      <div className='more-info'>
        <div className='per-clouds'>
          <p className='info'>Overcast:</p>
          <p className='percentage'>15%</p>
        </div>
        <div className='wind'>
          <p className='text'>Wind:</p>
          <p>Direction: W</p>
          <p>Speed: 12 m/s</p>
        </div>
      </div>
      <div className='rain'>
        <h4>Chance of rain</h4>
        <p>Percentage: 15%</p>
        <p>Amount: 12 mm/m²</p>
      </div>
    </div>
  );
};

export default Block;

