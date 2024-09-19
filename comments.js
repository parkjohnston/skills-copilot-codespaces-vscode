//create web server
const express = require('express');
const app = express();

//add a comment
app.post('/comments', (req, res) => {
    res.send('You have added a new comment');
});

//delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send(`You have deleted comment ${req.params.id}`);
});

//edit a comment
app.patch('/comments/:id', (req, res) => {
    res.send(`You have edited comment ${req.params.id}`);
});

//get all comments
app.get('/comments', (req, res) => {
    res.send('You have requested all comments');
});

//get a comment
app.get('/comments/:id', (req, res) => {
    res.send(`You have requested comment ${req.params.id}`);
});

//start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

