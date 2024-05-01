export default class Car {
  registrationNumber: string;
  color: string;

  constructor(registrationNumber: string, color: string) {
    const validRegistrationNumber =
      validateRegistrationNumber(registrationNumber);
    const colorExists = typeof color === "string";

    if (!validRegistrationNumber) {
      throw new Error("Invalid registration number");
    }

    if (!colorExists) {
      throw new Error("Color must be present too");
    }

    this.registrationNumber = registrationNumber.toUpperCase();
    this.color = color;
  }
}

const validateRegistrationNumber = (registrationNumber: string) => {
  const regex = /^[a-zA-Z]{1,2}\d{1,4}[a-zA-Z]{0,3}$/;

  return regex.test(registrationNumber);
};
