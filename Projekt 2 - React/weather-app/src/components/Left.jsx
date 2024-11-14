import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';  // Używamy useDispatch i useSelector
import { setUnit } from '../redux/temperatureActions';  // Poprawny import akcji
import './Left.css';
import citiesData from './CityList';
import weatherIcons from './WeatherIcons';

// Funkcja pomocnicza do konwersji temperatury
const convertTemperature = (temp, unit) => {
  if (unit === 'Fahrenheit') {
    return (temp * 9/5) + 32;  // Konwersja na Fahrenheit
  }
  return temp;  // Jeśli jednostka to Celsius, nie zmieniamy temperatury
};

const Left = ({ setSelectedCity }) => {
  const [cities, setCities] = useState(citiesData);
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();  // Hook do wysyłania akcji w Redux
  const unit = useSelector(state => state.unit);  // Pobieramy jednostkę z Reduxa

  // Funkcja do dodawania nowego miasta
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
      setCities([...cities, newCity]);
      setCityName('');
    }
  }, [cityName, cities]);

  // Funkcja zmieniająca jednostkę temperatury
  const handleUnitChange = (unit) => {
    dispatch(setUnit(unit));
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
          <Link
            to="/city-details"
            key={index}
            onClick={() => setSelectedCity(city)}
          >
            <div className='city'>
              <p>{city.name}</p>
              <img
                className='little-picture'
                src={weatherIcons[city.weather] || weatherIcons.sunny}
                alt='weather icon'
              />
              {/* Wyświetlamy temperaturę w wybranej jednostce */}
              <p>Temp: {convertTemperature(city.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Left;