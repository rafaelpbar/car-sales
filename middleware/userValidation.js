const userModel = require('../models/userModel');

const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const errorMessage = (message) => ({ message });

const validateToCreate = async (req, res, next) => {
  const { nome, sobrenome, email, senha } = req.body;
  const emailExists = await userModel.findByEmail(email);
  if (!nome || !sobrenome || !email || !senha)
    return res.status(400).json(errorMessage('Dados inválidos, tente novamente.'));
  if (!emailRegex.test(email))
    return res
      .status(400)
      .json(errorMessage('Dados inválidos, tente novamente.'));
  if (emailExists !== null)
    return res.status(409).json(errorMessage('Já existe este email no registro!'));
  next();
};

const validateToLog = async (req, res, next) => {
  const { email, senha } = req.body;
  const user = await userModel.findByEmail(email);
  if (!email || !senha)
    return res.status(401).json(errorMessage('Todos os campos precisam ser preenchidos'));
  if (!user)
    return res.status(401).json(errorMessage('Usuário e senha incorretos'));
  if (senha !== user.senha)
    return res.status(401).json(errorMessage('Usuário e senha incorretos'));

  next();
};

module.exports = { validateToCreate, validateToLog };


