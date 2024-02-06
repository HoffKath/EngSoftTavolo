export default class Appointment {
  consumerId
  restaurantId
  date
  peopleAmount
  special

  constructor(consumerId, restaurantId, date, peopleAmount, special) {
    this.consumerId = consumerId;
    this.restaurantId = restaurantId;
    this.date = date;
    this.peopleAmount = peopleAmount;
    this.special = special
  }
} 