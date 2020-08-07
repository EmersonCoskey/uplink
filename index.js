const express = require('express');
const app = express();
const port = 80;
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/modules', express.static(path.join(__dirname, '/node_modules/gsap')))

app.get('/rcon', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
    console.log('server listening');
});