const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 3360,
  user: 'root',
  password: 'root',
  database: 'cashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = connection;