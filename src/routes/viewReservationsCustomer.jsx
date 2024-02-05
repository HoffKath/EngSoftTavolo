import TableCustomer from "../components/tableCustomer"
import React, { useState, useEffect } from "react";
import "../styles/table.css"

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