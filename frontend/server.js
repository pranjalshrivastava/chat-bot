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

//app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index.html');
//});

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/chatbot', function (req, res) {
    res.sendFile(path + 'chatbot.html');
});

router.get('/consent', function (req, res) {
    res.sendFile(path + 'consent.html');
});

router.get('/panas', function (req, res) {
    res.sendFile(path + 'panas.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, function () {
    console.log('App listening on port 3000!')
})