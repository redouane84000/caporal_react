import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-crispy-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>10 rue de la Rmenie</p>
              <p>84000 Avignon</p>
              <p>Tél: 07 82 19 71 82</p>
              <p>Email: contact@caporalchicken.fr</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-spicy-red transition-colors">Accueil</a></li>
              <li><a href="/produits" className="hover:text-spicy-red transition-colors">Nos Produits</a></li>
              <li><a href="/restaurants" className="hover:text-spicy-red transition-colors">Nos Restaurants</a></li>
              <li><a href="/franchise" className="hover:text-spicy-red transition-colors">Devenez Franchisé</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <div className="space-y-2">
              <p>Lundi - Vendredi: 11h - 23h</p>
              <p>Samedi - Dimanche: 11h - 00h</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/caporalchicken"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-spicy-red transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com/caporalchicken"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-spicy-red transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://tiktok.com/@caporalchicken"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-spicy-red transition-colors"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CAPORAL CHICKEN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 