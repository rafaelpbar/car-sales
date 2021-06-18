const connection = require('./connection');

const getAllCars = async () => {
  try {
    const db = await connection();
    const carTable = await db
      .getTable('carros')
      .select([
        'id',
        'usuario_id',
        'marca',
        'modelo',
        'ano',
        'placa',
        'chassi',
        'renavam',
      ])
      .execute();
    const allCars = carTable.fetchAll();
    return allCars.map(
      ([id, usuario_id, marca, modelo, ano, placa, chassi, renavam]) => ({
        usuario_id,
        marca,
        modelo,
        ano,
        placa,
        chassi,
        renavam,
      })
    );
  } catch (err) {
    console.error('get all cars', err.messsage);
  }
};

module.exports = {
  getAllCars,
};
