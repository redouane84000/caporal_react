import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Découvrez nos Poulets Spicy",
      description: "Une expérience unique de saveurs",
      image: "/carroussel1.png"
    },
    {
      id: 2,
      title: "Nos Menus Signature",
      description: "Des combinaisons parfaites",
      image: "/carroussel2.png"
    },
    {
      id: 3,
      title: "Offre Spéciale",
      description: "-10% pour les membres",
      image: "/carroussel3.png"
    }
  ];

  const specialites = [
    {
      id: 1,
      name: "Burger Double",
      description: "Notre best-seller",
      image: "/burger3.png",
      price: "11.90€",
      category: "burgers"
    },
    {
      id: 2,
      name: "Menu Tenders",
      description: "Le préféré des clients",
      image: "/burger-2tenders-frite.png",
      price: "13.90€",
      category: "menus"
    },
    {
      id: 3,
      name: "Salade Gourmande",
      description: "L'équilibre parfait",
      image: "/salade3.png",
      price: "10.90€",
      category: "salades"
    }
  ];

  const temoignages = [
    {
      id: 1,
      name: "Sophie M.",
      comment: "Les meilleurs burgers que j'ai mangés ! La viande est parfaitement cuite et les frites sont délicieuses.",
      rating: 5,
      image: "/burger3.png"
    },
    {
      id: 2,
      name: "Thomas L.",
      comment: "Service rapide et nourriture de qualité. Je recommande particulièrement les menus tenders !",
      rating: 5,
      image: "/burger-2tenders-frite.png"
    },
    {
      id: 3,
      name: "Julie D.",
      comment: "Une expérience culinaire exceptionnelle. Les salades sont fraîches et savoureuses.",
      rating: 5,
      image: "/salade3.png"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleSpecialiteClick = (category: string) => {
    navigate('/produits', { state: { activeCategory: category } });
  };

  return (
    <div className="min-h-screen">
      {/* Carousel Section */}
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className={`w-full h-full ${
                  currentSlide === 0 
                    ? 'object-cover' 
                    : 'object-contain md:object-cover'
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-center h-full text-crispy-white px-4">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl mobile:text-2xl font-bold mb-4 text-center max-w-2xl"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl mobile:text-lg text-center max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-spicy-red bg-opacity-50 text-crispy-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-spicy-red bg-opacity-50 text-crispy-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-spicy-red' : 'bg-crispy-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Nos Spécialités Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Nos Spécialités
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialites.map((specialite, index) => (
              <motion.div
                key={specialite.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={specialite.image}
                    alt={specialite.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{specialite.name}</h3>
                      <p className="text-sm mb-2">{specialite.description}</p>
                      <p className="text-xl font-bold text-spicy-red mb-4">{specialite.price}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSpecialiteClick(specialite.category)}
                        className="w-full bg-spicy-red text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-200"
                      >
                        Voir la carte
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Ce que disent nos clients
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={temoignage.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={temoignage.image}
                    alt={temoignage.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(temoignage.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{temoignage.comment}"</p>
                  <p className="font-bold text-gray-800">{temoignage.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 