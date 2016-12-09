var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + "/views");

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/users', function(req, res){
  console.log("POST DATA", req.body)
  var user = {
    name: req.body.name,
    dojo: req.body.dojo,
    language: req.body.language,
    comments: req.body.comments
  }
  console.log(user);
  res.render('result', {user: user})
});

app.listen(8000, function(){
  console.log('listening on port 8000');
})
