import Table from "../components/tableRestaurant"
import React, { useState, useEffect } from "react";
import "../styles/table.css"
import {AppointmentService} from "../services/csv/appointmentService"

// async function createJson(RESTAURANT_ID){
//   const response = []
//   const appoiments = await AppointmentService().getAppointmentsByRestaurantId(RESTAURANT_ID);
//   appoiments.forEach(async (appoiment) => {
//     const customerId = appoiment.customerId
//     const customer = await ConsumerService().getConsumerById(customerId);
//     const responseJson = {
//       name: customer.user.name,
//       phone: customer.user.cellphone,
//       data: appoiment.data,
//       peopleAmount: appoiment.peopleAmount,
//       special: appoiment.special
//     }
//     response.push(responseJson);
//   });
//   return response;
// }
const ViewRestaurant = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = [
          {"name": "kath",
          "phone": 9999,
          "email": "kath@",
          "peopleAmount": 2,
          "data": "10/10 12:10",
          "special": "aaaa"}
        ]
        //const response = await createJson(RESTAURANT_ID);

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