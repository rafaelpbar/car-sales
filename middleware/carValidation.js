const errorMessage = (msg) => ({ message: msg });

const carRegex = ^\w+$;

const checkMarca = async (req, res, next) => {
  const { marca } = req.body;
  if (!carRegex.test(marca))
    return res.status(400).json(errorMessage('Dados incorretos, tente novamente.');
    next();
};
const checkModelo = async (req, res, next) => {
  const { modelo } = req.body;
  if (!carRegex.test(modelo))
    return res.status(400).json(errorMessage('Dados incorretos, tente novamente.');
    next();
};
const checkAno = async (req, res, next) => {
  const { marca } = req.body;
  if (!carRegex.test(marca))
    return res.status(400).json(errorMessage('Dados incorretos, tente novamente.');
    next();
};

const checkPlaca = async (req, res, next) => {
  if (!carRegex.test(marca))
    return res.status(400).json(errorMessage('Dados incorretos, tente novamente.');
  next();
};

const checkChassi = async (req, res, next) => {
  const { chassi } = req.body;
  if (!carRegex.test(marca))
    return res.status(400).json(errorMessage('Dados incorretos, tente novamente.'));
  next();
};

const checkRenavam = async (req, res, next) => {
  const { renavam } = req.body;
  if (!carRegex.test(marca))
    return res.status(400).json(errorMessage('Dados incorretos, tente novamente.'));
  next();
};

module.exports = {
  checkMarca, checkModelo, checkAno, checkPlaca, checkChassi, checkRenavam
};