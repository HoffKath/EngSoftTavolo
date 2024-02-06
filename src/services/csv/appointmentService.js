import Appointment from '../../data/appointment.js';
import Papa from 'papaparse';

export default function AppointmentService() {
  const localStorageKey = 'appointmentData';

  const fetchAppointmentData = async () => {
    try {
      const storedData = localStorage.getItem(localStorageKey);
      return storedData ? Papa.parse(storedData, { header: true }).data : [];
    } catch (error) {
      console.error('Error fetching appointment data:', error);
      throw error;
    }
  };

  const saveAppointmentData = async (data) => {
    const csv = Papa.unparse(data, { header: true });
    localStorage.setItem(localStorageKey, csv);
  };

  return {
    async createAppointment(newAppointment) {
      try {
        const allAppointments = await this.readAppointments();
        allAppointments.push(newAppointment);
        await saveAppointmentData(allAppointments);
      } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
      }
    },
  
    async deleteAppointmentById(appointmentId) {
      try {
        const allAppointments = await this.readAppointments();
        const updatedAppointments = allAppointments.filter((appointment) => appointment.id !== appointmentId);
        await saveAppointmentData(updatedAppointments);
      } catch (error) {
        console.error('Error deleting appointment by ID:', error);
        throw error;
      }
    },
  
    async getAppointmentsByRestaurantId(restaurantId) {
      try {
        const allAppointments = await this.readAppointments();
        const appointmentsByRestaurant = allAppointments.filter((appointment) => appointment.restaurantId === restaurantId);
        return appointmentsByRestaurant.sort((a, b) => new Date(a.date) - new Date(b.date));
      } catch (error) {
        console.error('Error getting appointments by restaurant ID:', error);
        throw error;
      }
    },
  
    async getAppointmentsByConsumerId(consumerId) {
      try {
        const allAppointments = await this.readAppointments();
        const appointmentsByConsumer = allAppointments.filter((appointment) => appointment.consumerId === consumerId);
        return appointmentsByConsumer.sort((a, b) => new Date(a.date) - new Date(b.date));
      } catch (error) {
        console.error('Error getting appointments by consumer ID:', error);
        throw error;
      }
    },
    
    async readAppointments() {
      try {
        const records = await fetchAppointmentData();
        return records.map((record) => {
          return new Appointment(record.consumerId, record.restaurantId, record.date, record.peopleAmount, record.special);
        });
      } catch (error) {
        console.error('Error reading appointments:', error);
        throw error;
      }
    },
  };
}