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
      const allAppointments = await this.readAppointments();
      allAppointments.push(newAppointment);
      await saveAppointmentData(allAppointments);
    },

    async deleteAppointmentById(appointmentId) {
      const allAppointments = await this.readAppointments();
      const updatedAppointments = allAppointments.filter((appointment) => appointment.id !== appointmentId);
      await saveAppointmentData(updatedAppointments);
    },

    async getAppointmentsByRestaurantId(restaurantId) {
      const allAppointments = await this.readAppointments();
      const appointmentsByRestaurant = allAppointments.filter((appointment) => appointment.restaurantId === restaurantId);
      return appointmentsByRestaurant.sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    async getAppointmentsByConsumerId(consumerId) {
      const allAppointments = await this.readAppointments();
      const appointmentsByConsumer = allAppointments.filter((appointment) => appointment.consumerId === consumerId);
      return appointmentsByConsumer.sort((a, b) => new Date(a.date) - new Date(b.date));
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
