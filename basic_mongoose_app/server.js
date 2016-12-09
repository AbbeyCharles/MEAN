var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  //retrieve db users here
  User.find({}, function(err, users) {
    var user = {
      name: req.body.name,
      age: req.body.age
    }
    if(err) {
      console.log('Sorry, it looks like there was an error.');
      res.redirect('/');
    } else{
      console.log('This one worked!');
      res.render('users', {user: user})
    }
  })
  res.render('index');
})

app.post('/users', function(req, res){
  console.log("POST DATA", req.body);
  //add users from req.body to db
  var user = new User({name: req.body.name, age: req.body.age});
  console.log(user);
  user.save(function(err){
    if(err) {
      console.log('There was a problem');
    } else{
      console.log("You've successfully added a user!");
      res.redirect('/users');
    }
  })
})

app.listen(8000, function(){
  console.log('listening on port 8000');
})
