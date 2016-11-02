//Модуль с утилитами
var Utils = (function () {
  'use strict';

  function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  return {
    isNumber: isNumber
  };
} ());

//Модуль с калькулятором
var Calculator = (function (Utils) {
  'use strict';

  var result = 0;

  function add(value) {
    if (Utils.isNumber(value)) {
      result += value;
      return add;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function subtract(value) {
    if (Utils.isNumber(value)) {
      result -= value;
      return subtract;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function divide(value) {
    if (Utils.isNumber(value)) {
      result /= value;
      return divide;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function multiply(value) {
    if (Utils.isNumber(value)) {
      result *= value;
      return multiply;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function getResult() {
    return result;
  }

  function reset() {
    return result = 0;
  }

  return {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    getResult: getResult,
    reset: reset
  }

} (Utils));

Calculator.add(3)(2)(1);  //6
Calculator.subtract(2);   //4
Calculator.divide(2);     //2
Calculator.multiply(3);   //6
console.log(Calculator.getResult());