// components/Contact.js
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Vous avez des questions sur nos services ou souhaitez réserver un véhicule ? Notre équipe est à votre disposition.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-600">123 Avenue des Champs-Élysées, 75008 Paris</p>
                </div>
              </div>
              
              {/* Autres informations de contact */}
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white p-3 rounded-full text-gray-700 transition duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* Autres réseaux sociaux */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Votre nom" />
              </div>
              
              {/* Autres champs du formulaire */}
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition duration-300">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;