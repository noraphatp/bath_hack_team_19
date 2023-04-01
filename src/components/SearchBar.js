import React, { useState } from 'react';
import SearchBarCSS from '../css/searchBar.module.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearch() {
    // perform search operation using `searchTerm` value
    console.log(`Performing search for: ${searchTerm}`);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{ background: 'transparent', border: 'none', borderBottom: '1px solid black' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
