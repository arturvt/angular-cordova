const express = require('express')
const router = express.Router();
const todos = require('../json/todos');

// all todos
router.get('/', function (req, res) {
    let queries = req.query;
    let keys = Object.keys(queries);
    if (keys.length > 0) {
        let resp = keys.reduce((acc, val) => {
            if (val === 'completed') {
                const querieVal = queries[val].toLowerCase() === 'true'? true:false;
                acc = acc.filter(t => Boolean(t[val]) == querieVal);
            } else {
                acc = acc.filter(t => t[val] == queries[val]);
            }
            return acc;
        }, todos);
        console.log(queries)
        res.json(resp);
    } else {
        console.log(`No queries`);
        res.json(todos);
    }
});

// todo by id
router.get('/:id', function (req, res) {
    res.json(todos.filter(u => u.id === +req.params.id));
});

module.exports = router