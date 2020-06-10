var express= require('express');
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

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/consent.html');
});

app.get('/chatbot', (req, res) => {
    res.sendFile(__dirname + '/chatbot.html');
});

app.get('/panas', function (req, res) {
    res.sendFile(__dirname + '/panas.html');
});