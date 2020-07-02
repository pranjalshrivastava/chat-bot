var express = require('express');
const app = express();
var path = require('path')
const server = require('http').createServer(app);
var cors = require('cors');
const router = express.Router();
const PORT = 3000;
server.listen(PORT);
console.log(`Server is running on port ${PORT}`);

app.use(cors())
app.use(express.static(path.join(__dirname, 'static')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fs = require('fs');

const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'cloudsql-proxy',
    database: 'chatbot_db',
    password: process.env.DB_PWD,
    port: 5432,
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/consent.html');
});

app.get('/chatbot', (req, res) => {
    res.sendFile(__dirname + '/chatbot.html');
});

app.post('/panas', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    global.uid = req.body.uid;
    client.connect();
    const queryText = 'INSERT INTO users(uid, first_name, last_name) VALUES($1, $2, $3)'
    client.query(queryText, [uid, firstName, lastName], (err, res) => {
        console.log(err, res)
    });
});

app.get('/panas', function(req, res) {
    res.sendFile(__dirname + '/panas.html');
});

app.post('/panas-score', function(req, res) {
    var panasScore = req.body.score;
    const queryText = 'UPDATE users SET panas_score=$1 WHERE uid=$2'
    client.query(queryText, [panasScore, global.uid], (err, res) => {
        console.log(err, res)
        client.end()
    });
})

// app.post('/panas-score', function(req, res) {
//     global.panasscore = req.body;
// })

// app.get('/panas-score', function(req, res) {
//     res.end(JSON.stringify(global.panasscore));
// })