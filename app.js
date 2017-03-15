var express = require('express');
var app = express();

app.use(express.static('public'));

// ROUTES

// Homepage
app.get('/', function(req, res) {
    res.render('home.ejs');
});

// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started');
});