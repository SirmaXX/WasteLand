var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sence26es_"
  });
  
exports.create=function CreateDatabase(con,tablename){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE " + tablename + "  ", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
}

 exports.add = function Insert(con,tables,colomns,values){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO "+tables+"  (" +colomns +" )+" + values +"+values +" ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
 }