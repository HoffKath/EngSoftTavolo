import '../styles/main.css'
import Button from './button';
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"

const Main = () => {
    return (
        <div className="main">
            <div className="text">Estamos aqui para <br /><span className="italic">facilitar</span> sua reserva!</div>

            <Button label="Procurar restaurante" />

            <div className="images">
                <img src={image1}></img>
                <img src={image2}></img>
            </div>
        </div>
    );
};

export default Main;