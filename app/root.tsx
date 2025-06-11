import { Outlet } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

declare global {
  interface ImportMeta {
    env: {
      VITE_API_URL: string;
      [key: string]: string;
    };
  }
}

const Root = () => {
  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
};

export default Root;
