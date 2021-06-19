const { Router } = require('express');
const userModel = require('../models/userModel');

const userRoute = Router();

userRoute.post('/', async (req, res) => {
  const user = await userModel.createUser(req.body);
  if (user.err) return res.status(400).json('Algo deu errado!');
  res.status(201).json(user);
});

userRoute.get('/', async (req, res) => {
  const email = req.query;
  const user = await userModel.getUserMail(email);
  if (user.err) return res.status(400).json('Não achei!');
  res.status(201).json({'user': user});
})

module.exports = userRoute;
