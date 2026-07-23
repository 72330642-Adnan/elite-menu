import React, { useState } from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';


export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const existing = prevCart.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={styles.pageContainer}>
     
      <button onClick={() => setIsCartOpen(true)} style={styles.floatingCartBtn}>
        🛒 Cart <span style={styles.badge}>{totalItemsCount}</span>
      </button>

      <div style={styles.contentWrap}>
        <Header />
        <MenuSection onAddToCart={handleAddToCart} />
        <ContactSection />
      </div>

      <Footer />

      {isCartOpen && (
        <CartModal 
          cart={cart} 
          onClose={() => setIsCartOpen(false)} 
          onUpdateQuantity={handleUpdateQuantity} 
        />
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    position: 'relative',
  },
  contentWrap: {
    flex: '1', 
  },
  floatingCartBtn: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    backgroundColor: '#d4af37',
    color: '#0a0a0a',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
    fontSize: '1rem',
  },
  badge: {
    backgroundColor: '#0a0a0a',
    color: '#d4af37',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '0.85rem',
    marginLeft: '5px',
  }
};