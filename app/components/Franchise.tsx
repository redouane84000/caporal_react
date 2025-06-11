import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaHandshake, FaUsers } from 'react-icons/fa';

const Franchise = () => {
  const benefits = [
    {
      icon: FaStore,
      title: 'Emplacement Premium',
      description: 'Accès à des emplacements stratégiques dans les meilleures zones commerciales.'
    },
    {
      icon: FaChartLine,
      title: 'Croissance Garantie',
      description: 'Un modèle d\'affaires éprouvé avec un potentiel de croissance exceptionnel.'
    },
    {
      icon: FaHandshake,
      title: 'Support Complet',
      description: 'Formation, marketing et support opérationnel continu.'
    },
    {
      icon: FaUsers,
      title: 'Communauté Active',
      description: 'Rejoignez un réseau de franchisés dynamiques et passionnés.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl mobile:text-3xl font-bold text-gray-900 mb-4">
            Devenez Franchisé CAPORAL CHICKEN
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez une marque en pleine expansion et devenez propriétaire de votre propre restaurant CAPORAL CHICKEN.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-spicy-red mb-4">
                <benefit.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-spicy-red rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-crispy-white mb-4">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-crispy-white mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir les opportunités de franchise disponibles dans votre région.
          </p>
          <button className="bg-crispy-white text-spicy-red px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
            Contactez-nous
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Franchise; 