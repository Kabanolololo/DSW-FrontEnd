import { createStore } from 'redux';
import temperatureReducer from './temperatureReducer';

const store = createStore(temperatureReducer);

export default store;
