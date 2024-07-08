import React from 'react';
const PetInfo = ({ species, age, description }) => 
{
  return (
    <div className="pet-info">
      <p><strong>Species:</strong> {species}</p>
      <p><strong>Age:</strong> {age} years</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};
export default PetInfo;