import SearchInput from "../components/searchInput"

import React, { useState } from 'react';

const SearchRestaurant = () =>{

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... //
    props.onSearch(searchTerm);
  };

  return (
    <div className="login">
        <p>
        <SearchInput placeholder="Escreva o nome do restaurante aqui" value={searchTerm} onClick={handleSubmit} onChange={handleInputChange}/>
        </p>
    </div>
  );
  
}

export default SearchRestaurant;