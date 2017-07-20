var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "kamal",
  password: "P@ssw0rd"
});

con.connect(function(err) {
  //if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    //if (err) throw err;
    console.log("Database created");
  });
});