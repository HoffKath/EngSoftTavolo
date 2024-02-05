export default class Restaurant {
  user
  restaurantName
  address
  cellphone
  tablesAmount
  hours
  isVegan
  isGlutenFree
  focus
  logo
  rating

  constructor(user, address, cellphone, tablesAmount, hours, isVegan, isGlutenFree, focus, rating, restaurantName, logo) {
    this.user = user;
    this.restaurantName = restaurantName;
    this.address = address;
    this.cellphone = cellphone;
    this.tablesAmount = tablesAmount;
    this.hours = hours;
    this.isVegan = isVegan;
    this.isGlutenFree = isGlutenFree;
    this.focus = focus;
    this.logo = logo;
    this.rating = rating;
  }
}