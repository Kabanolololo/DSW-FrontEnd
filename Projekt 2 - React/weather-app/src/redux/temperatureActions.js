export const setUnit = (unit) => {
  localStorage.setItem('temperatureUnit', unit);  // Zapisanie jednostki do localStorage
  return {
    type: 'SET_UNIT',
    payload: unit,
  };
};
