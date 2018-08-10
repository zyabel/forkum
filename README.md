This project was bootstrapped with Create React App.







##### Error:
>Cross-Origin Read Blocking (CORB) blocked cross-origin response MY URL with MIME type application/json. See >https://www.chromestatus.com/feature/5629709824032768 for more details.

[Original issue link](https://stackoverflow.com/questions/50873764/cross-origin-read-blocking-corb)

First you need to install cors by using below command :

> npm install cors --save

Now add the following code to your app starting file like ( app.js or server.js)
```
var express = require('express');
var app = express();

var cors = require('cors');
var bodyParser = require('body-parser');

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

require('./router/index')(app);
```