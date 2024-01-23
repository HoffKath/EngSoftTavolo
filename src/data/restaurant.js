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

  constructor(user, restaurantName, address, cellphone, tablesAmount, hours, isVegan, isGlutenFree, focus) {
    this.user = user;
    this.restaurantName = restaurantName;
    this.address = address;
    this.cellphone = cellphone;
    this.tablesAmount = tablesAmount;
    this.hours = hours;
    this.isVegan = isVegan;
    this.isGlutenFree = isGlutenFree;
    this.focus = focus;
  }
}