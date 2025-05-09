import React from 'react';
import styles from '../styles/ResultPreview.module.css';

const ResultPreview = ({ selectedResult }) => {
  if (!selectedResult) {
    return (
      <div className={styles.previewEmpty}>
        <p>Selecciona un resultado para ver la vista previa.</p>
      </div>
    );
  }

  const { tipo, contenido, url } = selectedResult;

  return (
    <div className={styles.preview}>
      <h2 className={styles.title}>Vista previa</h2>

      {tipo === 'pdf' && (
        <iframe
          src={url}
          title="PDF Preview"
          className={styles.pdf}
        ></iframe>
      )}

      {tipo === 'texto' && (
        <div className={styles.textContent}>
          <p>{contenido}</p>
        </div>
      )}

      {tipo === 'imagen' && (
        <img src={url} alt="Imagen del activo" className={styles.image} />
      )}

      {!['pdf', 'texto', 'imagen'].includes(tipo) && (
        <p>No se puede mostrar una vista previa de este tipo de archivo.</p>
      )}
    </div>
  );
};

export default ResultPreview;