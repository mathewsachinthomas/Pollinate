var mysql = require('mysql');
const dateObject = new Date();
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "12345",  
database: "pollinate"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "INSERT INTO webrequest (timestamp) VALUES ?";
var values = dateObject;  
con.query(sql,[values] function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  
