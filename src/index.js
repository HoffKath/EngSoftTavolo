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
import DeleteAccount from './routes/deleteAccount';
import SearchRestaurant from './routes/searchRestaurant';
import TableBooking from './routes/tableBooking';
import SignRestaurantForms from './components/signRestaurantForm';
import SignCustomersForms from './components/singCostumersForms';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
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
        path:"/facaSuaReserva",
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
        path:"/deletandoSuaConta",
        element:<DeleteAccount/>
      },
      {
        path:"/signinRestaurante",
        element:<SignRestaurantForms/>
      },
      {
        path:"/siginConsumidores",
        element:<SignCustomersForms/>
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
