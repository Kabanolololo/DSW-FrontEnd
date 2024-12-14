// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import temperatureReducer from './temperatureReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  temperature: temperatureReducer,
  favorites: favoriteReducer, // Dodajemy nasz reduktor dla ulubionych miast
});

const store = createStore(rootReducer);

export default store;
