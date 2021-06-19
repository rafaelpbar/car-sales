const connection = require('./connection');

const createUser = async (nome, sobrenome, email, senha) => {
  try {
    const dataBase = await connection();
    const user = await dataBase
      .getTable('usuarios')
      .insert(['nome', 'sobrenome', 'email', 'senha'])
      .values(nome, sobrenome, email, senha)
      .execute();
    return user;
  } catch (err) {
      console.error('creating user', err.message);
  }
};

const findByEmail = async (userEmail) => {
  try {
    const dataBase = await connection();
    const userInfo = await dataBase
      .getTable('usuarios')
      .select(['nome', 'sobrenome', 'email', 'senha'])
      .where('email = :email')
      .bind('email', userEmail)
      .execute()
    return userInfo
      .then((fetch) => fetch.fetchOne())
      .then(([id, nome, sobrenome, email, senha]) => ({
        id,
        nome,
        sobrenome,
        email,
        senha,
      }));
  } catch(err) {
      console.error('finding by email', err.message);
    };
};

const findById = async (userId) => {
  try {
    connect()
      .then((dataBase) =>
        dataBase
          .getTable('usuarios')
          .select(['nome', 'sobrenome', 'email', 'senha'])
          .where('id = :id')
          .bind('id', userId)
          .execute()
      )
      .then((fetch) => fetch.fetchOne())
      .then(([id, nome, sobrenome, email, senha]) => ({
        id,
        nome,
        sobrenome,
        email,
        senha,
      }));
  } catch (err) {
    console.error('finding by email', err.message);
  }
};;

const updateUser = async (id, nome, sobrenome, email, senha) => {
  try {
    const db = await connect();
    await db
      .getTable('usuarios')
      .update()
      .set('nome', nome)
      .set('sobrenome', sobrenome)
      .set('email', email)
      .set('senha', senha)
      .where('id = :id')
      .bind('id', id)
      .execute();
  } catch {
    console.error('Updating user', err.message);
  }
};

module.exports = {
  createUser,
  findByEmail,
  findById,
  updateUser,
};
