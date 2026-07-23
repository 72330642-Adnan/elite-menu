import React, { useState } from 'react';

export default function CartModal({ cart, onClose, onUpdateQuantity }) {
  const [orderDone, setOrderDone] = useState(false);

 
  const subtotal = cart.reduce((acc, item) => {
    const cleanPrice = parseFloat(item.price.replace('$', ''));
    return acc + (cleanPrice * item.quantity);
  }, 0);

  const tax = subtotal * 0.1; 
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setOrderDone(true);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.modalHeader}>
          <h2>Your Cart</h2>
          <button onClick={onClose} style={styles.closeBtn}>&times;</button>
        </div>

        {orderDone ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <h3 style={{ color: '#d4af37' }}>Order Placed Successfully! 🎉</h3>
            <p style={{ color: '#aaa' }}>Your delicious meal is being prepared.</p>
            <button onClick={() => { setOrderDone(false); onClose(); }} style={styles.checkoutBtn}>Close</button>
          </div>
        ) : cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', padding: '30px 0' }}>Your cart is empty.</p>
        ) : (
          <>
            <div style={styles.itemsList}>
              {cart.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                    <span style={{ color: '#d4af37' }}>{item.price}</span>
                  </div>
                  <div style={styles.quantityControl}>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} style={styles.qtyBtn}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} style={styles.qtyBtn}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.summary}>
              <div style={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ ...styles.summaryRow, fontWeight: 'bold', fontSize: '1.2rem', color: '#d4af37' }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button onClick={handleCheckout} style={styles.checkoutBtn}>Place Order</button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 2000,
  },
  modal: {
    backgroundColor: '#141414',
    border: '1px solid #333',
    padding: '30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '450px',
    color: '#fff',
  },
  modalHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    borderBottom: '1px solid #222', paddingBottom: '10px',
  },
  closeBtn: {
    backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer',
  },
  itemsList: {
    maxHeight: '200px', overflowY: 'auto', margin: '20px 0',
  },
  cartItem: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '15px', borderBottom: '1px dashed #222', paddingBottom: '10px',
  },
  quantityControl: {
    display: 'flex', alignItems: 'center',
  },
  qtyBtn: {
    backgroundColor: '#222', color: '#fff', border: 'none', width: '25px', height: '25px', borderRadius: '4px', cursor: 'pointer',
  },
  summary: {
    borderTop: '1px solid #333', paddingTop: '15px', marginBottom: '20px',
  },
  summaryRow: {
    display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#aaa',
  },
  checkoutBtn: {
    width: '100%', backgroundColor: '#d4af37', color: '#0a0a0a', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem',
  }
};