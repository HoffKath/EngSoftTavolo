import '../styles/searchResult.css';
import RestaurantPreview from './restaurantPreview';

const SearchResult = ({ restaurants }) => {
  return (
    <div className="restaurants-container">
      {restaurants.map((restaurant) => (
        <RestaurantPreview restaurantImg={restaurant.logo} restaurantName={restaurant.restaurantName} restaurantRating={restaurant.rating}/>
      ))}
    </div>
  );
};

export default SearchResult;
