Opis komponentów
1. Komponent Left
Komponent Left jest odpowiedzialny za wyświetlanie listy dostępnych miast oraz za interfejs umożliwiający użytkownikowi dodanie nowego miasta do listy.

Funkcje komponentu:
Lista miast: Wyświetla listę istniejących miast z nazwą, aktualną temperaturą oraz ikoną reprezentującą warunki pogodowe.
Dodawanie nowego miasta: Zawiera pole tekstowe oraz przycisk, które umożliwiają użytkownikowi wpisanie nazwy nowego miasta i dodanie go do listy z domyślnymi wartościami pogody.
Komponent Left przekazuje wybrane miasto do głównego komponentu App, co pozwala na wyświetlenie szczegółowego widoku dla danego miasta. W tym celu użyto hooka useState, który przechowuje:

listę miast
aktualnie wpisany tekst w polu dodawania miasta.
2. Komponent Block
Komponent Block odpowiada za wyświetlanie szczegółowych informacji pogodowych dla aktualnie wybranego miasta.

Funkcje komponentu:
Aktualne dane pogodowe: Wyświetla nazwę miasta, ikonę pogody, aktualną temperaturę oraz podstawowe informacje o zachmurzeniu, wietrze i opadach.
Prognoza na kolejne dni: Zawiera podgląd na kilka kolejnych dni, gdzie dla każdego dnia wyświetlane są:
dzień tygodnia,
ikona pogody,
przewidywana temperatura.
Do wyświetlania prognozy na kolejne dni Block korzysta z reużywalnego komponentu WeatherDay, aby w sposób modułowy renderować prognozę dla każdego dnia.

Komponent Block wykorzystuje hook useEffect do reakcji na zmiany danych wybranego miasta, co umożliwia uaktualnienie widoku przy każdej zmianie.

3. Komponent CityList
Komponent przechowuje dane o miastach

4. Komponent WeatherIcons
Komponent przechowuje dane o ikonach
