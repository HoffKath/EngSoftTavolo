import '../styles/main.css'
import Button from './button';
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <div className="text">Estamos aqui para <br /><span className="italic">facilitar</span> sua reserva!</div>

            <Link to="/busquePeloRestaurante" style={{ textDecoration: 'none' }}>
                <Button label="Procurar restaurante" />
            </Link>

            <div className="images">
                <img src={image1} width="400px" height="auto"></img>
                <img src={image2} width="600px" height="auto"></img>
            </div>
        </div>
    );
};

export default Main;