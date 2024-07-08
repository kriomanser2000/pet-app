import React from 'react';
import PetInfo from './PetInfo';
const Pet = ({ name, species, age, description }) => 
{
  return (
    <div className="pet">
      <h2>{name}</h2>
      <PetInfo species={species} age={age} description={description} />
    </div>
  );
};
export default Pet;