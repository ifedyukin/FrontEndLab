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
var Calculator = (function () {
  var Tools = {

    result: 0,

    add: function add(value) {
      if (Utils.isNumber(value)) {
        this.result += value;
        return this;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    subtract: function subtract(value) {
      if (Utils.isNumber(value)) {
        this.result -= value;
        return this;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    divide: function divide(value) {
      if (Utils.isNumber(value)) {
        this.result /= value;
        return this;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    multiply: function multiply(value) {
      if (Utils.isNumber(value)) {
        this.result *= value;
        return this;
      } else {
        throw new Error('Function argument isn\'t number!');
      }
    },

    getResult: function getResult() {
      return this.result;
    },

    reset: function reset() {
      this.result = 0;
      return this;
    }

  }
  return {
    result: Tools.result,
    add: Tools.add,
    subtract: Tools.subtract,
    divide: Tools.divide,
    multiply: Tools.multiply,
    getResult: Tools.getResult,
    reset: Tools.reset
  };
} ())