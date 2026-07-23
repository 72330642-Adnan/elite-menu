import React from 'react';

export default function ContactSection() {
  return (
    
    <section id='contact' style={styles.contactSection}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Get in <span style={styles.goldText}>Touch</span></h2>
          <div style={styles.goldDivider}></div>
        </div>
        <div style={styles.contactContent}>
          <div style={styles.contactInfo}>
            <p style={styles.contactText}>📍  Tyre Luxury Avenue</p>
            <p style={styles.contactText}>📞 +961 1 234 567</p>
            <p style={styles.contactText}>🕒 Open Daily: 1:00 PM - 2:00 AM</p>
          </div>
          <form style={styles.contactForm} onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <input type="text" placeholder="Your Name" style={styles.input} required />
            <input type="email" placeholder="Your Email" style={styles.input} required />
            <textarea placeholder="Your Message" style={{ ...styles.input, height: '100px' }} required></textarea>
            <button type="submit" style={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  contactSection: { padding: '80px 0', backgroundColor: '#111', borderTop: '1px solid #222' },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' },
  sectionHeader: { textAlign: 'center', marginBottom: '40px' },
  sectionTitle: { fontSize: '2.5rem', color: '#ffffff', margin: 0 },
  goldText: { color: '#d4af37' },
  goldDivider: { width: '60px', height: '3px', backgroundColor: '#d4af37', margin: '15px auto 0 auto' },
  contactContent: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' },
  contactInfo: { display: 'flex', flexDirection: 'column', gap: '15px' },
  contactText: { color: '#bbb', fontSize: '1.1rem', margin: 0 },
  contactForm: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '12px 15px', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none' },
  submitBtn: { backgroundColor: '#d4af37', color: '#0a0a0a', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
};