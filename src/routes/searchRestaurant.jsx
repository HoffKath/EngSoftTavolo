import SearchInput from "../components/searchInput"
import SearchResult from "../components/searchResult";
import Restaurant from "../data/restaurant"

import React, { useState } from 'react';

const SearchRestaurant = () =>{

  let restaurants;
  // let restaurants = [new Restaurant(0, 0, 0, 0, 0, 0, 0, 0, 3.7, "restaurantName")]; //test

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  const handleSubmit = (value) => {
    // lógica captura restaurants  //
  };

  return (
    <div className="search-page">
        <p>
          <SearchInput placeholder="Escreva o nome do restaurante aqui" value={searchTerm} onClick={handleSubmit} onChange={handleInputChange}/>
          <SearchResult restaurants={restaurants}/>
        </p>
    </div>
  );
  
}

export default SearchRestaurant;