import Table from "../components/tableRestaurant"
import React, { useState, useEffect } from "react";
import "../styles/table.css"

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