const express = require('express');
const cors = require('cors');
const { fetch } = require('./data');

const app = express();
const PORT = 3000;

const delay = fn => setTimeout(fn, 500);

app.get('/:chart', cors(), (req, res) =>
  delay(() => res.json(fetch(req.params.chart)))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
