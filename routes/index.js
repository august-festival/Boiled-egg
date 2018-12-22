const express = require("express");
const path = require("path");
const model = require("../models/");
console.log('router', process.env.NODE_ENV);

const router = express.Router();

router.get('/', function (req, res, next) {
      res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;
