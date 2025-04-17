// components/Navbar.js
import React from 'react';

const Navbar:React.FC = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-car text-2xl text-blue-600 mr-2"></i>
              <span className="text-xl font-bold text-gray-900">PremiumDrive</span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Accueil</a>
            <a href="#catalogue" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Catalogue</a>
            <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
            <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;