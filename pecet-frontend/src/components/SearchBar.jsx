import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <FaSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Buscar en los activos de conocimiento..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>Buscar</button>
    </form>
  );
};

export default SearchBar;
