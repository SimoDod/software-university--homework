class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      model === "" ||
      !Number.isInteger(horsepower) ||
      horsepower < 0 ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({ model, horsepower, price, mileage });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let currModel = this.availableCars.find((car) => car.model === model);

    if (!currModel) {
      throw new Error(`${model} was not found!`);
    }
    let diff = Math.abs(currModel.mileage - desiredMileage);

    if (currModel.mileage > desiredMileage) {
      if (diff <= 40000) {
        currModel.price = currModel.price * 0.95;
      } else if (diff > 40000) {
        currModel.price = currModel.price * 0.9;
      }
    }
    let soldPrice = currModel.price;
    let indexOfCurCar = this.availableCars.indexOf(currModel);
    this.soldCars.push({model: currModel.model, horsepower: currModel.horsepower, soldPrice});
    this.totalIncome += soldPrice;
    this.availableCars.splice(indexOfCurCar, 1);

    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    let buff = ["-Available cars:"];
    if (!this.availableCars) {
      return "There are no available cars";
    } else {
      for (const car of this.availableCars) {
        buff.push(
          `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
            2
          )} km - ${car.price.toFixed(2)}$`
        );
      }
    }
    return buff.join("\n");
  }

  salesReport(criteria) {
    let sortedCars;
    
    switch (criteria) {
      case "horsepower":
        sortedCars = this.soldCars.sort((a,b) => {
            return b.horsepower - a.horsepower;
        })
        break;

      case "model":
        sortedCars = this.soldCars.sort((a,b) => {
            return a.model.localeCompare(b.model)
        })
        break;

      default: throw new Error("Invalid criteria!")
    }
    let buff = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
    `-${this.soldCars.length} cars sold:`];

    for (const car of this.soldCars) {
        buff.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
    }
    
    return buff.join('\n')
  }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



