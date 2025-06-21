import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface StripePaymentProps {
  amount: number; // Montant en centimes
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const StripePayment: React.FC<StripePaymentProps> = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('❌ Stripe non initialisé');
      setErrorMessage('Stripe n\'est pas initialisé');
      setStatus('error');
      return;
    }

    console.log('🔄 Début du processus de paiement...');
    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Créer le PaymentIntent côté serveur
      console.log('📡 Création du PaymentIntent...');
      const response = await fetch(`https://backendcaporal-production.up.railway.api/payment/create-payment-intent`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ amount })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log('❌ Erreur serveur:', errorData);
        throw new Error(errorData.error || 'Erreur lors de la création du paiement');
      }

      const { clientSecret } = await response.json();
      console.log('✅ PaymentIntent créé avec succès');

      // 2. Confirmer le paiement avec Stripe
      console.log('💳 Confirmation du paiement avec Stripe...');
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        }
      });

      console.log('📊 Résultat Stripe complet:', result);
      console.log('📋 Statut du PaymentIntent:', result.paymentIntent?.status);
      console.log('❌ Erreur Stripe:', result.error);

      // 🧠 LOGIQUE CORRIGÉE SELON LES SPÉCIFICATIONS

      if (result.error) {
        // ❌ PAIEMENT REFUSÉ - Erreur Stripe détectée
        console.log('❌ Paiement refusé - Erreur détectée:', result.error.message);
        setStatus('error');
        setErrorMessage(`Paiement refusé : ${result.error.message}`);
        onError?.(result.error.message);
        
        // Redirection vers /paiement après 3 secondes
        setTimeout(() => {
          navigate('/paiement');
        }, 3000);
        
      } else if (result.paymentIntent?.status === 'succeeded') {
        // ✅ PAIEMENT RÉUSSI - Statut confirmé par Stripe
        console.log('✅ Paiement validé avec succès ! Statut:', result.paymentIntent.status);
        setStatus('success');
        onSuccess?.();
        
        // Redirection vers /order-success
        setTimeout(() => {
          navigate('/order-success');
        }, 2000);
        
      } else {
        // ❌ PAIEMENT NON FINALISÉ - Statut autre que 'succeeded'
        console.log('❌ Paiement non finalisé - Statut:', result.paymentIntent?.status);
        setStatus('error');
        setErrorMessage(`Paiement non finalisé : ${result.paymentIntent?.status}`);
        onError?.(`Paiement non finalisé : ${result.paymentIntent?.status}`);
        
        // Redirection vers /paiement après 3 secondes
        setTimeout(() => {
          navigate('/paiement');
        }, 3000);
      }

    } catch (error) {
      console.error('💥 Erreur générale:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
      setStatus('error');
      onError?.(error instanceof Error ? error.message : 'Une erreur est survenue');
      
      // Redirection vers /paiement après 3 secondes
      setTimeout(() => {
        navigate('/paiement');
      }, 3000);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Paiement Sécurisé
      </h2>
      
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Montant: {(amount / 100).toFixed(2)}€
        </p>
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-green-100 text-green-700 rounded-md"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold">Paiement validé avec succès !</p>
              <p className="text-sm">Redirection en cours...</p>
            </div>
          </div>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-red-100 text-red-700 rounded-md"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">❌</span>
            <div>
              <p className="font-semibold">Échec du paiement</p>
              <p className="text-sm">{errorMessage}</p>
              <p className="text-xs mt-1">Redirection en cours...</p>
            </div>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Informations de carte
          </label>
          <div className="p-3 border border-gray-300 rounded-md">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || status === 'loading'}
          className="w-full bg-spicy-red text-crispy-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Traitement en cours...' : 'Payer'}
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-500">
        <p>🔒 Paiement sécurisé par Stripe</p>
        <p className="mt-2 text-xs">
          Test: 4242 4242 4242 4242 (succès) | 4000 0000 0000 9995 (échec)
        </p>
      </div>
    </div>
  );
};

export default StripePayment; 