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
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1494972308801-7e3f1a9a9088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Range Rover Sport",
        type: "SUV Premium",
        price: 280,
        driver: "Sans chauffeur",
        seats: 5,
        fuel: "Essence",
        transmission: "Automatique"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Porsche 911",
        type: "Voiture de sport",
        price: 450,
        driver: "Sans chauffeur",
        seats: 2,
        fuel: "Essence",
        transmission: "Manuelle"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Tesla Model X",
        type: "Électrique",
        price: 320,
        driver: "Avec chauffeur",
        seats: 7,
        fuel: "Électrique",
        transmission: "Automatique"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
        name: "Audi A6",
        type: "Berline",
        price: 220,
        driver: "Sans chauffeur",
        seats: 5,
        fuel: "Diesel",
        transmission: "Automatique"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1591768793355-5d83d01c5887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80",
        name: "BMW Série 7",
        type: "Berline de luxe",
        price: 380,
        driver: "Avec chauffeur",
        seats: 5,
        fuel: "Hybride",
        transmission: "Automatique"
      }
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