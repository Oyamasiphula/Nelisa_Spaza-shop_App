exports.getSalesPerProductsCategory = function(salesLines){
		// var qtyPerCategoryMap = {};
		var qtyPerProduct = [];
	    var productsSold = {};
    salesLines.forEach(function(line){
            //split each line into fields
            var fields = line.split(";");
            var productName = fields[2];
            var qty = fields[3];
    
            if(productsSold[productName] === undefined){
                productsSold[productName] = 0;
            };

          productsSold[productName] =productsSold[productName] + Number(qty);  
             
        });
    		console.log(qtyPerProduct);
    		qtyPerProduct.push(productsSold);
    		return productsSold

   //  		var productCategories = {
			// 					    'Fanta 500ml' : 'Beverages',
			// 					    'Coke 500ml' : 'Beverages',
			// 					    'Cream Soda 500ml' : 'Beverages',
			// 					    'Shampoo 1 litre' : 'Toiletries',
			// 					    'Soap Bar' : 'Toiletries',
			// 					    'Mixed Sweets 5s' : 'Luxuries',
			// 					    'Heart Chocolates' : 'Luxuries',
			// 					    'Iwisa Pap 5kg' : 'Long_Life_Groceries',
			// 					    'Top Class Soy Mince' : 'Long_Life_Groceries',
			// 					    'Bread' : 'Short_Life_Groceries',
			// 					    'Milk 1l' : 'Short_Life_Groceries',
			// 					    'Imasi' : 'Short_Life_Groceries',
			// 					    'Rose (plastic)' : 'Novelty_Goods',
			// 					    'Valentine Cards' : 'Novelty_Goods',
			// 					    'Bananas - loose' : 'Fruit',
			// 					    'Apples - loose' : 'Fruit',
			// 					    'Chakalaka Can' : 'Tinned_Food',
			// 					    'Gold Dish Vegetable Curry Can' : 'Tinned_Food'
			// 					};

			// for(var productName in salesLines){
			       
			//         var qty = qtyPerProduct[productName];
			//         var categoryName = productCategories[productName];

			//         if(qtyPerCategoryMap[categoryName] === undefined){
			//             qtyPerCategoryMap[categoryName] = 0;
			//         };
			//         qtyPerCategoryMap[categoryName] = qtyPerCategoryMap[categoryName] + Number(qty);
			//     }
			//     console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
			//     console.log(qtyPerCategoryMap);
			//     console.log('=========================================================== end of CategoryName + Qty PerCategory map');
			// 	return qtyPerCategoryMap;

	};