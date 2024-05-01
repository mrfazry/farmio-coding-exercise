import readline from "readline";
import CarPark from "./carPark";
import Car from "./car";

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const formatOutput = (car: Car) => {
  return `${car.registrationNumber} ${car.color}`;
};

const carPark = new CarPark([]);

// Function to prompt and handle input
function promptInput(additionalMessage?: string) {
  const instruction = `Type "add {registration number} {color}" to add car to this car parking,\n"remove {registration number}" to remove car from this car parking, or\n"list" to list all cars in the car parking. Type "exit" to quit):\n`;

  rl.question(instruction, (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Exiting the application...");
      rl.close(); // Close the readline interface
    } else if (input.toLowerCase() === "list") {
      const cars = carPark.getCars();

      if (cars.length === 0) {
        console.log("No cars in the car parking");
      } else {
        cars.map((c) => {
          console.log(`${formatOutput(c)}`);
        });
      }
    } else if (input.startsWith("add")) {
      const [_, registrationNumber, color] = input.split(" ");

      try {
        const carToAdd = new Car(registrationNumber, color);

        carPark.addCar(carToAdd);

        console.log(`${formatOutput(carToAdd)} added`);
      } catch (err: any) {
        console.error(err.message);
      }
    } else if (input.startsWith("remove")) {
      const [_, registrationNumber] = input.split(" ");

      try {
        const deletedCar = carPark.removeCar(registrationNumber);

        console.log(`${formatOutput(deletedCar)} removed`);
      } catch (err: any) {
        console.error(err.message);
      }
    } else {
      console.error(`Please use correct command.`); // Prompt for more input
    }

    promptInput();
  });
}

// Start the input loop
promptInput();
