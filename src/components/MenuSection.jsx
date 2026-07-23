import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('appetizers');
 
  const [hoveredId, setHoveredId] = useState(null);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu-section" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Our Exclusive Menu</h2>
        <p style={styles.subtitle}>Explore our carefully curated selection of dishes, beverages, and shisha</p>

       
        <div style={styles.categoriesContainer}>
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                ...styles.categoryBtn,
                ...(activeCategory === cat.id ? styles.activeCategoryBtn : {})
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

       
        <div style={styles.grid}>
          {filteredItems.map(item => {
            const isHovered = hoveredId === item.id;
            return (
              <div 
                key={item.id} 
                style={styles.card}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
               
                <div style={styles.imageContainer}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{
                      ...styles.image,
                      transform: isHovered ? 'scale(1.08' : 'scale(1)',
                    }} 
                  />
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.headerRow}>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <span style={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p style={styles.itemDesc}>{item.desc}</p>
                  <button 
                    onClick={() => onAddToCart(item)}
                    style={styles.addBtn}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#0a0a0a',
    color: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#d4af37',
  },
  subtitle: {
    color: '#888',
    marginBottom: '40px',
    fontSize: '1.1rem',
  },
  categoriesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  categoryBtn: {
    backgroundColor: '#141414',
    color: '#fff',
    border: '1px solid #333',
    padding: '10px 25px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: '0.3s',
  },
  activeCategoryBtn: {
    backgroundColor: '#d4af37',
    color: '#0a0a0a',
    borderColor: '#d4af37',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '30px',
    textAlign: 'left',
  },
  card: {
    backgroundColor: '#141414',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #222',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease-in-out', 
  },
  cardContent: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  itemName: {
    fontSize: '1.1rem',
    margin: 0,
    color: '#fff',
  },
  itemPrice: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#d4af37',
  },
  itemDesc: {
    color: '#aaa',
    fontSize: '0.9rem',
    marginBottom: '15px',
    lineHeight: '1.4',
  },
  addBtn: {
    backgroundColor: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    textAlign: 'center',
    transition: '0.3s',
    width: '100%',
  },
};