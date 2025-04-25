import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard de Consumo</h1>
      <p>Aquí verás estadísticas sobre el uso de los activos de conocimiento:</p>

      <ul className={styles.stats}>
        <li>Total de activos: 150</li>
        <li>Activos públicos: 90</li>
        <li>Activos privados: 60</li>
        <li>Más reciente: Guía de Evaluación 2024</li>
      </ul>
    </div>
  );
};

export default Dashboard;
