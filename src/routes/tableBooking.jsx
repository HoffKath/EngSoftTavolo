import ChooseHour from "../components/chooseHour";
import Confirmation from "../components/confirmation";
import RestaurantBanner from "../components/restaurantBanner";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import '../styles/tableBooking.css'
import '../styles/confirmation.css'
import Restaurant from "../data/restaurant";
import RestaurantService from '../services/csv/restaurantService';

const TableBooking = () =>{

  const [selectedItem, setItemChange] = useState(null);
  const [restaurant, setRestaurant] = useState(new Restaurant());

  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const restaurantData = await RestaurantService().getRestaurantById(restaurantId);
        setRestaurant(restaurantData);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    fetchRestaurant();
  }, [restaurantId]);

  const handleChange = (newItem) => {
      setItemChange(newItem);
      console.log(newItem)
  };

  return (
    <div>
        <RestaurantBanner name = {restaurant.name} rating = {restaurant.rating} phone={restaurant.cellphone} adress={restaurant.address} VegOption={restaurant.isVegan} GlutenFreeOption={restaurant.isGlutenFree} picture={restaurant.logo}/>
        <ChooseHour onChangeSelected={handleChange}/>
        <Confirmation availableSeats={selectedItem}/>
    </div>
  );
  
}

  
export default TableBooking;