var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});
app.post('/chat', function(req, res) {
    console.log(req.body.username);
    var username = req.body.username;
    res.render('chat', {name: username});
});

var server = app.listen(3000, function() {
    console.log('listening on port 3000');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket, name) {
    io.emit('user_logon', name);
    console.log('Socket power');
    console.log(socket.id);
    socket.on('send_message', function(data) {
        io.emit('post_message', data);
    })
    socket.on('disconnect', function() {
        console.log('logged off');
        io.emit('user_logoff', name);
    })
});
