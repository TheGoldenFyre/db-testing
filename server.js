var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.2.35",
  user: "crypto",
  password: "CryptoStonks"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});