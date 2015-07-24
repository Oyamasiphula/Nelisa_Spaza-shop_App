var csvRead = require('./methods/readCSV');
var qtyPerProduct = require('./methods/productQty');
var salesCosts = require('./methods/salesCost');
var salesCostPerCategories = require('./methods/totalSalesPerCategory');
//I've just made (file)object to be a global variable therefore to not encounter that error of saying object method 'salesData'(function's parameter)#has no method;

var salesData = csvRead.getData("./data/NelisaSalesHistory.csv");
//console.log(salesData);
var prodQty = qtyPerProduct.getProductQty(salesData);
// console.log(prodQty);

var totalCostPerProducts = salesCosts.getSaleCostsPerProduct(salesData);
console.log(totalCostPerProducts);

var totalSalesPerCategories = salesCostPerCategories.getSalesPerProductsCategory(salesData);
console.log(totalSalesPerCategories);
