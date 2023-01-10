class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let currPlant = this.plants.find((plant) => plant.plantName === plantName);

    if (!currPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (currPlant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    currPlant.ripe = true;
    currPlant.quantity += quantity;

    if (quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let currPlant = this.plants.find((plant) => plant.plantName === plantName);

    if (!currPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (!currPlant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    let indexOfPlant = this.plants.indexOf(currPlant);
    let removingPlant = this.plants.splice(indexOfPlant, 1);
    let name = removingPlant[0].plantName;
    let quantity = removingPlant[0].quantity;
    this.spaceAvailable += currPlant.spaceRequired;
    this.storage.push({ name, quantity });
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let firstLine = `The garden has ${this.spaceAvailable} free space left.\n`;
    let secondLine = "Plants in the garden: ";
    let buff = [];
    let thirdLine = "Plants in storage: ";
    let storageBuff = [];
    let sortedPlantsNames = this.plants.sort((a, b) => {
      return a.plantName.localeCompare(b.plantName);
    });

    for (const plant of sortedPlantsNames) {
      buff.push(plant.plantName);
    }

    if (buff.length > 1) {
      secondLine += buff.join(", ");
    } else {
      secondLine += buff.join("");
    }
    secondLine = secondLine + "\n";

    if (this.storage.length < 1) {
      thirdLine += `The storage is empty.`;
    } else {
      this.storage.forEach((plant) => {
        storageBuff.push(`${plant.name} (${plant.quantity})`);
      });
      thirdLine += storageBuff.join(" ");
    }

    return firstLine + secondLine + thirdLine;
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
