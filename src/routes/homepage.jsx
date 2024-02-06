import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Main from "../components/main";
import Consumer from '../data/consumer.js';
import ConsumerService from '../services/csv/consumerService.js';
import Restaurant from '../data/restaurant.js';
import RestaurantService from '../services/csv/restaurantService';
import Appointment from '../data/appointment.js';
import AppointmentService from '../services/csv/appointmentService';


const Homepage = () => {
    const [dataGenerated, setDataGenerated] = useState(false);

    useEffect(() => {
        const hasDataGenerated = localStorage.getItem('dataGenerated');
        if (!hasDataGenerated) {
            gerarDados();
            localStorage.setItem('dataGenerated', 'true');
            setDataGenerated(true);
        }
    }, []);

    const gerarDados = async () => {
        console.log("A página foi carregada!");

        const detalhesConsumidores = [
            ['John Doe', 'john@example.com', 'password123', '123456789'],
            ['Jane Smith', 'jane@example.com', 'password456', '987654321'],
            ['Alice Johnson', 'alice@example.com', 'password789', '111222333'],
            ['Bob Brown', 'bob@example.com', 'passwordabc', '444555666'],
            ['Eva Martinez', 'eva@example.com', 'passwordxyz', '777888999']
        ];

        const detalhesRestaurantes = [
            ['Restaurante da Praça', 'restaurantepraca@example.com', 'senha123', 'Av. Principal, 123', '(11) 1234-5678', 30, '08:00 - 22:00', true, false, 'Culinária Contemporânea', 'Praça Gourmet'],
            ['Sabor do Campo', 'saborcampo@example.com', 'senha456', 'Rua das Flores, 456', '(11) 9876-5432', 20, '09:00 - 23:00', false, true, 'Comida Caseira', 'Sabor do Campo'],
            ['Pizzaria Bella Napoli', 'bellanapoli@example.com', 'senha789', 'Av. Italiana, 789', '(11) 4567-8901', 25, '10:00 - 00:00', true, true, 'Pizza Italiana', 'Bella Napoli'],
            ['Sushi Masters', 'sushimasters@example.com', 'senhaabc', 'Rua dos Sushis, 123', '(11) 2345-6789', 15, '11:00 - 01:00', false, false, 'Comida Japonesa', 'Sushi Masters'],
            ['Tropical Grill', 'tropicalgrill@example.com', 'senhaxyz', 'Av. dos Coqueiros, 567', '(11) 7890-1234', 35, '12:00 - 02:00', true, true, 'Churrasco Brasileiro', 'Tropical Grill']
        ];

        const consumersID = []
        const restaurantsID = []

        for (let detalhes of detalhesConsumidores) {
            const [name, email, password, cellphone] = detalhes;
            const newConsumer = new Consumer(name, email, password, cellphone);
            consumersID.push(newConsumer.id)
            await ConsumerService().createConsumer(newConsumer);
        }

        for (let detalhes of detalhesRestaurantes) {
            const [name, email, password, address, cellphone, tablesAmount, hours, isVegan, isGlutenFree, focus, restaurantName] = detalhes;
            const newRestaurant = new Restaurant(name, email, password, address, cellphone, tablesAmount, hours, isVegan, isGlutenFree, focus, restaurantName);
            restaurantsID.push(newRestaurant.id)
            await RestaurantService().createRestaurant(newRestaurant);
        }

        for (let i = 0; i < 10; i++) {
          const randomConsumerId = consumersID[Math.floor(Math.random() * consumersID.length)];
          const randomRestaurantId = restaurantsID[Math.floor(Math.random() * restaurantsID.length)];
          const date = new Date();
          const peopleAmount = Math.floor(Math.random() * 5) + 1;
          const specialOptions = ['aniversário', 'festa de formatura', ''];
          const randomSpecialIndex = Math.floor(Math.random() * specialOptions.length);
          const special = specialOptions[randomSpecialIndex];
          const newAppointment = new Appointment(randomConsumerId, randomRestaurantId, date, peopleAmount, special);
          await AppointmentService().createAppointment(newAppointment);
      }
    };

    return (
        <div className="App">
            <p className="imagesHomepage">
                <Main />
            </p>
            <p className="App-footer">
                <Footer />
            </p>
        </div>
    );
};

export default Homepage;
