import ChooseHour from "../components/chooseHour";
import Confirmation from "../components/confirmation";
import RestaurantBanner from "../components/restaurantBanner";
import React, { useState } from 'react';
//import '../styles/tableBooking.css'
import '../styles/confirmation.css'

const TableBooking =()=>{

  const [selectedItem, setItemChange] = useState(null);

  const handleChange = (newItem) => {
      setItemChange(newItem);
      console.log(newItem)
  };

  return (
    <div>
        <RestaurantBanner/>
        <ChooseHour onChangeSelected={handleChange}/>
        <Confirmation availableSeats={selectedItem}/>
    </div>
  );
  
}

  
export default TableBooking;