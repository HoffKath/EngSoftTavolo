import Consumer from '../../data/consumer.js';
import User from '../../data/user.js';
import Papa from 'papaparse';

export default function ConsumerService() {
  const localStorageKey = 'consumerData';

  const fetchConsumerData = async () => {
    try {
      const storedData = localStorage.getItem(localStorageKey);
      return storedData ? Papa.parse(storedData, { header: true }).data : [];
    } catch (error) {
      console.error('Error fetching consumer data:', error);
      throw error;
    }
  };

  const saveConsumerData = async (data) => {
    const csv = Papa.unparse(data, { header: true });
    localStorage.setItem(localStorageKey, csv);
  };

  return {
    async readConsumers() {
      try {
        const records = await fetchConsumerData();

        return records.map((record) => {
          return new Consumer(
            new User(record.userId, record.userName, record.userEmail, record.userPassword),
            record.cellphone,
          );
        });
      } catch (error) {
        console.error('Error reading consumers:', error);
        throw error;
      }
    },

    checkCredentials(email, password) {
      return this.readConsumers().some(
        (consumer) => consumer.user.email === email && consumer.user.password === password
      );
    },

    getConsumerById(consumerId) {
      return this.readConsumers().find((consumer) => consumer.user.id === consumerId);
    },

    async createConsumer(newConsumer) {
      const allConsumers = await this.readConsumers();
      allConsumers.push(newConsumer);
      await saveConsumerData(allConsumers);
    },

    async deleteConsumerById(consumerId) {
      const allConsumers = await this.readConsumers();
      const updatedConsumers = allConsumers.filter((consumer) => consumer.user.id !== consumerId);
      await saveConsumerData(updatedConsumers);
    },
  };
}
