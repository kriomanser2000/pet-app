import React from 'react';
import './App.css';
import Pet from './components/Pet';
const App = () => 
{
  const petData = 
  {
    name: 'Super Cat Albedro',
    species: 'Cat',
    age: 3,
    description: 'A friendly and playful cat'
  };
  return (
    <div className="App">
      <h1>Pet Information</h1>
      <Pet
        name={petData.name}
        species={petData.species}
        age={petData.age}
        description={petData.description}
      />
    </div>
  );
};
export default App;