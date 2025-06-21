import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../config/stripe';
import StripePayment from './StripePayment';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, total } = useCart();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePaymentSuccess = () => {
    console.log('✅ Paiement réussi dans Checkout');
    setIsSuccess(true);
  };

  const handlePaymentError = (error: string) => {
    console.log('❌ Erreur de paiement dans Checkout:', error);
    // L'erreur est déjà gérée dans StripePayment
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-green-500 mb-6"
            >
              <FaCheckCircle size={64} />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commande Confirmée !</h2>
            <p className="text-gray-600 mb-8">
              Merci pour votre commande. Vous recevrez bientôt un email de confirmation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spicy-red text-crispy-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200"
              onClick={() => window.location.href = '/'}
            >
              Retour à l'accueil
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-spicy-red text-crispy-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <div className={`w-24 h-1 ${
                  step >= 2 ? 'bg-spicy-red' : 'bg-gray-200'
                }`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-spicy-red text-crispy-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Récapitulatif de la commande</h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">Quantité: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-spicy-red">{(item.price * item.quantity).toFixed(2)}€</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-spicy-red">{total.toFixed(2)}€</span>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-spicy-red text-crispy-white py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200"
                  >
                    Continuer vers le paiement
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Paiement sécurisé</h2>
                    <button
                      onClick={() => setStep(1)}
                      className="text-spicy-red hover:text-opacity-80 transition-colors duration-200"
                    >
                      ← Retour
                    </button>
                  </div>
                  
                  <Elements stripe={stripePromise}>
                    <StripePayment
                      amount={Math.round(total * 100)} // Conversion en centimes
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                    />
                  </Elements>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout; 