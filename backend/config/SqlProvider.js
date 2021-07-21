var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sence26es_"
  });
  
exports.CreateDB=function CreateDatabase(con,tablename){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE " + tablename + "  ", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
}

 exports.CreateRecord = function Insert(con,tables,colomns,values){
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

 exports.DeleteRecord= function Delete(con,tables,colomns,values){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DELETE FROM "+tables+" WHERE " +colomns +" =" + values ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
 }