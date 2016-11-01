'use strict';

class calculator {

  constructor() {
    this.result = 0;
  }

  add(value){
  	return this.result+=value;
  }

  subtract(value){
  	return this.result-=value;
  }

  devide(value){
  	return this.result/=value;
  }

  multiply(value){
  	return this.result*=value;
  }

  getResult(){
  	return this.result;
  }

  reset(){
  	this.result = 0;
  	return this.result;
  }

}

var Calculator = new calculator();