// components/layout/Footer.js

import React from 'react';
import styles from './Footer.module.css'; // Suppose you have a CSS module file for styling

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year for the copyright notice

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {year} Mon Portfolio. Tous droits réservés.</p>
        <p>
          Conçu par Moi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
