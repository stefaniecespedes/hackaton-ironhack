const express = require('express');
const router  = express.Router();
const Stores = require('../models/stores');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api', (req, res, next) => {

  Stores.find().then(store => {
    res.send(store)
  }).catch(err => console.log(err));
});

module.exports = router;