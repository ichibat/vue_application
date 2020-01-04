const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Good morning!');
});

app.listen(port, () => {
  console.log(`port started on port${port}!`);
});




