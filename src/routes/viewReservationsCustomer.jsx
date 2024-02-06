import TableCustomer from "../components/tableCustomer"
import React, { useState, useEffect } from "react";
import "../styles/table.css"

// async function createJson(CUSTOMERID){
//   const response = []
//   const appoiments = await AppointmentService().getAppointmentsByConsumerId(CUSTOMERID);
//   appoiments.forEach(async (appoiment) => {
//     const restaurantId = appoiment.restaurantId
//     const restaurant = await RestaurantService().getRestaurantById(restaurantId);
//     const responseJson = {
//       name: restaurant.restaurantName,
//       phone: restaurant.cellphone,
//       data: appoiment.data,
//       peopleAmount: appoiment.peopleAmount,
//       special: appoiment.special
//     }
//     response.push(responseJson);
//   });
//   return response;
// }
const ViewCustomer = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = [
          {"restaurantName": "PastaNostra",
          "cellphone": 9999,
          "address": "Rua dos tolos numero 0",
          "peopleAmount": 2,
          "data": "10/10 12:10",
          "special": "aaaa"}
        ]
      //const response = await createJson(CUSTOMERID)

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