const citiesData = [
  {
    name: 'Wieluń',
    temp: 15,
    weather: 'sunny',
    forecast: [
      { day: 'Mon', temp: 16, weather: 'sunny' },
      { day: 'Tue', temp: 14, weather: 'rain' },
      { day: 'Wed', temp: 15, weather: 'snow' },
      { day: 'Thu', temp: 17, weather: 'thunder' },
      { day: 'Fri', temp: 18, weather: 'sunny' },
    ],
    overcast: '20%',
    wind: { direction: 'W', speed: '10 m/s' },
    rain: { chance: '30%', amount: '5 mm/m²' },
  },
  {
    name: 'Warszawa',
    temp: 12,
    weather: 'rain',
    forecast: [
      { day: 'Mon', temp: 13, weather: 'rain' },
      { day: 'Tue', temp: 12, weather: 'thunder' },
      { day: 'Wed', temp: 10, weather: 'snow' },
      { day: 'Thu', temp: 14, weather: 'moon' },
      { day: 'Fri', temp: 13, weather: 'rain' },
    ],
    overcast: '50%',
    wind: { direction: 'E', speed: '12 m/s' },
    rain: { chance: '60%', amount: '10 mm/m²' },
  },
];

export default citiesData;
