import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Left.css';
import citiesData from './CityList';
import weatherIcons from './WeatherIcons';

// Funkcja pomocnicza do konwersji temperatury
const convertTemperature = (temp, unit) => {
  if (unit === 'Fahrenheit') {
    return (temp * 9/5) + 32; // Konwersja na Fahrenheit
  }
  return temp; // Zwracamy wartość w Celsiusach
};

const Left = ({ setSelectedCity }) => {
  const [searchTerm, setSearchTerm] = useState(''); // Stan dla wyszukiwanego tekstu
  const unit = useSelector((state) => state.unit); // Pobieramy jednostkę temperatury z Reduxa

  // Filtrowanie miast na podstawie wpisanego tekstu
  const filteredCities = citiesData.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) // Ignorowanie wielkości liter
  );

  return (
    <div className="left">
      <h4>Search for a city</h4>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for city..."
          value={searchTerm} // Wiązanie z wartością wpisaną przez użytkownika
          onChange={(e) => setSearchTerm(e.target.value)} // Aktualizacja stanu na podstawie wpisywanego tekstu
        />
        <div className='buttons'>
          <button className='button-left'>button1</button>
          <button className='button-left'>button2</button>
        </div>
      </div>

      <div>
        {/* Wyświetlanie tylko przefiltrowanych miast */}
        {filteredCities.map((city, index) => (
          <Link
            to="/city-details"
            key={index}
            onClick={() => setSelectedCity(city)} // Przekazywanie wybranego miasta do rodzica
          >
            <div className="city">
              <p>{city.name}</p>
              <img
                className="little-picture"
                src={weatherIcons[city.weather] || weatherIcons.sunny}
                alt="weather icon"
              />
              <p>
                Temp: {convertTemperature(city.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Left;
