// components/FAQ.js
import React from 'react';
import { useFAQ } from '@/hooks/useFAQ';

const FAQ: React.FC = () => {
  const { activeFAQ, toggleFAQ } = useFAQ();
  const faqs = [
    {
      id: 1,
      question: "Quels sont les documents nécessaires pour louer une voiture ?",
      answer: "Pour louer un véhicule chez PremiumDrive, vous aurez besoin :",
      items: [
        "D'un permis de conduire valide (minimum 2 ans d'ancienneté)",
        "D'une pièce d'identité (passeport ou carte d'identité)",
        "D'une carte de crédit à votre nom pour la caution",
        "D'un justificatif de domicile de moins de 3 mois pour les locations sans chauffeur"
      ]
    },
    // ... autres questions
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map(faq => (
            <div key={faq.id} className="bg-white p-6 rounded-xl shadow-md">
              <button 
                onClick={() => toggleFAQ(faq.id)} 
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <i className={`fas ${activeFAQ === faq.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-600 transition-transform duration-300`}></i>
              </button>
              {activeFAQ === faq.id && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {faq.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;