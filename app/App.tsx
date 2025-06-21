import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Restaurants from './components/Restaurants';
import Franchise from './components/Franchise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/panier" element={<Cart />} />
              <Route path="/paiement" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App; 