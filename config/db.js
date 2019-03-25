const mysql = require('mysql');

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: process.env.DB_POOL || 10,
  database: process.env.DB_NAME,
  port:3306
});

pool.getConnection(function (err, connection) {
  if (err) console.log('Error while connecting to databse', err);
  else {
    console.log('Database connected');
    global.connection = connection;
  }
});