const connection = require('./connection');

const createUser = async (nome, sobrenome, email, senha) => {
  try {
    const db = await connection();
    const user = await db
      .getTable('usuarios')
      .insert(['nome', 'sobrenome', 'email', 'senha'])
      .values(nome, sobrenome, email, senha)
      .execute();
    return user;
  } catch (err) {
    console.error('creating user', err.message);
  }
};

// const getAllUsers = async () => {
//   const db = await connection();
//   const userTable = await db.getTable('usuarios')
//     .select([])
//     .execute();
//   const allUsers = userTable.fetchAll();
//   return allUsers.map(([nome, sobrenome, email, senha]) => ({
//     nome, sobrenome, email, senha,
//   }));
// };

module.exports = {
  createUser,
};
