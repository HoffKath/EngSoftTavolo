import Restaurant from '../../data/restaurant.js';
import User from '../../data/user.js';
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
            new User(record.userId, record.userName, record.userEmail, record.userPassword),
            record.restaurantName,
            record.address,
            record.cellphone,
            record.tablesAmount,
            record.hours,
            record.isVegan,
            record.isGlutenFree,
            record.focus
          );
        });
      } catch (error) {
        console.error('Error reading restaurants:', error);
        throw error;
      }
    },

    checkCredentials(email, password) {
      return this.readRestaurants().some(
        (restaurant) => restaurant.user.email === email && restaurant.user.password === password
      );
    },

    getRestaurantById(restaurantId) {
      return this.readRestaurants().find((restaurant) => restaurant.user.id === restaurantId);
    },

    async createRestaurant(newRestaurant) {
      const allRestaurants = await this.readRestaurants();
      allRestaurants.push(newRestaurant);
      await saveRestaurantData(allRestaurants);
    },

    async deleteRestaurantById(restaurantId) {
      const allRestaurants = await this.readRestaurants();
      const updatedRestaurants = allRestaurants.filter((restaurant) => restaurant.user.id !== restaurantId);
      await saveRestaurantData(updatedRestaurants);
    },
  };
}
