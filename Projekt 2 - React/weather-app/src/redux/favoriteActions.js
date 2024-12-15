export const addFavorite = (city) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // Pobieramy ulubione miasta z localStorage
  favorites.push(city);  // Dodajemy miasto do listy
  localStorage.setItem('favorites', JSON.stringify(favorites));  // Zapisujemy listę z powrotem do localStorage
  
  return {
    type: 'ADD_FAVORITE',
    payload: city,
  };
};

export const removeFavorite = (cityName) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // Pobieramy ulubione miasta z localStorage
  favorites = favorites.filter(city => city.name !== cityName);  // Usuwamy miasto z listy
  localStorage.setItem('favorites', JSON.stringify(favorites));  // Zapisujemy listę z powrotem do localStorage

  return {
    type: 'REMOVE_FAVORITE',
    payload: cityName,
  };
};
