import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoriteActions';
import './Left.css';
import citiesData from './CityList';
import weatherIcons from './WeatherIcons';
import star from '../assets/star.svg';
import axios from 'axios';

// Funkcja do konwersji temperatury
const convertTemperature = (temp, unit) => {
  let convertedTemp;
  if (unit === 'Fahrenheit') {
    convertedTemp = (temp * 9/5) + 32;  // Konwersja na Fahrenheit
  } else {
    convertedTemp = temp;  // Zwracamy Celsius, jeśli jednostka to Celsius
  }
  return parseFloat(convertedTemp.toFixed(0)); // Zaokrąglamy do 2 miejsc po przecinku
};

const Left = ({ setSelectedCity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('all'); // Typ widoku: wszystkie lub ulubione
  const [cities, setCities] = useState([]);  // Zmienna do przechowywania miast z API
  const unit = useSelector((state) => state.temperature.unit);  // Jednostka temperatury (Celsius lub Fahrenheit)
  const favorites = useSelector((state) => state.favorites.favorites);  // Ulubione miasta z Redux
  const dispatch = useDispatch();

  const API_KEY = 'cd77e9da6598f01ac4e76d48bdb6b67d'; // Twój klucz API
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'; // Endpoint API OpenWeather

  // Pobieranie danych pogodowych z API OpenWeather
  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: unit === 'Celsius' ? 'metric' : 'imperial', // Jednostka na podstawie wybranej
        }
      });
      return response.data;
    } catch (error) {
      console.error("Błąd podczas pobierania danych pogodowych:", error);
    }
  };

  // Załadowanie danych pogodowych dla wszystkich miast
  useEffect(() => {
    const loadCitiesWeather = async () => {
      const citiesWithWeather = await Promise.all(
        citiesData.map(async (city) => {
          const weatherData = await fetchWeatherData(city.name);
          return {
            ...city,
            temp: weatherData.main.temp, // Temperatura
            weather: weatherData.weather[0].main.toLowerCase(), // Typ pogody
            coord: weatherData.coord, // Koordynaty miasta
          };
        })
      );
      setCities(citiesWithWeather); // Aktualizacja stanu z miastami i ich pogodą
    };

    loadCitiesWeather();
  }, [unit]);  // Uruchom ponownie, jeśli zmieni się jednostka temperatury

  // Filtracja miast na podstawie wprowadzonego terminu wyszukiwania
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obsługuje dodawanie/usuń ulubione miasto
  const handleFavoriteToggle = (city) => {
    if (favorites.some(fav => fav.name === city.name)) {
      const updatedFavorites = favorites.filter(fav => fav.name !== city.name);
      dispatch(removeFavorite(city.name));
      saveFavoritesToLocalStorage(updatedFavorites);
    } else {
      dispatch(addFavorite(city));
      const updatedFavorites = [...favorites, city];
      saveFavoritesToLocalStorage(updatedFavorites);
    }
  };

  // Zapisuje ulubione miasta do localStorage
  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Ładuje ulubione miasta z localStorage
  const loadFavoritesFromLocalStorage = () => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  };

  const initialFavorites = loadFavoritesFromLocalStorage();  // Pobranie początkowych ulubionych miast

  const handleViewChange = (viewType) => {
    setView(viewType);  // Zmiana widoku na "all" lub "favorites"
  };

  const displayCities = view === 'favorites' ? favorites : filteredCities;

  return (
    <div className="left">
      <h4>Search for a city</h4>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Aktualizacja stanu wyszukiwania
        />
      </div>

      <div className="buttons">
        <button
          className="button-left"
          onClick={() => handleViewChange('all')} // Pokazuje wszystkie miasta
        >
          All Cities
        </button>
        <button
          className="button-left"
          onClick={() => handleViewChange('favorites')} // Pokazuje ulubione miasta
        >
          Favorite Cities
        </button>
      </div>

      <div>
        {view === 'favorites' && favorites.length === 0 && (
          <p className="empty-favorites-message">Your favorite cities list is empty.</p>
        )}
      </div>

      <div>
        {displayCities.map((city, index) => (
          <div
            className="city"
            key={index}
            onClick={() => setSelectedCity(city)} // Ustawia miasto po kliknięciu
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
              className={`favorite-icon ${favorites.some(fav => fav.name === city.name) ? 'active' : ''}`}
              onClick={() => handleFavoriteToggle(city)}  // Obsługuje dodawanie/usuń ulubione miasto
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
