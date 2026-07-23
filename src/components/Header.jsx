import React from 'react';

export default function Header() {
  return (
    <header style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        <span style={styles.subtitle}>AURA RESTAURANT & LOUNGE</span>
        <h1 style={styles.title}>Exquisite <span style={styles.goldText}>Taste</span></h1>
        <p style={styles.heroDesc}>Explore our carefully curated digital menu for an unforgettable dining experience.</p>
        <a href="#menu-section" style={styles.primaryBtn}>Explore Menu</a>
      </div>
    </header>
  );
}

const styles = {
  hero: {
    height: '75vh',
    backgroundImage: `url('/images/margherita pizza.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    padding: '0 20px',
  },
  subtitle: {
    color: '#d4af37',
    letterSpacing: '3px',
    fontSize: '0.9rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '0 0 15px 0',
  },
  goldText: { color: '#d4af37' },
  heroDesc: {
    color: '#aaa',
    fontSize: '1.1rem',
    maxWidth: '500px',
    margin: '0 auto 30px auto',
  },
  primaryBtn: {
    backgroundColor: '#d4af37',
    color: '#0a0a0a',
    padding: '12px 30px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};