const initialState = {
    favorites: [], // Będzie przechowywał listę ulubionych miast
  };
  
  const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        // Dodajemy miasto do ulubionych, sprawdzając, czy już tam nie jest
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        // Usuwamy miasto na podstawie jego nazwy
        return {
          ...state,
          favorites: state.favorites.filter(city => city.name !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
  