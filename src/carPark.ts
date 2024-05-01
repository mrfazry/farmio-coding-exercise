import Car from "./car";

export default class CarPark {
  constructor(private cars: Car[]) {}

  getCars() {
    return this.cars;
  }

  addCar(car: Car) {
    if (
      this.cars.find((c) => c.registrationNumber === car.registrationNumber)
    ) {
      throw new Error("Car already exists");
    }

    this.cars.push(car);

    return car;
  }

  removeCar(registrationNumber: string) {
    const carToDelete = this.cars.find(
      (c) => c.registrationNumber === registrationNumber.toUpperCase()
    );

    console.log("carToDelete", carToDelete);

    if (carToDelete) {
      this.cars.filter((car) => car.registrationNumber !== registrationNumber);

      return carToDelete;
    } else {
      throw new Error("Car does not exist");
    }
  }
}
