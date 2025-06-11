import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, total } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simuler un traitement de paiement
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setIsSuccess(true);
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
                <div className={`w-24 h-1 ${
                  step >= 3 ? 'bg-spicy-red' : 'bg-gray-200'
                }`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-spicy-red text-crispy-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
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
                    Continuer
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de paiement</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro de carte
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-spicy-red focus:border-spicy-red"
                          placeholder="1234 5678 9012 3456"
                        />
                        <FaCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date d'expiration
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-spicy-red focus:border-spicy-red"
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-spicy-red focus:border-spicy-red"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaLock className="text-spicy-red" />
                      <span>Paiement sécurisé</span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full hover:bg-gray-300 transition-colors duration-200"
                      >
                        Retour
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="flex-1 bg-spicy-red text-crispy-white py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50"
                      >
                        {isProcessing ? 'Traitement...' : 'Payer'}
                      </button>
                    </div>
                  </form>
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