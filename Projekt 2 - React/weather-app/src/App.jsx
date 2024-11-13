import React, { useState } from 'react';
import Left from './components/Left';
import Block from './components/Block';
import './App.css';

const App = () => {
  // useState - Tworzy stan dla wybranego miasta, który przekazujemy do komponentów jako "selectedCity"
  // Gdy użytkownik kliknie na miasto w komponencie Left, ten stan jest aktualizowany i przekazywany do komponentu Block
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className='app'>
      <Left setSelectedCity={setSelectedCity} /> {/* Przekazanie funkcji ustawiającej wybrane miasto do komponentu Left */}
      <Block selectedCity={selectedCity} /> {/* Przekazanie wybranego miasta do komponentu Block */}
    </div>
  );
};

export default App;
