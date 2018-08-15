require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

const port = process.env.APP_PORT || 8000;
const host = process.env.APP_HOST || '127.0.0.1';

const router = require('./src/routes');

app.use('/', router);
app.use('/services', router);
app.listen(port, host);


console.log(`Server listening at ${host}:${port}`);