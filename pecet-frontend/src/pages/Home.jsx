import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Bienvenido al Asistente de Conocimiento PECET
      </motion.h1>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Esta plataforma permite realizar búsquedas inteligentes sobre los activos de conocimiento del PECET.
        Puedes consultar documentos, imágenes y archivos relevantes para la investigación y gestión del conocimiento. 
      </motion.p>
    </motion.div>
  );
};

export default Home;
