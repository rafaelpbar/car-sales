const { Router } = require('express');
const carModel = require('../models/carModel');

const userRoute = Router();

userRoute.get('/', async (_req, res) => {
  const carTable = await carModel.toGetAllCars();
  if (!carTable) return res.status(400).json('Algo deu errado!');
  res.status(201).json(carTable);
});

userRoute.get('/:q', async (_req, res) => {
  const carFromQuery = await carModel.getByQuery(req.query.q);
  if (!carFromQuery) return res.status(400).json('Algo deu errado!');
  res.status(201).json({ carro: carFromQuery || [] });
});

userRoute.post('/', async (req, res) => {
  const carForm = req.body;
  const carTable = await carModel.toRegisterCar(carForm);
  if (!carTable) return res.status(400).json('Algo deu errado!');
  res.status(201).json(carTable);
});

module.exports = userRoute;
