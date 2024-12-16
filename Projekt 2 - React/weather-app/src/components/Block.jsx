import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './Block.css';
import weatherIcons from './WeatherIcons';

const Block = ({ selectedCity }) => {
  const unit = useSelector((state) => state.temperature.unit);  // Jednostka temperatury

  // Zmienna na przechowywanie prognoz na 5 dni
  const [forecastData, setForecastData] = useState(null);

  const API_KEY = 'cd77e9da6598f01ac4e76d48bdb6b67d';  // Twój klucz API
  const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';  // Endpoint API dla prognoz na 5 dni

  // Funkcja do konwersji temperatury
  const convertTemperature = (temp, unit) => {
    let convertedTemp;
    if (unit === 'Fahrenheit') {
      convertedTemp = (temp * 9 / 5) + 32;  // Konwersja na Fahrenheit
    } else {
      convertedTemp = temp;  // Zwracamy Celsius, jeśli jednostka to Celsius
    }
    return parseFloat(convertedTemp.toFixed(0));  // Zaokrąglamy do 0 miejsc po przecinku
  };

  // Pobieranie prognozy na 5 dni z API OpenWeather
  const fetchForecastData = async (cityName) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: unit === 'Celsius' ? 'metric' : 'imperial',  // Jednostka temperatury
        }
      });
      setForecastData(response.data);  // Zapisz dane prognozy
    } catch (error) {
      console.error("Błąd podczas pobierania prognozy:", error);
    }
  };

  // Wywołanie fetch przy zmianie selectedCity lub jednostki temperatury
  useEffect(() => {
    if (selectedCity) {
      fetchForecastData(selectedCity.name);  // Pobierz prognozę, jeśli miasto zostało wybrane
    }
  }, [selectedCity, unit]);  // Zaktualizuj, jeśli selectedCity lub unit się zmieni

  // Jeżeli brak wybranego miasta lub danych prognozy
  if (!selectedCity || !forecastData) {
    return <p className="paragraph">Please select a city to show more information.</p>;
  }

  // Funkcja pomocnicza do uzyskania dnia tygodnia (np. "Mon", "Tue")
  const getDayOfWeek = (dateString) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  // Group the forecast by day
  const dailyForecast = forecastData.list.reduce((acc, curr) => {
    const date = curr.dt_txt.split(' ')[0]; // Extract the date from the timestamp
    if (!acc[date]) acc[date] = [];
    acc[date].push(curr);
    return acc;
  }, {});

  const dailyForecastArray = Object.keys(dailyForecast).map(date => {
    const dailyData = dailyForecast[date];
    const avgTemp = dailyData.reduce((sum, item) => sum + item.main.temp, 0) / dailyData.length;
    const weather = dailyData[0].weather[0].main; // Use the first weather condition of the day
    return {
      date,
      avgTemp,
      weather
    };
  });

  // Remove the current day (today) from the forecast array
  const tomorrowForecast = dailyForecastArray.slice(1, 6);  // Starts from the second day, shows 5 days

  return (
    <div className="weather">
      <h1 className="cityname">{selectedCity.name}</h1>
      <img
        className="big-picture"
        src={weatherIcons[forecastData.list[0].weather[0].main.toLowerCase()] || weatherIcons.sunny}
        alt="weather icon"
      />
      <p className="degrees">
        {convertTemperature(forecastData.list[0].main.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
      </p>

      {/* Prognoza na 5 dni, bez dzisiejszego dnia */}
      <div className="next-days">
        {tomorrowForecast.map((day, index) => (
          <div className="day" key={index}>
            <div className="day-info">
              <p className="day-name">{getDayOfWeek(day.date)}</p> {/* Dzień tygodnia */}
              <p className="date">{day.date}</p> {/* Data */}
            </div>
            <img
              className="little-picture"
              src={weatherIcons[day.weather.toLowerCase()] || weatherIcons.sunny}
              alt="weather icon"
            />
            <p className="little-degrees">
              Średnia: {convertTemperature(day.avgTemp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
            </p>
          </div>
        ))}
      </div>

      {/* Szczegóły o pogodzie */}
      <div className="more-info">
        <div className="per-clouds">
          <p className="info">Zachmurzenie:</p>
          <p className="percentage">{forecastData.list[0].clouds.all}%</p> {/* Zachmurzenie */}
        </div>
        <div className="wind">
          <p className="text">Wiatr:</p>
          <p>Kierunek: {forecastData.list[0].wind.deg}°</p> {/* Kierunek wiatru */}
          <p>Prędkość: {forecastData.list[0].wind.speed} m/s</p> {/* Prędkość wiatru */}
        </div>
      </div>

      {/* Szansa na deszcz */}
      <div className="rain">
        <h4>Szansa na deszcz</h4>
        <p>Procent: {forecastData.list[0].rain ? forecastData.list[0].rain["3h"] || 0 : 0}%</p>
        <p>Ilość: {forecastData.list[0].rain ? forecastData.list[0].rain["3h"] || 0 : 0} mm</p>
      </div>
    </div>
  );
};

export default Block;
