// components/Services.js
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fa-user-tie",
      title: "Avec Chauffeur Professionnel",
      description: "Profitez d'un service de chauffeur expérimenté pour vos déplacements professionnels ou événements spéciaux.",
      features: [
        "Ponctualité garantie",
        "Connaissance approfondie du réseau routier",
        "Service discret et professionnel"
      ]
    },
    
  {
    icon: "fa-car-alt",
    title: "Location Sans Chauffeur",
    description: "Louez nos véhicules premium en toute liberté pour vos déplacements personnels ou professionnels.",
    features: [
      "Assurance tous risques incluse",
      "Kilométrage illimité",
      "Livraison possible sur demande",
      "Service 24h/24 et 7j/7"
    ]
  },
  {
    icon: "fa-calendar-star",
    title: "Événements Spéciaux",
    description: "Service premium pour mariages, anniversaires, soirées d'entreprise et autres occasions spéciales.",
    features: [
      "Flotte dédiée pour événements",
      "Décoration personnalisable",
      "Service sur mesure",
      "Photos souvenirs offertes"
    ]
  }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nos Services Premium</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons une expérience de location haut de gamme adaptée à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 mb-4">
                <i className={`fas ${service.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;