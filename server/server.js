require('dotenv').config()

const admin = require('./src/firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.APP_PORT || 8000;
const host = process.env.APP_HOST || '127.0.0.1';

const router = require('./src/routes');

app.use('/', router);
app.listen(port, host);


console.log(`Server listening at ${host}:${port}`);
