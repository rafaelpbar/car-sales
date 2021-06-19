const connection = require('./connection');

const toGetAllCars = async () => {
  const dataBase = await connection();
  const table = await dataBase.getTable('carros');
  const results = await table.select([]).execute();
  const cars = await results.fetchAll();
  return cars.map(
    ([id, usuario_id, marca, modelo, ano, placa, chassi, renavam]) => ({
      id,
      usuario_id,
      marca,
      modelo,
      ano,
      placa,
      chassi,
      renavam,
    })
  );
};

const toGetByMarca = async (query) => {
  const dataBase = await connect();
  const fetch = await dataBase
    .getTable('carros')
    .select(['id', 'usuario_id', 'marca', 'modelo', 'ano', 'placa', 'chassi', 'renavam'])
    .where('marca LIKE :marca')
    .bind('marca', `%${query}%`)
    .execute();

  const recipes = fetch.fetchAll();

  return recipes.map(([id, uId, user, name, ingredients, instructions]) => ({
    id,
    uId,
    user,
    name,
    ingredients,
    instructions,
  }));
};

const toRegisterCar = async (
  idUsuario,
  marca,
  modelo,
  ano,
  placa,
  chassi,
  renavam
) => {
  const dataBase = await connection();
  const table = await dataBase
    .getTable('carros')
    .insert([
      'usuario_id',
      'marca',
      'modelo',
      'ano',
      'placa',
      'chassi',
      'renavam',
    ])
    .values(idUsuario, marca, modelo, ano, placa, chassi, renavam)
    .execute();
  return table;
};

const toUpdateCar = async (id, marca, modelo, ano, placa, chassi, renavam) => {
  const dataBase = await connect();

  await dataBase
    .getTable('carros')
    .update()
    .set('marca', marca)
    .set('modelo', modelo)
    .set('ano', ano)
    .set('placa', placa)
    .set('chassi', chassi)
    .set('renavam', renavam)
    .where('id = :id')
    .bind('id', id)
    .execute();
};

const toDeleteCar = async (id) => {
  const dataBase = await connect();
  const table = await dataBase
    .getTable('carros')
    .delete()
    .where('id = :id')
    .bind('id', id)
    .execute();
  return table;
};

module.exports = {
  toGetAllCars,
  toGetByMarca,
  toRegisterCar,
  toUpdateCar,
  toDeleteCar
};
