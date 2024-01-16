import '../styles/footer.css'
import RatingView from './ratingView';
import restaurantPasta from '../assets/restaurantBanner.png'

const Footer = ({
  restaurantName = "Restaurant Pasta Today",
  restaurantBanner = restaurantPasta,
  restaurantInfo = "Restaurante Pasta Today Avaliado pelos usuários da Tavolo com cinco estrelas, o restaurante Pasta Today serve o típico e completo menu italiano! Os donos do restaurante foram até a Itália buscar segredos de culinária e decoração a fim de criar um ambiente aconchegante e gostoso para seus consumidores. \n\nE ai? Está a fim de conferir? Basta selecionar o icone do restaurante ao lado.",
  restaurantRating = 5
}) => {
  return (
    <div className="footer">
      <div className="container">
        <p className="suggestion">DICA DO TAVOLO:</p>
        <img src={restaurantBanner}></img>
        <p>Avaliação:
          <RatingView rating={restaurantRating} style={{ color: "#ECC149", paddingTop: "20px", margin: "auto" }} />
        </p>
      </div>
      <div className="desc">{restaurantName}<br /><br />{restaurantInfo}
      </div>
    </div>
  );
};

export default Footer;