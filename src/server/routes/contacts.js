const express = require('express');
const router = express.Router();

// const indexController = require('../controllers/index');

router.get('/contacts', (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Contact List';
  res.render('contacts', renderObject);
});

module.exports = router;
