import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RestauranSignin from './routes/restaurantSignin';
import reportWebVitals from './services/reportWebVitals';
import Homepage from './routes/homepage';
import RestauranLogin from './routes/restaurantLogin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ConfirmationPage from './routes/confirmationPage';
import AfterJoinCustomer from './routes/afterJoinCustomer';
import SearchRestaurant from './routes/searchRestaurant';
import TableBooking from './routes/tableBooking';
import SignRestaurantForms from './components/signRestaurantForm';
import SignCustomersForms from './components/singCostumersForms';
import DeleteAccountComponent from './components/deleteAccountComponent';
import AfterJoinRestaurant from './routes/afterJoinRestaurant';
import ViewRestaurant from './routes/viewReservationsRestaurant';
import ViewCustomer from './routes/viewReservationsCustomer';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/login",
        element:<RestauranLogin/>
      },
      {
        path:"/signin",
        element: <RestauranSignin/>
      },
      {
        path:"/facaSuaReserva/:restaurantId",
        element:<TableBooking/>
      },
      {
        path:"/dadosSuaReserva",
        element:<ConfirmationPage/>
      },
      {
        path:"/busquePeloRestaurante",
        element:<SearchRestaurant/>
      },
      {
        path:"/joinCustomer",
        element:<AfterJoinCustomer/>
      },
      {
        path:"/signinRestaurante",
        element:<SignRestaurantForms/>
      },
      {
        path:"/siginConsumidores",
        element:<SignCustomersForms/>
      },
      {
        path: "/deletarMinhaConta",
        element:<DeleteAccountComponent/>
      },
      {
        path:"/joinRestaurante",
        element:<AfterJoinRestaurant/>
      },
      {
        path:"/reservasNoMeuRestaurante",
        element:<ViewRestaurant/>
      },
      {
        path:"/minhasReservas",
        element:<ViewCustomer/>
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//export default router;
