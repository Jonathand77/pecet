import React, { useState } from 'react';
import styles from '../styles/Buscar.module.css';
import SearchBar from '../components/SearchBar';
import ResultPreview from '../components/ResultPreview';
import SearchResultsList from '../components/SearchResultsList';

const Buscar = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = (query) => {
    console.log("Buscando:", query);
  
    const dummyResults = [
      { id: 1, titulo: 'Guía de vacunación PECET', tipo: 'pdf', url: '/ejemplo.pdf' },
      { id: 4, titulo: 'Guía de malaria PECET', tipo: 'pdf', url: '/ejemplo.pdf' },
      { id: 2, titulo: 'Resumen Proyecto 2023', tipo: 'texto', contenido: 'Este documento contiene el resumen del proyecto...' },
      { id: 5, titulo: 'Resumen mosquito 2025', tipo: 'texto', contenido: 'Este documento contiene el resumen del proyecto...' },
      { id: 3, titulo: 'Diagrama Vacunación', tipo: 'imagen', url: '../assets/img/LogoUdeA.png' },
    ];
  
    const filteredResults = dummyResults.filter(result =>
      result.titulo.toLowerCase().includes(query.toLowerCase())
    );
  
    setResults(filteredResults);
    setSelectedResult(null);
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