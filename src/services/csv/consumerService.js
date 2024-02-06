import Consumer from '../../data/consumer.js';
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
            record.name,
            record.email,
            record.password,
            record.cellphone,
            record.id,
          );
        });
      } catch (error) {
        console.error('Error reading consumers:', error);
        throw error;
      }
    },

    checkCredentials(email, password) {
      return this.readConsumers().then(consumers => {
        return consumers.some(
          consumer => consumer.email === email && consumer.password === password
        );
      }).catch(error => {
        console.error('Error checking credentials:', error);
        throw error;
      });
    },

    getConsumerById(consumerId) {
      return this.readConsumers().find((consumer) => consumer.id === consumerId);
    },

    async createConsumer(newConsumer) {
      try {
        const allConsumers = await this.readConsumers();
        
        allConsumers.push(newConsumer);
        
        await saveConsumerData(allConsumers);
      } catch (error) {
        console.error('Error creating consumer:', error);
        throw error;
      }
    },
    

    async deleteConsumerById(consumerId) {
      const allConsumers = await this.readConsumers();
      const updatedConsumers = allConsumers.filter((consumer) => consumer.id !== consumerId);
      await saveConsumerData(updatedConsumers);
    },
  };
}
