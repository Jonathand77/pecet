import React, { useState } from 'react';
import styles from '../styles/Buscar.module.css';
import SearchBar from '../components/SearchBar';
import ResultPreview from '../components/ResultPreview';
import SearchResultsList from '../components/SearchResultsList';

const Buscar = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await fetch('https://cuddly-computing-machine-7v9v9669xr4g2q6q-8000.app.github.dev/search', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      // Adaptar los resultados a la estructura esperada por los componentes
      const adaptedResults = (data.results || []).map(item => ({
        id: item.id,
        titulo: item.metadata?.filename || 'Sin título',
        tipo: item.metadata?.filename?.toLowerCase().endsWith('.pdf')
          ? 'pdf'
          : item.metadata?.filename?.toLowerCase().match(/\.(png|jpg|jpeg)$/)
          ? 'imagen'
          : 'texto',
        url: item.metadata?.source_url,
        contenido: item.text,
      }));
      setResults(adaptedResults);
      setSelectedResult(null);
    } catch (error) {
      setResults([]);
      setSelectedResult(null);
      // Puedes mostrar un mensaje de error si lo deseas
    }
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <div className={styles.buscar}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.resultados}>
        <SearchResultsList results={results} onResultClick={handleResultClick} />
        <ResultPreview selectedResult={selectedResult} />
      </div>
    </div>
  );
};

export default Buscar;