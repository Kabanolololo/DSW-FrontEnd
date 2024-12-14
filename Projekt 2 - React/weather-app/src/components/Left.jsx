import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoriteActions'; 
import './Left.css';
import citiesData from './CityList';
import weatherIcons from './WeatherIcons';
import star from '../assets/star.svg';

// Funkcja do konwersji temperatury
const convertTemperature = (temp, unit) => {
  if (unit === 'Fahrenheit') {
    return (temp * 9/5) + 32;  // Konwersja na Fahrenheit
  }
  return temp;  // Zwracamy Celsius, jeśli jednostka to Celsius
};

const Left = ({ setSelectedCity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('all'); // Nowy stan dla widoku
  const unit = useSelector((state) => state.temperature.unit); // Pobieramy jednostkę temperatury z Redux
  const favorites = useSelector((state) => state.favorites.favorites); // Pobieramy ulubione miasta z Redux
  const dispatch = useDispatch();

  const filteredCities = citiesData.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFavoriteToggle = (city) => {
    // Jeśli miasto jest już ulubione, to usuwamy je
    if (favorites.some(fav => fav.name === city.name)) {
      dispatch(removeFavorite(city.name));
    } else {
      dispatch(addFavorite(city));
    }
  };

  // Zmiana widoku po kliknięciu przycisku
  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  const displayCities = view === 'favorites' ? favorites : filteredCities; // Wybór, które miasta mają być wyświetlane

  return (
    <div className="left">
      <h4>Search for a city</h4>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button 
          className="button-left"
          onClick={() => handleViewChange('all')} // Wyświetl wszystkie miasta
        >
          All Cities
        </button>
        <button
          className="button-left"
          onClick={() => handleViewChange('favorites')} // Wyświetl ulubione miasta
        >
          Favorite Cities
        </button>
      </div>
      <div>
        {/* Wyświetlanie komunikatu, gdy lista ulubionych jest pusta */}
        {view === 'favorites' && favorites.length === 0 && (
          <p className="empty-favorites-message">Your favorite cities list is empty.</p>
        )}
      </div>
      <div>
        {displayCities.map((city, index) => (
          <div
            className="city"
            key={index}
            onClick={() => setSelectedCity(city)}
          >
            <p>{city.name}</p>
            <img
              className="little-picture"
              src={weatherIcons[city.weather] || weatherIcons.sunny}
              alt="weather icon"
            />
            <p>
              Temp: {convertTemperature(city.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
            </p>

            <img
              src={star}
              alt="favorite"
              className={`favorite-icon ${favorites.some(fav => fav.name === city.name) ? 'active' : ''}`} // Dodanie klasy 'active' dla ulubionych miast
              onClick={() => handleFavoriteToggle(city)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
