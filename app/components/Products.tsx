import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHamburger, FaUtensils, FaIceCream, FaGlassWhiskey, FaLeaf } from 'react-icons/fa';
import { GiFrenchFries } from 'react-icons/gi';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

type CategoryId = 'promotions' | 'menus' | 'burgers' | 'frites' | 'salades' | 'boissons' | 'desserts';

type Products = {
  [K in CategoryId]: Product[];
};

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('promotions');
  const [isLoggedIn] = useState(false); // À remplacer par le vrai état de connexion
  const { addItem } = useCart();

  useEffect(() => {
    if (location.state?.activeCategory) {
      setActiveCategory(location.state.activeCategory);
    }
  }, [location.state]);

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  const categories = [
    { id: 'promotions' as CategoryId, name: 'En ce moment', icon: FaStar },
    { id: 'menus' as CategoryId, name: 'Nos Menus', icon: FaUtensils },
    { id: 'burgers' as CategoryId, name: 'Nos Burgers', icon: FaHamburger },
    { id: 'frites' as CategoryId, name: 'Nos Frites', icon: GiFrenchFries },
    { id: 'salades' as CategoryId, name: 'Nos Salades', icon: FaLeaf },
    { id: 'boissons' as CategoryId, name: 'Nos Boissons', icon: FaGlassWhiskey },
    { id: 'desserts' as CategoryId, name: 'Nos Desserts', icon: FaIceCream },
  ];

  const products: Products = {
    promotions: [
      { id: 1, name: 'Menu 2 Tenders + Frites', price: 13.90, image: '/burger-2tenders-frite.png' },
      { id: 2, name: 'Burger Double', price: 11.90, image: '/burger3.png' },
      { id: 3, name: 'Salade Gourmande', price: 10.90, image: '/salade3.png' },
      { id: 4, name: 'Menu Burger + Boisson + Frites', price: 14.90, image: '/burger-boisson-frite.png' },
      { id: 5, name: 'Glace Chocolat', price: 3.90, image: '/dessert2.png' },
      { id: 6, name: 'Burger Cheese', price: 9.90, image: '/burger2.png' },
      { id: 7, name: 'Salade César', price: 8.90, image: '/salade1.png' },
      { id: 8, name: 'Menu Tender + Frites + Boisson', price: 14.90, image: '/burger-tender-frite-boisson.png' },
    ],
    menus: [
      { id: 1, name: 'Menu 2 Tenders + Frites', price: 13.90, image: '/burger-2tenders-frite.png' },
      { id: 2, name: 'Menu Burger + Boisson + Frites', price: 14.90, image: '/burger-boisson-frite.png' },
      { id: 3, name: 'Menu Burger + Frites + Tenders', price: 15.90, image: '/burger-frite-tenders.png' },
      { id: 4, name: 'Menu Tender + Frites + Boisson', price: 14.90, image: '/burger-tender-frite-boisson.png' },
      { id: 5, name: 'Menu 2 Tenders + Frites', price: 13.90, image: '/burger-2tenders-frite.png' },
      { id: 6, name: 'Menu Burger + Boisson + Frites', price: 14.90, image: '/burger-boisson-frite.png' },
      { id: 7, name: 'Menu Burger + Frites + Tenders', price: 15.90, image: '/burger-frite-tenders.png' },
      { id: 8, name: 'Menu Tender + Frites + Boisson', price: 14.90, image: '/burger-tender-frite-boisson.png' },
    ],
    burgers: [
      { id: 1, name: 'Burger Classic', price: 8.90, image: '/burger1.png' },
      { id: 2, name: 'Burger Cheese', price: 9.90, image: '/burger2.png' },
      { id: 3, name: 'Burger Double', price: 11.90, image: '/burger3.png' },
      { id: 4, name: 'Burger Deluxe', price: 10.90, image: '/burger4.png' },
      { id: 5, name: 'Burger Classic', price: 8.90, image: '/burger1.png' },
      { id: 6, name: 'Burger Cheese', price: 9.90, image: '/burger2.png' },
      { id: 7, name: 'Burger Double', price: 11.90, image: '/burger3.png' },
      { id: 8, name: 'Burger Deluxe', price: 10.90, image: '/burger4.png' },
    ],
    frites: [
      { id: 1, name: 'Frites Classiques', price: 3.90, image: '/frite1.png' },
      { id: 2, name: 'Frites Spicy', price: 4.90, image: '/frite2.png' },
      { id: 3, name: 'Frites Deluxe', price: 5.90, image: '/frite1.png' },
      { id: 4, name: 'Frites Premium', price: 6.90, image: '/frite2.png' },
      { id: 5, name: 'Frites Family', price: 7.90, image: '/frite1.png' },
      { id: 6, name: 'Frites Party', price: 8.90, image: '/frite2.png' },
      { id: 7, name: 'Frites Solo', price: 2.90, image: '/frite1.png' },
      { id: 8, name: 'Frites Duo', price: 5.90, image: '/frite2.png' },
    ],
    salades: [
      { id: 1, name: 'Salade César', price: 8.90, image: '/salade1.png' },
      { id: 2, name: 'Salade Composée', price: 9.90, image: '/salade2.png' },
      { id: 3, name: 'Salade Gourmande', price: 10.90, image: '/salade3.png' },
      { id: 4, name: 'Salade Healthy', price: 9.90, image: '/salade4.png' },
      { id: 5, name: 'Salade César', price: 8.90, image: '/salade1.png' },
      { id: 6, name: 'Salade Composée', price: 9.90, image: '/salade2.png' },
      { id: 7, name: 'Salade Gourmande', price: 10.90, image: '/salade3.png' },
      { id: 8, name: 'Salade Healthy', price: 9.90, image: '/salade4.png' },
    ],
    boissons: [
      { id: 1, name: 'Coca-Cola', price: 2.90, image: '/coca.png' },
      { id: 2, name: 'Sprite', price: 2.90, image: '/sprite.png' },
      { id: 3, name: 'Ice Tea', price: 2.90, image: '/icetea.png' },
      { id: 4, name: 'Jus d\'Orange', price: 2.90, image: '/orange.png' },
      { id: 5, name: 'Eau Minérale', price: 1.90, image: '/eau.png' },
      { id: 6, name: 'Coca-Cola', price: 2.90, image: '/coca.png' },
      { id: 7, name: 'Sprite', price: 2.90, image: '/sprite.png' },
      { id: 8, name: 'Ice Tea', price: 2.90, image: '/icetea.png' },
    ],
    desserts: [
      { id: 1, name: 'Glace Vanille', price: 3.90, image: '/dessert1.png' },
      { id: 2, name: 'Glace Chocolat', price: 3.90, image: '/dessert2.png' },
      { id: 3, name: 'Glace Fraise', price: 3.90, image: '/dessert3.png' },
      { id: 4, name: 'Sundae', price: 4.90, image: '/dessert2.png' },
      { id: 5, name: 'Cookie', price: 2.90, image: '/dessert5.png' },
      { id: 6, name: 'Brownie', price: 3.90, image: '/dessert6.png' },
      { id: 7, name: 'Muffin', price: 3.90, image: '/dessert7.png' },
      { id: 8, name: 'Donut', price: 2.90, image: '/dessert3.png' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Categories Navigation */}
      <div className="sticky top-16 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4 mobile:space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-spicy-red text-crispy-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-6">
          {products[activeCategory]?.map((product: Product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {isLoggedIn && (
                  <div className="absolute top-2 right-2 bg-spicy-red text-crispy-white px-2 py-1 rounded-full text-sm font-bold">
                    -10%
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    {isLoggedIn ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 line-through text-sm">
                          {product.price.toFixed(2)}€
                        </span>
                        <span className="text-spicy-red font-bold text-xl">
                          {(product.price * 0.9).toFixed(2)}€
                        </span>
                      </div>
                    ) : (
                      <span className="text-spicy-red font-bold text-xl">
                        {product.price.toFixed(2)}€
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className="bg-grilled-orange text-crispy-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200"
                  >
                    Ajouter
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 