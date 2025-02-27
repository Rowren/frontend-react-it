import React from 'react';
import AppRoute from './route/AppRoute';
import { CartProvider } from './component/user/CartContext';

const App = () => {
  return (
    <CartProvider>
      <AppRoute />
    </CartProvider>
  );
};

export default App;
