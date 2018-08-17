const express = require('express');
const router = express.Router();

const admin = require('./firebase-admin');
const firebase = admin.database().ref();

const firebaseMiddleware = require('express-firebase-middleware');

router.use((req, res, next) => {
    next();
});

router.use('/api', firebaseMiddleware.auth);

router.get('/', (req, res) => {
  firebase.on("value", function(data) {
    res.json(
      (data.val())
    );
    }, function (error) {
      console.log("Error: " + error.code);
    }
  );
});

router.get('/home', (req, res) => {
  firebase.on("value", function(data) {
    res.json(
      (data.val())
    );
    }, function (error) {
      console.log("Error: " + error.code);
    }
  );
});

router.get('/services', (req, res) => {
  firebase.on("value", function(data) {
    res.json(
      (data.val())
    );
    }, function (error) {
      console.log("Error: " + error.code);
    }
  );
});

router.get('/products', (req, res) => {
  firebase.on("value", function(data) {
    res.json(
      (data.val())
    );
    }, function (error) {
      console.log("Error: " + error.code);
    }
  );
});

module.exports = router;