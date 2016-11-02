(function () {
  'use strict';

  var result = 0;

  var calculator = {

    add: function add(value) {
      result += value;
      return add;
    },

    subtract: function subtract(value) {
      result -= value;
      return subtract;
    },

    divide: function divide(value) {
      result /= value;
      return divide;
    },

    multiply: function multiply(value) {
      result *= value;
      return multiply;
    },

    getResult: function () {
      return result;
    },

    reset: function () {
      return result = 0;
    }
  };

} ());