import TableCustomer from "../components/tableCustomer"
import React, { useState, useEffect } from "react";
import "../styles/table.css"
import AppointmentService from "../services/csv/appointmentService"
import RestaurantService from '../services/csv/restaurantService';

async function createJson(){
  const GLOBAL_ID = localStorage.getItem('GLOBAL_ID');
  const response = []
  const appoiments = await AppointmentService().getAppointmentsByConsumerId(GLOBAL_ID);
  appoiments.forEach(async (appoiment) => {
    const restaurantId = appoiment.restaurantId
    const restaurant = await RestaurantService().getRestaurantById(restaurantId);
    const responseJson = {
      "restaurantName": restaurant.restaurantName.toString(),
      "cellphone": restaurant.cellphone,
      "data": appoiment.date,
      "peopleAmount": appoiment.peopleAmount,
      "special": appoiment.special,
      "address": restaurant.address,
    }
    response.push(responseJson);
  });
  return response;
}

const ViewCustomer = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
      const response = await createJson()
      console.log(response)

        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return (
      <div class="RestaurantTable">

        <h1>Reservas</h1>
        <TableCustomer data={data} />
      </div>
    );
  };
  
  export default ViewCustomer;