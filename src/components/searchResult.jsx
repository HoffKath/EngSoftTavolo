import '../styles/searchResult.css';
import RestaurantPreview from './restaurantPreview';
import { Link } from "react-router-dom";


const SearchResult = ({ restaurants }) => {
  return (
    <div className="restaurants-container">
      {restaurants.map((restaurant) => (
        <Link to={`/facaSuaReserva/${restaurant.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <RestaurantPreview restaurantImg={restaurant.logo}
            restaurantName={restaurant.name}
            restaurantRating={restaurant.rating} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
