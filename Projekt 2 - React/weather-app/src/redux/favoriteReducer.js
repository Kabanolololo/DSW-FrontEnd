const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],  // Inicjalizujemy listę ulubionych miast z localStorage
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(city => city.name !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
