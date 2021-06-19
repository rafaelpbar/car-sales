const { Router } = require('express');
const carModel = require('../models/carModel');

const userRoute = Router();

userRoute.get('/', async (_req, res) => {
  const carTable = await carModel.toGetAllCars();
  if (!carTable) return res.status(400).json('Algo deu errado!');
  res.status(201).json(carTable);
});

userRoute.get('/:marca', async (_req, res) => {
  const carTable = await carModel.toGetByMarca();
  if (!carTable) return res.status(400).json('Algo deu errado!');
  res.status(201).json(carTable);
});

userRoute.post('/', async (req, res) => {
  
  const carForm = req.body;
  const carTable = await carModel.toRegisterCar(carForm);
  if (!carTable) return res.status(400).json('Algo deu errado!');
  res.status(201).json(carTable);
});

userRoute.get('/', async (_req, res) => {
  const carTable = await carModel.toGetAllCars();
  if (!carTable) return res.status(400).json('Algo deu errado!');
  res.status(201).json(carTable);
});

module.exports = userRoute;
