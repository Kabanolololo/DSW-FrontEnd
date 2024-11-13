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

const CityList = ({ cities, onCityClick }) => (
  <div>
    {cities.map((city, index) => (
      <div
        className='city'
        key={index}
        onClick={() => onCityClick(city)}
      >
        <p>{city.name}</p>
        <img
          className='little-picture'
          src={weatherIcons[city.weather] || sun_icon}
          alt='weather icon'
        />
        <p>Temp: {city.temp}℃</p>
      </div>
    ))}
  </div>
);

export default CityList;
