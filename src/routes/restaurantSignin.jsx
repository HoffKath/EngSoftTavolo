
import Button from "../components/button";
import '../styles/signPage.css'
import { Link } from "react-router-dom";
import restaurantImg from "../assets/restaurant.jpg"
import clientImg from "../assets/client.png"


const RestauranSignin = () => {
  return (
    <div className="login">
      <div className="restaurantAccount">

        <Link to="/signinRestaurante" style={{ textDecoration: 'none' }}>
          <img src={restaurantImg}></img>
          <Button label="Quero criar uma conta de restaurante" />
        </Link>
      </div>
      <div className="clientAccount">
        <Link to="/siginConsumidores" style={{ textDecoration: 'none' }}>
          <img src={clientImg}></img>
          <Button label="Quero criar uma conta para reservar mesas" />
        </Link>
      </div>
    </div>
  );

}


export default RestauranSignin;