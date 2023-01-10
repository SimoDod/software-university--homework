function calculator() {
  let selector1;
  let selector2;
  let resultSelector;

  return {
    init: (selectorA, selectorB, resultSelectorA) => {
      selector1 = document.querySelector(selectorA);
      selector2 = document.querySelector(selectorB);
      resultSelector = document.querySelector(resultSelectorA);
    },
    add: () => {
        let firstNum = Number(selector1.value);
        let secondNum = Number(selector2.value);
        let result = firstNum + secondNum;
        resultSelector.value = result;
        
    },
    subtract: () => {
        let firstNum = Number(selector1.value);
        let secondNum = Number(selector2.value);
        let result = firstNum - secondNum;
        resultSelector.value = result;
    },
  };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
