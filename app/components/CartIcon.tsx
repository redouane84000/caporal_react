import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { itemCount } = useCart();

  return (
    <Link to="/panier" className="relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-crispy-white hover:text-grilled-orange transition-colors duration-200"
      >
        <FaShoppingCart size={24} />
      </motion.div>
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 bg-grilled-orange text-crispy-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          >
            {itemCount}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default CartIcon; 