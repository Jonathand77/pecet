import React, { useEffect, useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import { FaFolderOpen, FaClock } from 'react-icons/fa';

const Dashboard = () => {
  const [total, setTotal] = useState(0);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch('/dashboard')
      .then(res => res.json())
      .then(data => {
        setTotal(data.total);
        setLatest(data.latest);
      });
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>📊 Dashboard de Consumo</h1>
      <p className={styles.subtitle}>Estadísticas de uso de los activos de conocimiento:</p>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaFolderOpen className={styles.icon} />
          <h3>Total de activos</h3>
          <p>{total}</p>
        </div>
        <div className={styles.card}>
          <FaClock className={styles.icon} />
          <h3>3 más recientes</h3>
          <ul>
            {latest.map(blob => (
              <li key={blob.name}>
                {blob.name} <br />
                <small>{new Date(blob.last_modified).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
