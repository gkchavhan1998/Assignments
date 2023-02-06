//loading mysql package
const mysql = require("mysql");

function connect() {
  //creating connection to the database ( config. details )
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "users",
    port: 3306,
  });

  //open connection
  connection.connect();

  //return opened connection
  return connection;
}

//exporting functions
module.exports = { connect: connect };
