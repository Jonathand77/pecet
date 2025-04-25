import React from 'react';
import styles from '../styles/Footer.module.css';
import logo from '../assets/img/LogoUdeA.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src={logo} alt="UDEA Logo" className={styles.logo} />
      </div>
      <div className={styles.center}>
        <a href="#contacto" className={styles.link}>Contacto</a>
        <a href="#politicas" className={styles.link}>Políticas</a>
        <a href="#acerca" className={styles.link}>Acerca de</a>
      </div>
      <div className={styles.right}>
        <span className={styles.copy}>© {new Date().getFullYear()} PECET. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
