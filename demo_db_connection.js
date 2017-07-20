var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "kamal",
  password: "P@ssword"
});

con.connect(function(err) {
  if (error) throw error;
  console.log("Connected!");
  
});