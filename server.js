const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.json());

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('App available at localhost:3001');
app.listen(3001);
