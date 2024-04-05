const express = require('express');
var bodyParser = require('body-parser');
const User = require('./module/user');
const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log("running....");
});
