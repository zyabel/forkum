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

##### File .env

You need to download your Firebase Service Account json file.
Put the file at project root.

>warning Always make sure the JSON file is git-ignored!

Change the dummy FIREBASE_DATABASE_URL value with your Firebase project databaseURL, you can find it on your Firebase Console

File `.env` contains next data:
```
APP_PORT=8000
APP_HOST=localhost
APP_DEBUG=true

FIREBASE_DATABASE_URL=https://<project-name>.firebaseio.com
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=../service-account-key.json
```
