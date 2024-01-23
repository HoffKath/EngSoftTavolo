export default class Appointment {
  consumerId
  restaurantId
  date
  peopleAmount

  constructor(consumerId, restaurantId, date, peopleAmount) {
    this.consumerId = consumerId;
    this.restaurantId = restaurantId;
    this.date = date;
    this.peopleAmount = peopleAmount;
  }
} 