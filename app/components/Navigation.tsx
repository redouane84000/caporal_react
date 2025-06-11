import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Produits', path: '/produits' },
    { name: 'Mon Restaurant', path: '/restaurants' },
    { name: 'Devenez Franchisé', path: '/franchise' },
    { name: 'Contactez-nous', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-spicy-red z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <span className="text-crispy-white text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-crispy-white via-grilled-orange to-crispy-white bg-clip-text text-transparent font-['Playfair_Display'] italic">
                  Caporal
                </span>
                <span className="text-crispy-white text-lg font-bold tracking-wider uppercase font-['Playfair_Display']">
                  Chicken
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-grilled-orange transition-all duration-300 ease-in-out" />
              </motion.div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden desktop:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-crispy-white hover:text-grilled-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/auth"
              className="flex items-center space-x-2 bg-crispy-white text-spicy-red px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200"
            >
              <FaUser className="w-4 h-4" />
              <span>Mon Compte</span>
            </Link>
            <CartIcon />
          </div>

          {/* Mobile menu button */}
          <div className="mobile:block desktop:hidden">
            <div className="flex items-center space-x-4">
              <CartIcon />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-crispy-white hover:text-grilled-orange focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile:block desktop:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-spicy-red">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-crispy-white hover:text-grilled-orange block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/auth"
                className="flex items-center space-x-2 text-crispy-white hover:text-grilled-orange block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="w-4 h-4" />
                <span>Mon Compte</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 