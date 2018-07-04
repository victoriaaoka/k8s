const app = require('express')();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).json('Hey Victoria Aoka, welcome to root!!');
});

app.get('/foo', (req, res) => {
  res.status(200).json('welcome to foo, Vicky :) :) :)');
});

app.get('/bar', (req, res) => {
  res.status(200).json('welcome to bar, Vicky :) :) :)');
});

app.listen(port, () => console.log('Magic happens on port', port));

module.exports.app = app;