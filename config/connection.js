const mysql = require('mysql');
//load enviroment variables
require('dotenv').config();


//create connection to Database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  //use values stored in .env file
  user: process.env.DB_PW,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
});

//export our connection
module.exports = connection;