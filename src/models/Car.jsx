import uniqid from "uniqid";

class Car {
  constructor(name, model, year, price) {
    this.id = uniqid();
    this.name = name;
    this.model = model;
    this.year = year;
    this.price = price;
  }

}

export default Car;