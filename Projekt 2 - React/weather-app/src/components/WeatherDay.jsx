import React from 'react';
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

const WeatherDay = ({ day, temp, weather }) => (
  <div className='day'>
    <p className='little-degrees'>Day: {day}</p>
    <img
      className='little-picture'
      src={weatherIcons[weather] || sun_icon}
      alt='weather icon'
    />
    <p className='little-degrees'>Avg: {temp}℃</p>
  </div>
);

export default WeatherDay;
