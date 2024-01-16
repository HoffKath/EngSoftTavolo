import '../styles/header.css'
import logo from "../assets/logo.png"
import Button from './button';

const Header = () => {
  return (
    <div className="header">
        <a href="#"><div className="logo"><img src={logo} alt="Logo Tavolo" /></div></a>
        <nav>
            <ul>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Nossa História</a></li>
                <li><a href="#">Entre na sua conta</a></li>
                <li><a href="#"><Button label="Crie sua conta"/></a></li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;