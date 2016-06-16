'use strict';

const path = require('path'),
    express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve('build/index.html'));
});

app.get('/app', function (req, res) {
    res.sendFile(path.resolve('build/js/app.bundle.js'));
});


app.listen(3001, function() {
    console.info('Listening on port:', this.address().port);
});
