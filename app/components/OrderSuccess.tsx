import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaUtensils } from 'react-icons/fa';

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
            >
              <FaCheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Commande Confirmée !
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Votre paiement a été traité avec succès. Votre commande est en cours de préparation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Détails de votre commande
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Statut</h3>
                <p className="text-green-600 font-medium">✅ Paiement confirmé</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Temps d'attente estimé</h3>
                <p className="text-gray-600">15-20 minutes</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Numéro de commande</h3>
                <p className="text-gray-600">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mode de retrait</h3>
                <p className="text-gray-600">Sur place</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center space-x-2 bg-spicy-red text-crispy-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              <FaHome className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </button>
            
            <button
              onClick={() => navigate('/produits')}
              className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              <FaUtensils className="w-5 h-5" />
              <span>Nouvelle commande</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-4 bg-blue-50 rounded-lg"
          >
            <p className="text-sm text-blue-800">
              💡 <strong>Conseil :</strong> Gardez ce numéro de commande à portée de main pour récupérer votre commande.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccess; 