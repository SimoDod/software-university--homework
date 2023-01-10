let { assert } = require("chai");
const { PaymentPackage } = require("../paymentPackage");

describe("testing PaymentPackage", function () {
  it("should throw exception if name is not a string", function () {
    assert.throw(
      () => new PaymentPackage(3, 10),
      "Name must be a non-empty string"
    );
  });

  it("should throw exception if name is empty string", function () {
    assert.throw(
      () => new PaymentPackage("", 10),
      "Name must be a non-empty string"
    );
  });

  it("should return correct name", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.equal(paymPackage.name, "Tests");
  });

  it("should throw exception if value is not a number", function () {
    assert.throw(
      () => new PaymentPackage("Tests", "name"),
      "Value must be a non-negative number"
    );
  });

  it("should throw exception if value is a negative number", function () {
    assert.throw(
      () => new PaymentPackage("Tests", -10),
      "Value must be a non-negative number"
    );
  });

  it("should return correct value", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.equal(paymPackage.value, 10);
  });

  it("should return correct data", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.equal(paymPackage.name, "Tests");
    assert.equal(paymPackage.value, 10);
  });

  it("should return correct vat", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.equal(paymPackage.VAT, 20);
  });

  it("should return correct vat2", function () {
    let paymPackage = new PaymentPackage("Tests", 10);

    assert.equal((paymPackage.VAT = 40), 40);
  });

  it("should throw exception if value is not a number", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.throw(
      () => (paymPackage.VAT = "name"),
      "VAT must be a non-negative number"
    );
  });

  it("should throw exception if value is a negative number", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.throw(
      () => (paymPackage.VAT = -10),
      "VAT must be a non-negative number"
    );
  });

  it("should return correct active", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.equal(paymPackage.active, true);
  });

  it("should return correct active2", function () {
    let paymPackage = new PaymentPackage("Tests", 10);

    assert.equal((paymPackage.active = false), false);
  });

  it("should throw exception if value is not a boolean", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    assert.throw(
      () => (paymPackage.active = "name"),
      "Active status must be a boolean"
    );
  });

  it("should return correct toString", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    let actualString = paymPackage.toString();
    let expectedString = `paymPackage: Tests\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`;
    assert.equal(actualString, expectedString);
  });

  it("should return correct toString with false", function () {
    let paymPackage = new PaymentPackage("Tests", 10);
    paymPackage.active = false;
    let actualString = paymPackage.toString();
    let expectedString = `package: Tests (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`;
    assert.equal(actualString, expectedString);
  });
});
