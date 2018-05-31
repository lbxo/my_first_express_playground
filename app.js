const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple'
// ];

app.set ('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/cards', (req,res) => {
    // res.locals.prompt="Who is buried?";
    res.render('card', {prompt: "Who is buried in this tomb"});
});

app.get('/hello', (req,res) => {
    res.render('hello');
});

app.post('/hello', (req,res) => {
    res.render('hello', {name: req.body.username});
    // res.json(req.body);
});

app.listen(3000, () => {
    console.log('The application is running on localhost 3000!');
});