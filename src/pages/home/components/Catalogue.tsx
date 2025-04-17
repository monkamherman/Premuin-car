// components/Catalogue.js
import React from 'react';
import CarCard from './CarCard';

const Catalogue:React.FC = () => {
  const cars = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Mercedes Classe S",
      type: "Berline de luxe",
      price: 80000,
      driver: "Avec chauffeur",
      seats: 5,
      fuel: "Diesel",
      transmission: "Automatique"
    },
    // ... autres voitures
  ];

  return (
    <section id="catalogue" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Notre Catalogue Exclusif</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de véhicules premium disponibles à la location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300">
            Voir plus de véhicules
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;