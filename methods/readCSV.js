var fs = require('fs');


exports.getData = function(fileName){
        
      var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
        //split the file into rows
      var lines = fileContent.split('\r').splice(1);
       return lines;

}

