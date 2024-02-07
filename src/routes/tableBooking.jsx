import ChooseHour from "../components/chooseHour";
import Confirmation from "../components/confirmation";
import RestaurantBanner from "../components/restaurantBanner";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import '../styles/tableBooking.css'
import '../styles/confirmation.css'
import ConsumerService from "../services/csv/consumerService"
import RestaurantService from '../services/csv/restaurantService';
import AppointmentService from '../services/csv/appointmentService';
import Button from "../components/button";
import Appointment from "../data/appointment";


const TableBooking =()=>{

  const [consumer, setConsumer] = useState([]);
  /*const [restaurant, setRestaurant] = useState([]);*/
  const [selectedItem, setItemChange] = useState(null);
  const [selectedCapacity, setDataCapacity] = useState(null);

  /*const [restaurant, setRestaurant] = useState(new Restaurant());*/
  const [restaurant, setRestaurant] = useState([])
  const { restaurantId } = useParams();

  async function getConsumer(){
    const GLOBAL_ID = localStorage.getItem('GLOBAL_ID');
    const consumer = await ConsumerService().getConsumerById(GLOBAL_ID);
    return consumer;
  }
  
  async function getRestaurant(){
    /*const GLOBAL_ID_RESTAURANT = localStorage.getItem('GLOBAL_ID_RESTAURANT');*/
    const restaurant = await RestaurantService().getRestaurantById(restaurantId);
    return restaurant;
  }


  function chamarLink() {
    window.location.href = '/minhasReservas';
}

  useEffect(() => {
    fetchDataConsumer();
    fetchDataRestaurant();
  }, []);

  const fetchDataConsumer = async () => {
    try {
      const consumerData = await getConsumer();
      setConsumer(consumerData);
      console.log(consumerData);
    } catch (error) {
      console.error("Error fetching consumer data:", error);
    }
  };

  const fetchDataRestaurant = async () => {
    try {
      const restaurantData = await getRestaurant();
      setRestaurant(restaurantData);
      console.log(restaurantData);
    } catch (error) {
      console.error("Error fetching consumer data:", error);
    }
  };

  const handleChange = (newItem) => {
      setItemChange(newItem);
      console.log(newItem)
  };

  const handleSubmitCapacity = async (newItem) => {
    setDataCapacity(newItem);
    console.log(newItem);
    chamarLink();

    try {
      const newAppointment = new Appointment(consumer.id, restaurant.id, `${selectedItem.data} ${selectedItem.horario}`, newItem.numberOfSeats, newItem.specialRequest);
      
      // Call the createConsumer method from ConsumerService
      await AppointmentService().createAppointment(newAppointment);

      console.log('Appointment created successfully!');
    } catch (error) {
      console.error('Error creating consumer:', error);
    }
  };

  

  return (
    <div>
        <RestaurantBanner 
          name={restaurant.name}
          rating={restaurant.rating} 
          phone={restaurant.cellphone} 
          adress={restaurant.address} 
          cuisine={restaurant.focus} 
          VegOption={restaurant.isVegan} 
          GlutenFreeOption={restaurant.isGlutenFree}/>
        <ChooseHour onChangeSelected={handleChange} Hour={restaurant.hours}/>
        <Confirmation onFormSubmit={handleSubmitCapacity} availableSeats={selectedItem ? selectedItem.capacidade : null}  name={consumer.name} phone={consumer.cellphone}/>
    </div>
  );
  
}

  
export default TableBooking;