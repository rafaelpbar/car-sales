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

module.exports = async () => {
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