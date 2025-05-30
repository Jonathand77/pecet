import React from 'react';
import styles from '../styles/AboutUs.module.css';
import { FaGithub, FaLinkedin, FaLaptopCode, FaUniversity } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.title}>👨‍💻 Acerca del Proyecto</h1>
      
      <section className={styles.section}>
        <h2>🎯 Objetivo del Proyecto</h2>
        <p>
          Este sistema fue desarrollado como parte de un reto académico con el objetivo de aplicar conceptos de desarrollo backend con FastAPI y frontend con React. Su propósito es gestionar y visualizar documentos embebidos con Azure Blob Storage y ElasticSearch.
        </p>
      </section>

      <section className={styles.section}>
        <h2>🧠 Información de los Creadores</h2>
        <div className={styles.team}>
          <div className={styles.member}>
            <h3>Jonathan David Fernandez Vargas</h3>
            <p><FaUniversity /> Ingeniería de Sistemas - Universidad de Antioquia</p>
            <p>Apasionado por el desarrollo web, backend y la inteligencia artificial.</p>
            <div className={styles.social}>
              <a href="https://github.com/Jonathand77" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/jonathan-david-fernandez-vargas-800b04279/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <div className={styles.member}>
            <h3>Valeria Alvarez Fernandez</h3>
            <p><FaUniversity /> Ingeniería de Sistemas - Universidad de Antioquia</p>
            <p>Especializada en interfaces atractivas, accesibilidad y experiencia de usuario.</p>
            <div className={styles.social}>
              <a href="https://github.com/Vaf88" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/valeria-alvarez-fernandez-961013325/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>🛠️ Tecnologías Utilizadas</h2>
        <ul className={styles.techList}>
          <li><FaLaptopCode /> React + Vite (Frontend)</li>
          <li><FaLaptopCode /> FastAPI (Backend)</li>
          <li><FaLaptopCode /> Azure Blob Storage (Almacenamiento de archivos)</li>
          <li><FaLaptopCode /> ElasticSearch (Indexación y búsqueda)</li>
          <li><FaLaptopCode /> Python y JavaScript</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>🚀 Funcionalidades Clave</h2>
        <ul>
          <li>Subida de documentos vía enlace</li>
          <li>Extracción de texto desde archivos PDF</li>
          <li>Generación de embeddings y búsqueda semántica</li>
          <li>Almacenamiento y consulta desde Azure Blob Storage</li>
          <li>Panel de estadísticas con React</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>🙏 Créditos y Agradecimientos</h2>
        <p>Gracias a nuestros profesores y compañeros por su apoyo durante el desarrollo del proyecto.</p>
      </section>
    </div>
  );
};

export default AboutUs;
