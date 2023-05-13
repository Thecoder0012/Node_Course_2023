export default class User {
  constructor(name, pass, isLogged) {
    this.name = name;
    this.pass = pass;
    this.isLogged = isLogged;
  }

  auth(isOn) {
    this.isLogged = isOn;
  }
}
