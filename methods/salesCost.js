exports.getSaleCostsPerProduct = function(salesLines){
	   var totalSalesPerProduct = {};
	salesLines.forEach(function(line){
        
        //split each line into fields
        var fields = line.split(";");
        var productName = fields[2];
        var qty = fields[3];
        
        var salesPrice = fields[4];
        salesPrice = salesPrice.substring(1)
        salesPrice = salesPrice.replace(",", ".");

        if(totalSalesPerProduct[productName] === undefined){
            totalSalesPerProduct[productName] = 0;
        };

        totalSalesPerProduct[productName] = totalSalesPerProduct[productName] + Number(qty) * Number(salesPrice);
               
    });
	return totalSalesPerProduct;

};