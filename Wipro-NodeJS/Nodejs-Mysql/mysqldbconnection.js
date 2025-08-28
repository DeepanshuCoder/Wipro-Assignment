// import mysql package
const mysql = require("mysql2");

// create connection object
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",      // mysql username
  password: "Deepu@2003",      // mysql password
  database: "stock_market"
});

// connect to mysql
connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// export connection
module.exports = connection;
