import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.col}>
          <h3 style={styles.brand}>Aura Restaurant & Lounge</h3>
          <p style={styles.text}>
            The ultimate fine dining and lounge experience with luxury aesthetics and premium flavors.
          </p>
        </div>

        <div style={styles.col}>
          <h4 style={styles.heading}>Quick Links</h4>
          <a href="#menu-section" style={styles.link}>Our Menu</a>
          <a href="#contact" style={styles.link}>Contact Us</a>
        </div>

        <div style={styles.col}>
          <h4 style={styles.heading}>Connect With Us</h4>
          <div style={styles.socialRow}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialLink}>Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialLink}>Facebook</a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" style={styles.socialLink}>WhatsApp</a>
          </div>
        </div>
      </div>

      <div style={styles.subFooter}>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
          &copy; {new Date().getFullYear()} Aura Restaurant & Lounge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#070707',
    borderTop: '1px solid #1f1f1f',
    color: '#fff',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '50px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  brand: {
    color: '#d4af37',
    fontSize: '1.3rem',
    marginBottom: '15px',
  },
  heading: {
    color: '#d4af37',
    fontSize: '1.1rem',
    marginBottom: '15px',
  },
  text: {
    color: '#888',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  link: {
    color: '#888',
    textDecoration: 'none',
    marginBottom: '8px',
    fontSize: '0.9rem',
    transition: '0.2s',
  },
  socialRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  socialLink: {
    backgroundColor: '#141414',
    color: '#d4af37',
    padding: '6px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '0.85rem',
    border: '1px solid #222',
  },
  subFooter: {
    backgroundColor: '#040404',
    padding: '15px 20px',
    textAlign: 'center',
    borderTop: '1px solid #121212',
  }
};