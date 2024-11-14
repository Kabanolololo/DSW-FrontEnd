const initialState = {
    unit: 'Celsius',  // Domyślna jednostka to Celsius
  };
  
  const temperatureReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_UNIT':
        return {
          ...state,
          unit: action.payload,  // Zmieniamy jednostkę na podstawie akcji
        };
      default:
        return state;
    }
  };
  
  export default temperatureReducer;
  