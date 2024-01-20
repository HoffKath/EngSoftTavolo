import '../styles/header.css'
import logo from "../assets/logo.png"
import Button from './button';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
        <a href="#"><Link to="/"><div className="logo"><img src={logo} alt="Logo Tavolo" /></div></Link></a>
        <nav>
            <ul>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Nossa História</a></li>
                <li><a href="#"><Link to="/login">Entre na sua conta</Link></a></li>
                <li><a href="#"><Link to="/signin"><Button label="Crie sua conta"/></Link></a></li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;
