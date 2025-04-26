import React from 'react';
import styles from '../styles/SearchResultsList.module.css';

const SearchResultsList = ({ results, onResultClick }) => {
  if (results.length === 0) {
    return <div className={styles.noResults}>No se encontraron resultados.</div>;
  }

  return (
    <div className={styles.resultList}>
      <h2>Resultados encontrados</h2>
      <ul>
        {results.map(result => (
          <li
            key={result.id}
            className={styles.resultItem}
            onClick={() => onResultClick(result)}
          >
            <strong>{result.titulo}</strong> <span className={styles.tipo}>({result.tipo})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsList;
