import Button from "../components/button";
import '../styles/signPage.css'
import { Link } from "react-router-dom";
const AfterJoinCustomer = () =>{

    return (
      <div className="AfterJoinCustomer">
        <Link to="/deletarMinhaConta"><Button label="Quero deletar minha conta"/></Link>
        <Link to="/busquePeloRestaurante"><Button label="Procurar restaurante"/></Link>
      </div>
    );
  
}

  
export default AfterJoinCustomer;