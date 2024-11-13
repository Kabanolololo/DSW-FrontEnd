import React, { useState, useCallback } from 'react';
import './Left.css';
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

const Left = ({ setSelectedCity }) => {
  // useState - Tworzy stan "cities" z początkową listą miast i stan "cityName" do obsługi wprowadzania nowego miasta
  const [cities, setCities] = useState([
    {
      name: 'Wieluń',
      temp: 15,
      weather: 'sunny',
      forecast: [
        { day: 'Mon', temp: 16, weather: 'sunny' },
        { day: 'Tue', temp: 14, weather: 'rain' },
        { day: 'Wed', temp: 15, weather: 'snow' },
        { day: 'Thu', temp: 17, weather: 'thunder' },
        { day: 'Fri', temp: 18, weather: 'sunny' },
      ],
      overcast: '20%',
      wind: { direction: 'W', speed: '10 m/s' },
      rain: { chance: '30%', amount: '5 mm/m²' },
    },
    {
      name: 'Warszawa',
      temp: 12,
      weather: 'rain',
      forecast: [
        { day: 'Mon', temp: 13, weather: 'rain' },
        { day: 'Tue', temp: 12, weather: 'thunder' },
        { day: 'Wed', temp: 10, weather: 'snow' },
        { day: 'Thu', temp: 14, weather: 'moon' },
        { day: 'Fri', temp: 13, weather: 'rain' },
      ],
      overcast: '50%',
      wind: { direction: 'E', speed: '12 m/s' },
      rain: { chance: '60%', amount: '10 mm/m²' },
    },
  ]);
  const [cityName, setCityName] = useState(''); // Stan do przechowywania wprowadzanej nazwy miasta

  // useCallback - Funkcja dodająca nowe miasto do listy "cities" jest pamiętana, dopóki "cityName" lub "cities" się nie zmienią
  // Użycie useCallback tutaj jest pomocne, aby zapobiec niepotrzebnemu przeliczaniu funkcji "addCity"
  const addCity = useCallback(() => {
    if (cityName) {
      const newCity = {
        name: cityName,
        temp: 0,
        weather: 'sunny',
        forecast: [
          { day: 'Mon', temp: 15, weather: 'sunny' },
          { day: 'Tue', temp: 15, weather: 'sunny' },
          { day: 'Wed', temp: 15, weather: 'sunny' },
          { day: 'Thu', temp: 15, weather: 'sunny' },
          { day: 'Fri', temp: 15, weather: 'sunny' },
        ],
        overcast: '10%',
        wind: { direction: 'N', speed: '5 m/s' },
        rain: { chance: '10%', amount: '2 mm/m²' },
      };
      setCities([...cities, newCity]); // Aktualizacja listy miast w stanie
      setCityName(''); // Czyszczenie pola wprowadzania po dodaniu miasta
    }
  }, [cityName, cities]);

  return (
    <div className='left'>
      <h4>Add new city</h4>
      <div className="add-city">
        <input
          type='text'
          className='search-bar'
          placeholder='Search for city...'
          value={cityName} // Powiązanie stanu "cityName" z wartością pola wprowadzania
          onChange={(e) => setCityName(e.target.value)} // Aktualizacja "cityName" po zmianie wartości pola wprowadzania
        />
        <button onClick={addCity}>Add City</button> {/* Wywołanie funkcji "addCity" po kliknięciu */}
      </div>

      <div>
        {cities.map((city, index) => (
          <div
            className='city'
            key={index}
            onClick={() => setSelectedCity(city)} // Przekazanie wybranego miasta do "App" po kliknięciu
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
