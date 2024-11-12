import React, { useState } from 'react';
import Left from './components/Left';
import Block from './components/Block';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null); // Stan do przechowywania wybranego miasta

  return (
    <div className='app'>
      <Left setSelectedCity={setSelectedCity} /> 
      <Block selectedCity={selectedCity} /> 
    </div>
  );
};

export default App;
