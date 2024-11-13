import React, { useEffect } from 'react';
import './Block.css';
import sun_icon from '../assets/sun.svg';
import moon_icon from '../assets/moon.svg';
import snow_icon from '../assets/snow.svg';
import rain_icon from '../assets/rain.svg';
import thunder_icon from '../assets/thunder.svg';

const weatherIcons = {
  sunny: sun_icon,
  moon: moon_icon,
  snow: snow_icon,
  rain: rain_icon,
  thunder: thunder_icon,
};

const Block = ({ selectedCity }) => {
  // useEffect - Używamy efektu, aby wykonać akcję po każdej zmianie "selectedCity"
  // Dzięki temu możemy np. śledzić zmiany wybranego miasta
  useEffect(() => {
    if (selectedCity) {
      console.log(`Ładowanie danych pogodowych dla miasta: ${selectedCity.name}`);
    }
  }, [selectedCity]); // Efekt wywołuje się tylko, gdy "selectedCity" się zmienia

  if (!selectedCity) {
    return <p>Please select a city to see the weather.</p>;
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
        {selectedCity.forecast.map((forecastDay, index) => (
          <div className='day' key={index}>
            <p className='little-degrees'>Day: {forecastDay.day}</p>
            <img
              className='little-picture'
              src={weatherIcons[forecastDay.weather] || sun_icon}
              alt='weather icon'
            />
            <p className='little-degrees'>Avg: {forecastDay.temp}℃</p>
          </div>
        ))}
      </div>

      <div className='more-info'>
        <div className='per-clouds'>
          <p className='info'>Overcast:</p>
          <p className='percentage'>{selectedCity.overcast}</p>
        </div>
        <div className='wind'>
          <p className='text'>Wind:</p>
          <p>Direction: {selectedCity.wind.direction}</p>
          <p>Speed: {selectedCity.wind.speed}</p>
        </div>
      </div>

      <div className='rain'>
        <h4>Chance of rain</h4>
        <p>Percentage: {selectedCity.rain.chance}</p>
        <p>Amount: {selectedCity.rain.amount}</p>
      </div>
    </div>
  );
};

export default Block;
