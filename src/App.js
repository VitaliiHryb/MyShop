import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/navigationDrawer';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <PersistentDrawerLeft />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
