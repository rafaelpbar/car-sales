const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rfl@localhost',
  password: '',
  database: 'carSales',
});

module.exports = connection;
