var express = require('express');
var router = express.Router();
let userRoute = require('./routes/user');
let todoRoute = require('./routes/todos');
var dateFormat = require('dateformat');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    var now = new Date();
    let n = dateFormat(now, "dd/mm/yyyy h:MM:ss TT");
    console.log(`[${n}][${req.method}] ${req.url}`); // 9/17/2016
    next();
})
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

router.use('/user', userRoute);
router.use('/todo', todoRoute);

module.exports = router