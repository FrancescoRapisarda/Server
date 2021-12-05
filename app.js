var express = require('express');
const path = require('path');

var app = express();

app.get('/', function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get('/page1', function(req, res) {
    res.send("<h1>Benvenuto/a, questa è Page1!</h1>");
});

app.get('/homepage', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8000, function() {
    console.log("Server attivo sulla porta 8000");
});