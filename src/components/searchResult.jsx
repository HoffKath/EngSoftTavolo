import '../styles/searchResult.css';
import RestaurantPreview from './restaurantPreview';


const SearchResult = ({ restaurants }) => {
  return (
    <div className="restaurants-container">
      {restaurants.map((restaurant) => (
        <RestaurantPreview restaurantImg={} restaurantName={} restaurantRating={}/>
      ))}
    </div>
  );
};

export default SearchResult;
