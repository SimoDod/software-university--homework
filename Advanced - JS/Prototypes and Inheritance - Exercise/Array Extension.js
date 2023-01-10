(function arrayExtension() {
  let myArr = [1, 2, 3];

  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    let newArr = [];
    for (let i = n; i < this.length; i++) {
      const element = this[i];
      newArr.push(element);
    }
    return newArr;
  };

  Array.prototype.take = function (n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      const element = this[i];
      newArr.push(element);
    }
    return newArr;
  };

  Array.prototype.sum = function () {
    let sum = this.reduce((ac, x) => ac + x, 0);
    return sum;
  };
  Array.prototype.average = function () {
    let sum = this.reduce((ac, x) => ac + x, 0);
    let average = sum / this.length;
    return average;
  };
})();
