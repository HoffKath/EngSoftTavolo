export class Appointment {
  consumer
  restaurant
  date
  peopleAmount

  constructor(consumer, restaurant, date, peopleAmount) {
    this.consumer = consumer;
    this.restaurant = restaurant;
    this.date = date;
    this.peopleAmount = peopleAmount;
  }
}