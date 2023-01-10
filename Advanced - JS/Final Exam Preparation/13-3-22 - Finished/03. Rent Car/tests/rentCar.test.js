let { rentCar } = require("../rentCar");
let { assert } = require("chai");

//{searchCar: ƒ, calculatePriceOfCar: ƒ, checkBudget: ƒ}

describe("Tests …", function () {
  describe("tests searchCar", function () {
    it("should not work with wrong inputs …", function () {
      assert.throw(
        () => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1),
        "Invalid input!"
      );
      assert.throw(() => rentCar.searchCar([], true), "Invalid input!");
      assert.throw(
        () => rentCar.searchCar(1, ["Volkswagen", "BMW", "Audi"]),
        "Invalid input!"
      );
      assert.throw(() => rentCar.searchCar({}, "string"), "Invalid input!");
      assert.throw(() => rentCar.searchCar("Audi", 1), "Invalid input!");
      assert.throw(
        () => rentCar.searchCar(["", "BMW", "Audi"], { name: 1 }),
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], true),
        "Invalid input!"
      );
    });
    it("should work with correct input", () => {
      assert.equal(
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi"),
        `There is 1 car of model Audi in the catalog!`
      );
    });

    it("should not work if car not present", () => {
      assert.throw(
        () => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Coruba"),
        "There are no such models in the catalog!"
      );
    });
  });

  describe("tests calculatePriceOfCar", () => {
    it("should not work with wrong inputs …", function () {
      assert.throw(() => rentCar.calculatePriceOfCar([], 1), "Invalid input!");
      assert.throw(
        () => rentCar.calculatePriceOfCar("[]", []),
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar(1, ["Volkswagen", "BMW", "Audi"]),
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar({}, "string"),
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar(["", "BMW", "Audi"], { name: 1 }),
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar(["Volkswagen", "BMW", "Audi"], true),
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar(1, "true"),
        "Invalid input!"
      );
    });

    it("should calculate the correct price", () => {
      //36
      assert.equal(
        rentCar.calculatePriceOfCar("Audi", 20),
        `You choose Audi and it will cost $720!`
      );
    });

    it("should throw error if no such car in the catalog", () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar("Jigula", 20),
        "No such model in the catalog!"
      );
    });
  });

  describe("testing checkBudget", () => {
    //•	checkBudget(costPerDay, days, budget)
    it("should not work with wrong inputs", () => {
      assert.throw(() => rentCar.checkBudget(1, {}, 1), "Invalid input!");
      assert.throw(() => rentCar.checkBudget([], 1, 1), "Invalid input!");
      assert.throw(() => rentCar.checkBudget(1, 1, true), "Invalid input!");
      assert.throw(() => rentCar.checkBudget("123", 1, 1), "Invalid input!");
      assert.throw(
        () => rentCar.checkBudget(1, { name: "haha" }, 1),
        "Invalid input!"
      );
      assert.throw(() => rentCar.checkBudget(1, 1, ["text"]), "Invalid input!");
      assert.throw(() => rentCar.checkBudget("text", [], {}), "Invalid input!");
      assert.throw(() => rentCar.checkBudget(true, false, 0), "Invalid input!");
      assert.throw(
        () => rentCar.checkBudget("haha", 1, true),
        "Invalid input!"
      );
      assert.throw(() => rentCar.checkBudget([], [], []), "Invalid input!");
      assert.throw(
        () => rentCar.checkBudget(true, true, true),
        "Invalid input!"
      );
    });

    it("budget should be bigger or equal", () => {
      assert.equal(rentCar.checkBudget(5, 10, 60), `You rent a car!`);
      assert.equal(rentCar.checkBudget(5, 10, 50), `You rent a car!`);
    });

    it("budget should be less", () => {
      assert.equal(rentCar.checkBudget(5, 10, 40), "You need a bigger budget!");
    });
  });
});
