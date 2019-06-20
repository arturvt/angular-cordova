const express = require('express')
const router = express.Router();
const users = require('../json/users');

// all users
router.get('/', function (req, res) {
    let queries = req.query;
    console.log(queries);
    res.json(users);
});

// user by id
router.get('/:id', function (req, res) {
    res.json(users.filter(u => u.id === +req.params.id));
});

module.exports = router