// components/CarCard.js
import React from 'react';

import React from 'react';

interface Car {
  type: string;
  price: number;
  driver: string;
  image: string;
  name: string;
  seats: number;
  fuel: string;
  transmission: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300">
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
        <div className={`absolute top-4 right-4 ${car.driver === "Avec chauffeur" ? "bg-blue-600" : "bg-green-600"} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {car.driver}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
            <p className="text-gray-600">{car.type}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-blue-600">€{car.price}</span>
            <span className="block text-sm text-gray-500">/jour</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"><i className="fas fa-user mr-1"></i> {car.seats} places</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"><i className="fas fa-gas-pump mr-1"></i> {car.fuel}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"><i className="fas fa-tachometer-alt mr-1"></i> {car.transmission}</span>
        </div>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300">
          Réserver maintenant
        </button>
      </div>
    </div>
  );
};

export default CarCard;