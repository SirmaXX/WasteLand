const SqlProvider =require('./Sql/SqlProvider.js');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sence26es_"
  });
  

SqlProvider.create(con,"denemes");