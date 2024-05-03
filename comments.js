//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
//fake data
let comments = [
  {id: 1, author: 'John', content: 'A new course is coming!'},
  {id: 2, author: 'Alice', content: 'Good luck!'},
  {id: 3, author: 'Kate', content: 'Great!'}
];
//get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});
//get a comment by id
app.get('/comments/:id', (req, res) => {
    let id = req.params.id;
    let comment = comments.find(comment => comment.id === parseInt(id));
    if (comment) {
        res.send(comment);
    } else {
        res.send('Comment not found');
    }
});
//add a new comment
app.post('/comments', (req, res) => {
    let comment = {
        id: comments.length + 1,
    };
    comments.push(comment);
    res.send(comment);
});
    