import React, { useState } from 'react';
import './Left.css';
import sun_icon from '../assets/sun.svg';
import moon_icon from '../assets/moon.svg';
import snow_icon from '../assets/snow.svg';
import rain_icon from '../assets/rain.svg';
import thunder_icon from '../assets/thunder.svg';

// Ikony pogody w obiekcie
const weatherIcons = {
  sunny: sun_icon,
  moon: moon_icon,
  snow: snow_icon,
  rain: rain_icon,
  thunder: thunder_icon,
};

const Left = ({ setSelectedCity }) => {
  const [cities, setCities] = useState([
    { name: 'Wieluń', temp: 15, weather: 'sunny' },
    { name: 'Warszawa', temp: 12, weather: 'rain' },
    { name: 'Kraków', temp: 10, weather: 'snow' },
    { name: 'Gdańsk', temp: 20, weather: 'moon' },
  ]);
  const [cityName, setCityName] = useState('');

  // Funkcja do obsługi dodawania nowego miasta
  const addCity = () => {
    if (cityName) {
      const newCity = { name: cityName, temp: 0, weather: 'sunny' };
      setCities([...cities, newCity]);
      setCityName(''); 
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city); // Ustawiamy wybrane miasto w stanie
  };

  return (
    <div className='left'>
      <h4>Add new city</h4>
      <div className="add-city">
        <input
          type='text'
          className='search-bar'
          placeholder='Search for city...'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)} 
        />
        <button onClick={addCity}>Add City</button>
      </div>

      <div>
        {cities.map((city, index) => (
          <div
            className='city'
            key={index}
            onClick={() => handleCityClick(city)} 
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
    </div>
  );
};

export default Left;
