const express = require("express");
const request = require('request');
let morgan = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express();
const port = 3000;

const axios = require('axios');

// app.use(express.static('dist'));
app.use('/', express.static('dist'));

app.use(cors());

app.use(bodyParser.json());

app.get('/oce/*', (req, res) => {
    handleRequest(req, res);
});

app.post('/oce/*', (req, res) => {
    console.log('post -> ', req.url);
    handleRequest(req, res);
})

app.get('/care-mock/*', (req, res) => {
    console.log('get -> ', req.url);
    handleRequest(req, res);
})

app.post('/care-mock/*', (req, res) => {
    handleRequest(req, res);
})

const handleRequest = (req, res) => {
    const proxyURL = `http://localhost:9999/care-mock${req.url}`;
    console.log(proxyURL);
    const options = {
        method: req.method,
        headers: req.headers,
        url: proxyURL,
      };

    if (req.method === 'POST') {
        options['data'] = req.body;
    }

    options.headers['mocked-scn'] = 100;
    options.headers['if-none-match'] = 'W/"88-g3ZxG5auftSLwL8Omjg7DY6X6x8"';

    axios(options)
    .then(function (response) {
        res.json(response.data)
    }).catch((error) => {
        res.status(500);
        res.send('Error in request.');

    });
};

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
