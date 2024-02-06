import { v4 as uuidv4 } from 'uuid';

export default class Restaurant {
  id
  name
  email
  password
  restaurantName
  address
  cellphone
  tablesAmount
  hours
  isVegan
  isGlutenFree
  focus
  rating

  constructor(name, email, password, address, cellphone, tablesAmount, hours, isVegan, isGlutenFree, focus, restaurantName, id = uuidv4()) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.restaurantName = restaurantName;
    this.address = address;
    this.cellphone = cellphone;
    this.tablesAmount = tablesAmount;
    this.hours = hours;
    this.isVegan = isVegan;
    this.isGlutenFree = isGlutenFree;
    this.focus = focus;
    this.rating = 0;
  }
}