let { assert } = require("chai");
let { expect } = require("chai");
let mathEnforcer = require("../mathEnforcer");

describe("MathEnforcer", () => {
  describe("testing addFives", () => {
    it("should return undefined if the argument is not a number", () => {
      assert.equal(mathEnforcer.addFive("1"), undefined);
      assert.equal(mathEnforcer.addFive([]), undefined);
      assert.equal(mathEnforcer.addFive({}), undefined);
      assert.equal(mathEnforcer.addFive(true), undefined);
    });

    it("should return result +5 if the argument is a number", () => {
      assert.equal(mathEnforcer.addFive(1), 6);
      assert.equal(mathEnforcer.addFive(-2), 3);
      expect(mathEnforcer.addFive(5.12)).to.be.closeTo(10.12, 0.01);
    });
  });

  describe("testing subtractTen", () => {
    it("should return undefined if the argument is not a number", () => {
      assert.equal(mathEnforcer.subtractTen("1"), undefined);
      assert.equal(mathEnforcer.subtractTen([]), undefined);
      assert.equal(mathEnforcer.subtractTen({}), undefined);
      assert.equal(mathEnforcer.subtractTen(true), undefined);
    });

    it("should return result -10 if the argument is a number", () => {
      assert.equal(mathEnforcer.subtractTen(11), 1);
      assert.equal(mathEnforcer.subtractTen(-7), -17);
      expect(mathEnforcer.subtractTen(4.88)).to.be.closeTo(-5.12, 0.01);
    });
  });

  describe("testing sum", () => {
    it("should return undefined if the first argument is not a number", () => {
      assert.equal(mathEnforcer.sum("1", 5), undefined);
      assert.equal(mathEnforcer.sum([], 5), undefined);
      assert.equal(mathEnforcer.sum({}, 5), undefined);
      assert.equal(mathEnforcer.sum(true, 5), undefined);
    });

    it("should return undefined if the second argument is not a number", () => {
      assert.equal(mathEnforcer.sum(5, "1"), undefined);
      assert.equal(mathEnforcer.sum(5, []), undefined);
      assert.equal(mathEnforcer.sum(5, {}), undefined);
      assert.equal(mathEnforcer.sum(5, true), undefined);
    });

    it("should return result if the arguments are a numbers", () => {
      assert.equal(mathEnforcer.sum(11, 11), 22);
      assert.equal(mathEnforcer.sum(-7, 10), 3);
      expect(mathEnforcer.sum(4.88, 5.12)).to.be.closeTo(10, 0.01);
    });
  });
});
