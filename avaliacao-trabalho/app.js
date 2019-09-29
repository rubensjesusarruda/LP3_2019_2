const express = require('express');
const sequelize = require(sequelize);
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasTrabalhos = require('./routes/trabalho');
require('./databases/db');

const app = express();

app.use(logger('dev'));
//libera acesso aplicativos internet
app.use(cors());

/**
 * Permite que o nosso app Express
 * consiga interpretar dados do frontend
 * em formato JSON.
 */
app.use(bodyParser.json());

/**
 * Registra as rotas relacionadas
 * a listas
 */
app.use('/trabalhos', rotasTrabalhos);


module.exports = app;
