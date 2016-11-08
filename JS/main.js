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
  "use strict";

  var result = 0;

  function add(value) {
    if (Utils.isNumber(value)) {
      this.result += value;
      return this;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function subtract(value) {
    if (Utils.isNumber(value)) {
      this.result -= value;
      return this;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function divide(value) {
    if (Utils.isNumber(value)) {
      this.result /= value;
      return this;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function multiply(value) {
    if (Utils.isNumber(value)) {
      this.result *= value;
      return this;
    } else {
      throw new Error('Function argument isn\'t number!');
    }
  }

  function getResult() {
    return this.result;
  }

  function reset() {
    this.result = 0;
    return this;
  }

  function server() {
    this.result = 5;
    console.info("Connection... OK!");
  }

  function getInitialState(callback) {
    callback = callback || server;
    var that = this;

    setTimeout(function () {
      callback.apply(that, arguments);
    }, 500);
  }

  return {
    result: result,
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    getResult: getResult,
    reset: reset,
    getInitialState: getInitialState
  };
} ())