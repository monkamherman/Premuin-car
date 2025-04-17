import { CiLocationOn } from "react-icons/ci"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
import { ImWhatsapp } from "react-icons/im"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
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
                  <CiLocationOn />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-600">123 Avenue des Champs-Élysées, 75008 Paris</p>
                  <p className="text-gray-600">Ouvert du lundi au samedi de 8h à 20h</p>
                </div>
              </div>
              
              <div className="flex items-start">
    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
      <AiOutlinePhone />
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
      <p className="text-gray-600">+33 1 23 45 67 89</p>
      <p className="text-gray-600">Service client 24/7 pour les urgences</p>
    </div>
  </div>
  
  <div className="flex items-start">
    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
      <AiOutlineMail />
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-medium text-gray-900">Email</h3>
      <p className="text-gray-600">contact@premiumdrive.fr</p>
      <p className="text-gray-600">reservations@premiumdrive.fr</p>
      <p className="text-gray-600">Réponse sous 24h</p>
    </div>
  </div>
              
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white p-3 rounded-full text-gray-700 transition duration-300">
                    <CgFacebook />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white p-3 rounded-full text-gray-700 transition duration-300">
                    <AiOutlineTwitter />

                  </a><a href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white p-3 rounded-full text-gray-700 transition duration-300">
                    <ImWhatsapp />
                  </a><a href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white p-3 rounded-full text-gray-700 transition duration-300">
                    <BsInstagram />
                  </a>
                 
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
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Votre email" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Votre message" rows={4}></textarea>
              </div>
              
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