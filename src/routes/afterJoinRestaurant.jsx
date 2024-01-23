import Button from "../components/button";
import '../styles/signPage.css'
import { Link } from "react-router-dom";
const AfterJoinRestaurant = () =>{

    return (
      <div className="AfterJoin">
        <Link to="/deletarMinhaConta"><Button label="Quero deletar minha conta"/></Link>
      </div>
    );
  
}

  
export default AfterJoinRestaurant;