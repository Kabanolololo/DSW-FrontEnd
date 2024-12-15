import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from '../redux/temperatureActions';
import './Settings.css';

const UnitSelector = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperature.unit);  // Pobieramy jednostkę z Redux

  // Funkcja zmieniająca jednostkę temperatury
  const handleUnitChange = (unit) => {
    dispatch(setUnit(unit));  // Wysyłamy akcję z nową jednostką
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <p className="settings-description">
        In this section, you can customize various settings, including the temperature unit.
        Choose between Celsius and Fahrenheit for displaying the temperature data.
      </p>
      <h3>Change Temperature Unit</h3>
      <div className="unit-selector">
        <button
          onClick={() => handleUnitChange('Celsius')}
          className={`unit-button ${unit === 'Celsius' ? 'active' : ''}`}  // Zaznaczamy wybraną jednostkę
        >
          Celsius
        </button>
        <button
          onClick={() => handleUnitChange('Fahrenheit')}
          className={`unit-button ${unit === 'Fahrenheit' ? 'active' : ''}`}  // Zaznaczamy wybraną jednostkę
        >
          Fahrenheit
        </button>
      </div>
    </div>
  );
};

export default UnitSelector;
