import React from 'react';
import { AddCircle } from 'react-ionicons';

const CarSpecificationCard = ({ name, details, icon }) => {
  const IconComponent = icon || AddCircle;

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {React.createElement(IconComponent, { className: 'text-3xl', color: '#43B02A' })}
      </div>
      <p className="text-gray-300 mt-2">{details}</p>
    </div>
  );
};

export default CarSpecificationCard;