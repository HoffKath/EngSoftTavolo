import SearchInput from "../components/searchInput"
import SearchResult from "../components/searchResult";
import RestaurantService from '../services/csv/restaurantService';

import React, { useState } from 'react';

const SearchRestaurant = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  const handleSubmit = async (value) => {

    try{
    
      const fetchedRestaurants = await RestaurantService().readRestaurants();
      
      const filteredRestaurants = fetchedRestaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(value.toLowerCase())
      );

      setRestaurants(filteredRestaurants);
    } 
    catch (error) {
      console.error('Erro ao buscar os restaurantes: ', error);
    }
  };

  return (
    <div className="search-page">
        <p>
          <SearchInput placeholder="Escreva o nome do restaurante aqui" value={searchTerm} onClick={handleSubmit} onChange={handleInputChange} style={{marginRight: '20px', marginLeft: '20px'}}/>
          <SearchResult restaurants={restaurants}/>
        </p>
    </div>
  );
  
}

export default SearchRestaurant;