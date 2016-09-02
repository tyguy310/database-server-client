const express = require('express');
const router = express.Router();
const data = require('../lib/data');


const indexController = require('../controllers/index');

const db = require('../db/connection');

router.get('/contacts', getAll);
router.get('/contacts/:id', getOne);
router.get('/', getStartPage);

function getStartPage (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
};

function  getAll (req, res, next) {
  db.many('SELECT * FROM contacts')
  .then((contacts) => {
    res.render('contacts', { contacts })
  })
  .catch( err => console.log(err))
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
