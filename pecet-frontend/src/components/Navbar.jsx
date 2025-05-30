import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/img/PecetLogo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.logoSection}>
        <motion.img
          src={logo}
          alt="PECET Logo"
          className={styles.logo}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/buscar" className={styles.link}>
            Buscar
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About Us
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
