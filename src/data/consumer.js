import { v4 as uuidv4 } from 'uuid';

export default class Consumer {
  id
  name
  email
  password
  cellphone

  constructor(name, email, password, cellphone, id = uuidv4()) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.cellphone = cellphone;
  }
}