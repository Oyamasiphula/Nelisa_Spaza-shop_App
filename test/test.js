var assert = require("assert");

var csvRead = require('../methods/readCSV');
//I've just made (file)object to be a global variable therefore to not encounter that error of saying object method 'salesline'(function's parameter)#has no method;
var salesData = csvRead.getData('./data/NelisaSalesHistory.csv');
//require all the functions by refencing their fileName(modules)
var saleQuantities = require('../methods/productQty');
var salesCostsPerProduct = require('../methods/salesCost');


describe("Nelisa's spaza sales processing", function(){
    it('should find all the sales rows in the file', function(){
    	//Now we are using the concept(salesData) as our csvfile because we've assigned the csvfile to be our (Global Variable = {salesData}).
    	assert.deepEqual(448, salesData.length);
    });

    it('should find total quantities for each specific product', function(){
    	var expected = { 'Milk 1l': 142,
						  Imasi: 125,
						  Bread: 130,
						  'Chakalaka Can': 94,
						  'Gold Dish Vegetable Curry Can': 86,
						  'Fanta 500ml': 94,
						  'Coke 500ml': 159,
						  'Cream Soda 500ml': 75,
						  'Iwisa Pap 5kg': 47,
						  'Top Class Soy Mince': 98,
						  'Shampoo 1 litre': 26,
						  'Soap Bar': 50,
						  'Bananas - loose': 114,
						  'Apples - loose': 114,
						  'Mixed Sweets 5s': 172,
						  'Heart Chocolates': 20,
						  'Rose (plastic)': 14,
						  'Valentine Cards': 14 }
	var result = saleQuantities.getProductQty(salesData);
		assert.deepEqual(expected,result);
    });

  });

