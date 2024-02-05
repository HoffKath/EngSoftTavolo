
import Button from "../components/button";
import '../styles/signPage.css'
import { Link } from "react-router-dom";
const RestauranSignin = () =>{

    return (
      <div className="login">
        <Link to="/signinRestaurante"><Button className="loginBtn" label="Quero criar uma conta de restaurante"/></Link>
        <Link to="/siginConsumidores"><Button className="loginBtn" label="Quero criar uma conta para reservar mesas"/></Link>
      </div>
    );
  
}

  
export default RestauranSignin;