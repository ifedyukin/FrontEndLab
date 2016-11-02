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
(function (Utils) {
  'use strict';

  var result = 0;

  var calculator = {

    add: function add(value) {
      if (Utils.isNumber(value)) {
        result += value;
        return add;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    subtract: function subtract(value) {
      if (Utils.isNumber(value)) {
        result -= value;
        return subtract;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    divide: function divide(value) {
      if (Utils.isNumber(value)) {
        result /= value;
        return divide;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    multiply: function multiply(value) {
      if (Utils.isNumber(value)) {
        result *= value;
        return multiply;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    getResult: function () {
      return result;
    },

    reset: function () {
      return result = 0;
    }
  };


  //Вычисления
  calculator.add(3)(2)(1); //6
  calculator.divide(2);    //3
  calculator.subtract(1);  //2
  console.log(calculator.getResult());

} (Utils));