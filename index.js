const express= require('express');

const app = express();
var fs =require('fs')
var binBuff ;
app.get('/',function(req,res){

res.send('hello world')

});
var port = process.env.PORT || 3000;
 
app.listen(port,function(){


console.log('listen to server '+port);

})




// var Connection = require('tedious').Connection;  
//     var config = {  
//         server: 'database-1.crnzh9nzimj3.eu-west-1.rds.amazonaws.com',  //update me
//         authentication: {
//             type: 'default',
//             options: {
//                 userName: 'admin', //update me
//                 password: 'Admin9000'  //update me
//             }
//         },
//         options: {
//             // If you are on Microsoft Azure, you need encryption:
//             encrypt: false,
//             database: 'Reports'  //update me
//         }
//     };  
//     var connection = new Connection(config);  
//     var Request = require('tedious').Request  
//     var TYPES = require('tedious').TYPES;  
  
//     connection.on('connect', function(err) {  
//         // If no error, then good to proceed.  
//         console.log("Connected");  
//         executeStatement1(); 
       
        
    
//         function executeStatement1() {  
            
           
//            var  binBuff = new Buffer('binary');
//            fs.readFile('public/images/1.PNG', 'binary', function(err, fileData) {
               
//             binBuff=fileData
//            });
           
//             request = new Request("INSERT INTO report (report_id, report_name,img) VALUES (@Number, @Name,@theImage);", function(err) {  
//              if (err) {  
//                 console.log(err);}  
//             });   
//             request.addParameter('Number', TYPES.Int , 25); 
//             request.addParameter('Name', TYPES.NVarChar,'report21');  
            
//             request.addParameter('theImage', TYPES.VarBinary,binBuff
//               //   console.log(binBuff)

//               );
            
           
//             request.on('row', function(columns) {  
//                 columns.forEach(function(column) {  
//                   if (column.value === null) {  
//                     console.log('NULL');  
//                   } else {  
//                     console.log("Product id of inserted item is " + column.value);  
//                   }  
//                 });  
//             });
    
//             // Close the connection after the final event emitted by the request, after the callback passes
//             request.on("requestCompleted", function (rowCount, more) {
//                 connection.close();
//             });
//             connection.execSql(request);  
//         }
//     });
    
//     connection.connect();
    
   