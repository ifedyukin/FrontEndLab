'use strict';

var Calculator = {

  result: 0,

  add: function(value){
  	return this.result+=value;
  },

  subtract: function(value){
  	return this.result-=value;
  },

  devide: function(value){
  	return this.result/=value;
  },

  multiply: function(value){
  	return this.result*=value;
  },

  getResult: function(){
  	return this.result;
  },

  reset: function(){
  	this.result = 0;
  	return this.result;
  }

};