import React from 'react';

const Testimonials:React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      rating: 5,
      comment: "Le service avec chauffeur pour mon mariage était impeccable. Ponctualité, professionnalisme et voiture magnifique. Je recommande vivement !",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      position: "Mariée heureuse"
    },
    {
      id: 2,
      name: "Thomas Lefèvre",
      rating: 5,
      comment: "J'ai loué une Porsche 911 pour le week-end. Le véhicule était en parfait état et le processus de location très simple. À refaire !",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      position: "Entrepreneur"
    },
    {
      id: 3,
      name: "Élodie Dubois",
      rating: 4.5,
      comment: "Service de chauffeur exceptionnel pour nos clients étrangers. Très professionnel et parlant plusieurs langues. Un vrai plus pour notre entreprise.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      position: "Directrice Commerciale"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonial.image} 
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-200">{testimonial.position}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white bg-opacity-0 hover:bg-opacity-10 border-2 border-white text-white px-8 py-3 rounded-md font-medium transition duration-300">
            <i className="fas fa-comment-alt mr-2"></i> Laisser un avis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;