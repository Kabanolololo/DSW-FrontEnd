import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Block.css';
import weatherIcons from './WeatherIcons';

const Block = ({ selectedCity }) => {
  // Pobieramy jednostkę z Redux
  const unit = useSelector((state) => state.temperature.unit);

  // Funkcja do konwersji temperatury
  const convertTemperature = (temp, unit) => {
    if (unit === 'Fahrenheit') {
      return (temp * 9/5) + 32;  // Konwersja na Fahrenheit
    }
    return temp;  // Zwracamy Celsius, jeśli jednostka to Celsius
  };

  useEffect(() => {
    if (selectedCity) {
      console.log(`Ładowanie danych pogodowych dla miasta: ${selectedCity.name}`);
    }
  }, [selectedCity]);

  // Sprawdzamy, czy wybrane miasto jest prawidłowe
  if (!selectedCity || !selectedCity.name) {
    return <p className='paragraph'>Please select a city to show more information.</p>;
  }

  return (
    <div className='weather'>
      <h1 className='cityname'>{selectedCity.name}</h1>
      <img
        className='big-picture'
        src={weatherIcons[selectedCity.weather] || weatherIcons.sunny}
        alt='weather icon'
      />
      <p className='degrees'>
        {convertTemperature(selectedCity.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
      </p>
      <div className='next-days'>
        {selectedCity.forecast.map((forecastDay, index) => (
          <div className='day' key={index}>
            <p className='little-degrees'>Dzień: {forecastDay.day}</p>
            <img
              className='little-picture'
              src={weatherIcons[forecastDay.weather] || weatherIcons.sunny}
              alt='weather icon'
            />
            <p className='little-degrees'>
              Średnia: {convertTemperature(forecastDay.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
            </p>
          </div>
        ))}
      </div>
      <div className='more-info'>
        <div className='per-clouds'>
          <p className='info'>Zachmurzenie:</p>
          <p className='percentage'>{selectedCity.overcast}</p>
        </div>
        <div className='wind'>
          <p className='text'>Wiatr:</p>
          <p>Kierunek: {selectedCity.wind.direction}</p>
          <p>Prędkość: {selectedCity.wind.speed}</p>
        </div>
      </div>

      <div className='rain'>
        <h4>Szansa na deszcz</h4>
        <p>Procent: {selectedCity.rain.chance}</p>
        <p>Ilość: {selectedCity.rain.amount}</p>
      </div>
    </div>
  );
};

export default Block;
