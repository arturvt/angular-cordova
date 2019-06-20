var express = require('express')
var router = express.Router()
let users = require('../json/users');

// all users
router.get('/', function (req, res) {
  res.json(users)
});

// user by id
router.get('/:id', function (req, res) {
    res.json(users.filter(u => u.id === +req.params.id));
});

module.exports = router