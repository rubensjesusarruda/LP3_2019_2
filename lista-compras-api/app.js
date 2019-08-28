const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasListas = require('./routes/listas');

const app = express();

app.use(logger('dev'));
app.use(cors());
/**
 * permite o nosso app Express sonsiga interpretar dados do front end em formato JSON.
 */
app.use(bodyParser.json());
app.use('/listas',rotasListas);
module.exports = app;