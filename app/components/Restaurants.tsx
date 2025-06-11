import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);

  const restaurants = [
    {
      id: 1,
      name: 'CAPORAL CHICKEN Avignon',
      address: '10 rue de la Rmenie, 84000 Avignon',
      phone: '07 82 19 71 82',
      hours: 'Lun-Dim: 11h-23h',
      coordinates: { lat: 43.949317, lng: 4.805528 }
    },
    {
      id: 2,
      name: 'CAPORAL CHICKEN Nîmes',
      address: '15 avenue Jean Jaurès, 30000 Nîmes',
      phone: '04 66 00 00 00',
      hours: 'Lun-Dim: 11h-23h',
      coordinates: { lat: 43.836699, lng: 4.360054 }
    },
    {
      id: 3,
      name: 'CAPORAL CHICKEN Orange',
      address: '8 rue de la République, 84100 Orange',
      phone: '04 90 00 00 00',
      hours: 'Lun-Dim: 11h-23h',
      coordinates: { lat: 44.137393, lng: 4.808236 }
    },
    {
      id: 4,
      name: 'CAPORAL CHICKEN Montpellier',
      address: '25 place de la Comédie, 34000 Montpellier',
      phone: '04 67 00 00 00',
      hours: 'Lun-Dim: 11h-23h',
      coordinates: { lat: 43.610769, lng: 3.876716 }
    },
    {
      id: 5,
      name: 'CAPORAL CHICKEN Marseille',
      address: '5 rue de la République, 13001 Marseille',
      phone: '04 91 00 00 00',
      hours: 'Lun-Dim: 11h-23h',
      coordinates: { lat: 43.296482, lng: 5.369780 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nos Restaurants
        </h1>

        {/* Map Container */}
        <div className="relative h-[500px] mobile:h-[300px] bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            {/* Ici, vous intégrerez votre carte (Google Maps, Mapbox, etc.) */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Carte interactive à intégrer</p>
            </div>
          </div>
        </div>

        {/* Restaurant List */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 ${
                selectedRestaurant === restaurant.id
                  ? 'ring-2 ring-spicy-red'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedRestaurant(restaurant.id)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{restaurant.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-spicy-red mt-1" />
                  <p className="text-gray-600">{restaurant.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-5 h-5 text-spicy-red" />
                  <p className="text-gray-600">{restaurant.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="w-5 h-5 text-spicy-red" />
                  <p className="text-gray-600">{restaurant.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants; 