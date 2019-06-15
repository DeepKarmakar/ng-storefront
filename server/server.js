const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;
const api = require('./routes/api')

const app = express();  //instaence of express
app.use(cors());


app.use(bodyParser.json()) //spcify body perser to handle json data

app.use('/api', api)
// tets get request
app.get('/', function (req, res) {
    res.send('hello from server');
})

// listn request from port
app.listen(PORT, function () {
    console.log("server running");
})