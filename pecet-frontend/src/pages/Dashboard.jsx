import React from 'react';
import styles from '../styles/Dashboard.module.css';
import { FaFolderOpen, FaLock, FaGlobe, FaClock } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>📊 Dashboard de Consumo</h1>
      <p className={styles.subtitle}>Estadísticas de uso de los activos de conocimiento:</p>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaFolderOpen className={styles.icon} />
          <h3>Total de activos</h3>
          <p>150</p>
        </div>
        <div className={styles.card}>
          <FaGlobe className={styles.icon} />
          <h3>Activos públicos</h3>
          <p>90</p>
        </div>
        <div className={styles.card}>
          <FaLock className={styles.icon} />
          <h3>Activos privados</h3>
          <p>60</p>
        </div>
        <div className={styles.card}>
          <FaClock className={styles.icon} />
          <h3>Más reciente</h3>
          <p>Guía de Evaluación 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
