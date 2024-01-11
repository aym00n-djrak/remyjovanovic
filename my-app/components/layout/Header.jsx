// components/layout/Header.js

import Link from 'next/link';
import styles from './Header.module.css'; // Supposons que vous avez un fichier CSS module pour le style

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              Menu
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
