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
        return restaurants.some(
          restaurant => restaurant.email === email && restaurant.password === password
        );
      }).catch(error => {
        console.error('Error checking credentials:', error);
        throw error;
      });
    },

    getRestaurantById(restaurantId) {
      return this.readRestaurants().find((restaurant) => restaurant.id === restaurantId);
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
      const allRestaurants = await this.readRestaurants();
      const updatedRestaurants = allRestaurants.filter((restaurant) => restaurant.id !== restaurantId);
      await saveRestaurantData(updatedRestaurants);
    },
  };
}
