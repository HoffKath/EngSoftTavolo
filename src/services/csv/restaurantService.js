import Restaurant from '../../data/restaurant.js';
import Papa from 'papaparse';

export default function RestaurantService() {
  const localStorageKey = 'restaurantData';

  const fetchRestaurantData = async () => {
    try {
      const storedData = localStorage.getItem(localStorageKey);
      return storedData ? Papa.parse(storedData, { header: true }).data : [];
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      throw error;
    }
  };

  const saveRestaurantData = async (data) => {
    const csv = Papa.unparse(data, { header: true });
    localStorage.setItem(localStorageKey, csv);
  };

  return {
    async readRestaurants() {
      try {
        const records = await fetchRestaurantData();

        return records.map((record) => {
          return new Restaurant(
            record.name,
            record.email,
            record.password,
            record.address,
            record.cellphone,
            record.tablesAmount,
            record.hours,
            record.isVegan,
            record.isGlutenFree,
            record.focus,
            record.restaurantName,
            record.id,
          );
        });
      } catch (error) {
        console.error('Error reading restaurants:', error);
        throw error;
      }
    },

    checkCredentials(email, password) {
      return this.readRestaurants().then(restaurants => {
        const matchingRestaurant = restaurants.find(
          restaurant => restaurant.email === email && restaurant.password === password
        );
        if (matchingRestaurant) {
          return matchingRestaurant.id;
        } else {
          return null;
        }
      }).catch(error => {
        console.error('Error checking credentials:', error);
        throw error;
      });
    },

    async getRestaurantById(restaurantId) {
      try {
        const restaurants = await this.readRestaurants();
        const matchingRestaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
        return matchingRestaurant || null;
      } catch (error) {
        console.error('Error getting restaurant by ID:', error);
        throw error;
      }
    },

    async createRestaurant(newRestaurant) {
      try {
        const allRestaurants = await this.readRestaurants();
        
        allRestaurants.push(newRestaurant);
        
        await saveRestaurantData(allRestaurants);
      } catch (error) {
        console.error('Error creating restaurant:', error);
        throw error;
      }
    },

    async deleteRestaurantById(restaurantId) {
      try {
        let allRestaurants = await this.readRestaurants();
        allRestaurants = allRestaurants.filter((restaurant) => restaurant.id !== restaurantId);
        await saveRestaurantData(allRestaurants);
      } catch (error) {
        console.error('Error deleting restaurant:', error);
        throw error;
      }
    }, 
  };
}
