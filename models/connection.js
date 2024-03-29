const mysqlx = require('@mysql/xdevapi');

let connect;

const config = {
  host: 'localhost',
  user: 'root',
  password: '27Rafa**',
  database: 'carsales',
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

const connection = async () => {
  if (connect) return Promise.resolve(connect);
  try {
    const session = await mysqlx.getSession(config);
    connect = await session.getSchema('carsales');
    return connect;
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

module.exports = connection;

/* const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '27Rafa**',
  database: 'carsales',
}); 

module.exports = connection; */