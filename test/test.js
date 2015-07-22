var assert = require("assert");

var csvRead = require('../methods/readCSV');
//I've just made (file)object to be a global variable therefore to not encounter that error of saying object method 'salesline'(function's parameter)#has no method;
var salesData = csvRead.getData('./data/NelisaSalesHistory.csv');

describe("Nelisa's spaza sales processing", function(){
    it('should find all the sales rows in the file', function(){
    	//Now we are using the concept(salesData) as our csvfile because we've assigned the csvfile to be our (Global Variable = {salesData}).
    	assert.deepEqual(448, salesData.length);
    });
});

