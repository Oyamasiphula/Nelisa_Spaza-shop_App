var csvRead = require('./methods/readCSV');

var salesData = csvRead.getData("./data/NelisaSalesHistory.csv");
console.log(salesData);
