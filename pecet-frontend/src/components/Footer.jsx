import React from 'react';
import styles from '../styles/Footer.module.css';
import logoUdeA from '../assets/img/LogoUdeA.png';
import { FaFacebook, FaTwitter, FaEnvelope, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.infoSection}>
        <img src={logoUdeA} alt="Logo Universidad de Antioquia" className={styles.logo} />
        <p className={styles.description}>
          El PECET - Programa de Estudio y Control de Enfermedades Tropicales - de la Universidad de Antioquia es un grupo de investigación multidisciplinario que desde 1986 desarrolla investigación, docencia y extensión en beneficio de comunidades vulnerables. 🧬🌍
        </p>
      </div>

      <div className={styles.contactSection}>
        <p><FaFacebook className={styles.icon} /><a href="https://www.facebook.com/pecetcolombia" target="_blank" rel="noopener noreferrer">@pecetcolombia</a></p>
        <p><FaTwitter className={styles.icon} /><a href="https://twitter.com/PecetColombia" target="_blank" rel="noopener noreferrer">@PecetColombia</a></p>
        <p><FaEnvelope className={styles.icon} /><a href="mailto:comunicacionespecet@udea.edu.co">comunicacionespecet@udea.edu.co</a></p>
        <p><FaPhoneAlt className={styles.icon} /> Tel: (57) 604 219 65 06</p>
        <p><FaClock className={styles.icon} /> Horario: Lun a Vie, 8:00 a.m. - 4:00 p.m.</p>
        <p><FaMapMarkerAlt className={styles.icon} /> Dirección: Calle 62 #52-59, SIU, Medellín, Colombia</p>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.links}>
          <a href="#contacto">Contacto</a>
          <a href="#politicas">Políticas</a>
          <a href="#acerca">Acerca de</a>
        </div>
        <span className={styles.copy}>© {new Date().getFullYear()} PECET. Todos los derechos reservados.</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
