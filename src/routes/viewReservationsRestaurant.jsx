import Table from "../components/tableRestaurant"
import React, { useState, useEffect } from "react";
import "../styles/table.css"
import AppointmentService from "../services/csv/appointmentService"
import ConsumerService from '../services/csv/consumerService';

async function createJson(){
  const GLOBAL_ID = localStorage.getItem('GLOBAL_ID');
  const response = []
  const appoiments = await AppointmentService().getAppointmentsByRestaurantId(GLOBAL_ID);
  appoiments.forEach(async (appoiment) => {
    const customerId = appoiment.consumerId
    const customer = await ConsumerService().getConsumerById(customerId);
    const responseJson = {
      name: customer.name,
      phone: customer.cellphone,
      data: appoiment.date,
      peopleAmount: appoiment.peopleAmount,
      special: appoiment.special
    }
    response.push(responseJson);
  });
  return response;
}
const ViewRestaurant = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {

        const response = await createJson();

        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return (
      <div class="RestaurantTable">

        <h1>Reservas</h1>
        <Table data={data} />
      </div>
    );
  };
  
  export default ViewRestaurant;