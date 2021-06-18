const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const userController = require('./controllers/userController');

app.get('/', (_req, res) => {
  return res.render('home');
});

app.use('/users', userController);


app.listen(PORT, () => console.log('Listening on 3000'));
