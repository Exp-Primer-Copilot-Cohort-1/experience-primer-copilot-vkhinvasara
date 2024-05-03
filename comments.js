//create a web server
const express = require('express');
const app = express();

//use body parser
app.use(express.json());

//create an array of comments
const comments = [
    {message: 'Hello'},
    {message: 'Hi'}
];

//create a get request
app.get('/comments', (req, res) => {
    res.send(comments);
});

//create a post request
app.post('/comments', (req, res) => {
    const comment = {message: req.body.message};
    comments.push(comment);
    res.send(comment);
});

//create a put request
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
        return;
    }

    comment.message = req.body.message;
    res.send(comment);
});

//create a delete request
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
        return;
    }

    const index = comments.indexOf(comment);
    comments.splice(index, 1);

    res.send(comment);
});

//listen to a port
app.listen(3000, () => console.log('Listening on port 3000...'));