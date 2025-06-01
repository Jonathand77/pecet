import React from "react";
import styles from "../styles/AboutUs.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPiedPiper,
  FaFileCode,
  FaCogs,
  FaPython,
  FaUniversity,
  FaRocket,
  FaInfoCircle,
  FaUsers,
  FaWrench,
  FaHandsHelping,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.title}>
        <FaInfoCircle className={styles.iconTitle} /> Acerca del Proyecto
      </h1>

      <section className={styles.section}>
        <h2>
          <FaRocket className={styles.icon} /> Objetivo del Proyecto
        </h2>
        <h3>Agente inteligente para los activos de conocimiento del PECET</h3>
        <p>
          Este proyecto tiene como finalidad mejorar la gestión y consulta de
          los activos de conocimiento del PECET a través de un agente
          inteligente. La producción científica requiere de una gestión
          eficiente para facilitar la investigación y toma de decisiones. Esta
          solución integra backend con FastAPI y frontend con React, permitiendo
          subir, consultar y buscar documentos usando tecnologías como Azure
          Blob Storage y ElasticSearch.
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          <FaUsers className={styles.icon} /> Información de los Creadores
        </h2>
        <div className={styles.team}>
          <div className={styles.member}>
            <h3>Jonathan David Fernandez Vargas</h3>
            <p>
              <FaUniversity className={styles.inlineIcon} /> Ingeniería de
              Sistemas - Universidad de Antioquia
            </p>
            <p>
              Apasionado por el aprendizaje continuo, con experiencia en
              programación, investigación y atención al cliente. Destaca en
              comunicación efectiva, trabajo colaborativo y desarrollo web.
            </p>
            <div className={styles.social}>
              <a
                href="https://github.com/Jonathand77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-david-fernandez-vargas-800b04279/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.member}>
            <h3>Valeria Alvarez Fernandez</h3>
            <p>
              <FaUniversity className={styles.inlineIcon} /> Ingeniería de
              Sistemas - Universidad de Antioquia
            </p>
            <p>
              Enfocada en diseño de interfaces accesibles y centradas en el
              usuario. Creativa, comprometida con la calidad, resolutiva y
              colaborativa. Apasionada por mejorar a través del diseño.
            </p>
            <div className={styles.social}>
              <a
                href="https://github.com/Vaf88"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/valeria-alvarez-fernandez-961013325/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>
          <FaWrench className={styles.icon} /> Tecnologías Utilizadas
        </h2>
        <ul className={styles.techList}>
          <li>
            <FaReact className={styles.inlineIcon} /> React + TypeScript
            (Frontend)
          </li>
          <li>
            <FaPiedPiper className={styles.inlineIcon} /> FastAPI + Python
          </li>
          <li>
            <FaCogs className={styles.inlineIcon} /> Azure Blob Storage
          </li>
          <li>
            <FaFileCode className={styles.inlineIcon} /> ElasticSearch
          </li>
          <li>
            <FaPython className={styles.inlineIcon} /> Python y Docker
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>
          <FaRocket className={styles.icon} /> Funcionalidades Clave
        </h2>
        <ul className={styles.features}>
          <li>📁 Subida de documentos vía enlace</li>
          <li>📄 Extracción de texto desde archivos PDF</li>
          <li>
            🧠 Generación de embeddings y búsqueda semántica con API OpenAI
          </li>
          <li>☁️ Almacenamiento y consulta desde Azure Blob Storage</li>
          <li>📊 Panel de estadísticas con React</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>
          <FaHandsHelping className={styles.icon} /> Créditos y Agradecimientos
        </h2>
        <p>
          Gracias a nuestros profesores y compañeros por su apoyo durante el
          desarrollo del proyecto.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
