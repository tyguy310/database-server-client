const express = require('express');
const router = express.Router();
const data = require('../lib/data');

const indexController = require('../controllers/index');

router.get('/contacts', getAll);
router.get('/contacts/:id', getOne);

function  getAll (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Contact List';
  const contacts = data.all;
  res.render('contacts', renderObject);
  res.render('contacts', { contacts });
}

function  getOne (req, res, next) {
  const contactID = req.params.id;
  const renderObject = {};

  renderObject.title = 'Contact List';
  renderObject.contact = data.all[contactID];

  if (contactID < data.all.length) {
    res.render('contacts', renderObject);
  } else {
    res.send('No Contact');
  }

}

module.exports = router;
