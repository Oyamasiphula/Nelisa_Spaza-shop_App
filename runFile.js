var csvRead = require('./methods/readCSV');
var qtyPerProduct = require('./methods/productQty');
var salesCosts = require('./methods/salesCost');

var salesData = csvRead.getData("./data/NelisaSalesHistory.csv");
//console.log(salesData);
var prodQty = qtyPerProduct.getProductQty(salesData);
console.log(prodQty);

var totalCostPerProducts = salesCosts.getSaleCostsPerProduct(salesData);
console.log(totalCostPerProducts);
