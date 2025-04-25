import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/img/PecetLogo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={logo} alt="PECET Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/buscar" className={styles.link}>Buscar</Link></li>
        <li><Link to="/dashboard" className={styles.link}>Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
