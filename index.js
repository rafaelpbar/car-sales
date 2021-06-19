const express = require('express');

const app = express();

// const PORT = process.env.PORT || 3000;

const userController = require('./controllers/userController');

const carController = require('./controllers/carController');

app.use('/usuarios', userController);

app.use('/carros', carController);

app.listen(4000, () => console.log('Listening on 4000'));
