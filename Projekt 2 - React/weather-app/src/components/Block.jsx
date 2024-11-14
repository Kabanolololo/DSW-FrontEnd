import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Block.css';
import weatherIcons from './WeatherIcons';

const Block = ({ selectedCity }) => {
  // Pobieramy jednostkę temperature reducer
  const unit = useSelector((state) => state.unit);

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

  if (!selectedCity) {
    return <p className='paragraph'>Please select a city to see the weather.</p>;
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
            <p className='little-degrees'>Day: {forecastDay.day}</p>
            <img
              className='little-picture'
              src={weatherIcons[forecastDay.weather] || weatherIcons.sunny}
              alt='weather icon'
            />
            <p className='little-degrees'>
              Avg: {convertTemperature(forecastDay.temp, unit)}°{unit === 'Celsius' ? 'C' : 'F'}
            </p>
          </div>
        ))}
      </div>
      <div className='more-info'>
        <div className='per-clouds'>
          <p className='info'>Overcast:</p>
          <p className='percentage'>{selectedCity.overcast}</p>
        </div>
        <div className='wind'>
          <p className='text'>Wind:</p>
          <p>Direction: {selectedCity.wind.direction}</p>
          <p>Speed: {selectedCity.wind.speed}</p>
        </div>
      </div>

      <div className='rain'>
        <h4>Chance of rain</h4>
        <p>Percentage: {selectedCity.rain.chance}</p>
        <p>Amount: {selectedCity.rain.amount}</p>
      </div>
    </div>
  );
};

export default Block;
