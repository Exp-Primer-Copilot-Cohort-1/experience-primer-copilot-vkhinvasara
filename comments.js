//Create a basic web server using express
const express = require('express');
const app = express();
const port = 3000;

//app.use(express.static('public'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/comments', (req, res) => {
  res.send('Comments will go here');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});