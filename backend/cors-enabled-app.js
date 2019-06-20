const express = require("express");
const app = express();
const port = 3000;
let morgan = require('morgan');

function generateData() {
  let content = [];
  for (var i = 0; i < 5; i++) {
    content.push({
      title: `Title -> ${i}`,
      content: `Content -> ${i}`,
      created: new Date()
    });
  }
  return content;
}

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin", "*",
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


const allData = generateData();

app.use(morgan('common'));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/todo", (req, res) => res.json({ allData }));

app.get("/api/todo", (req, res) => res.json(allData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
