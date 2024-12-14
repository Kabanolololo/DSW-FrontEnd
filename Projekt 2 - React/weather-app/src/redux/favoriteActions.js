// Akcja do dodania miasta do ulubionych
export const addFavorite = (city) => ({
    type: 'ADD_FAVORITE',
    payload: city,
  });
  
  // Akcja do usunięcia miasta z ulubionych
  export const removeFavorite = (cityName) => ({
    type: 'REMOVE_FAVORITE',
    payload: cityName,
  });
  