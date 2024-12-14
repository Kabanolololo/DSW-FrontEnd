# Opis Komponentów w Projekcie Weather App

### App.jsx
- Główna aplikacja, która ustawia routingi i przekazuje Redux Store do komponentów.

### Left.jsx
- Wyświetla listę miast oraz dynamiczne wyszukiwanie miast w czasie rzeczywistym.
- Umożliwia wybór miasta, które jest następnie przekazywane jako wybrane.
- Obsługuje wyświetlanie temperatury w jednostkach (Celsius/Fahrenheit).

### Block.jsx
- Pokazuje szczegółowe dane pogodowe dla wybranego miasta, takie jak:
  - Aktualna temperatura.
  - Prognoza na 5 dni.
  - Kierunek i prędkość wiatru.
  - Pokrycie chmur i dane o opadach deszczu.

### Settings.jsx
- Sekcja ustawień, w której użytkownik może zmienić jednostkę temperatury na Celsius lub Fahrenheit.

### About.jsx
- Wyświetla informacje o aplikacji, w tym autora projektu oraz krótki opis funkcjonalności.

### WeatherIcons.js
- Mapa ikon pogodowych, która przypisuje odpowiednie obrazy do warunków pogodowych takich jak słońce, deszcz, śnieg itd.

### CityList.js
- Przechowuje statyczne dane o miastach, ich prognozach pogodowych oraz dodatkowych informacjach.

### temperatureReducer.js
- Reducer w Reduxie odpowiedzialny za zmianę jednostki temperatury (Celsius/Fahrenheit) na podstawie akcji.

### temperatureActions.js
- Definicja akcji w Reduxie służących do zmiany jednostki temperatury.

### store.js
- Główne miejsce konfiguracji Redux Store, które łączy reducery i pozwala na globalne zarządzanie stanem aplikacji.
