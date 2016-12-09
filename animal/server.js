var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  comment: String
});
mongoose.model('Dog', UserSchema);
var Dog = mongoose.model('Dog');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function (req, res){
  Dog.find({}, function(err, dogs){
    console.log(dogs);
    if (err){
      console.log("Not good, we've got an error.");
      res.redirect('/');
    }
    else{
      console.log("This one worked!");
      res.render('index', {dogs: dogs});
    }
  });
});

app.post('/dogs', function(req, res){
  console.log("POST DATA", req.body)
  var dog = new Dog({name: req.body.name, age: req.body.age, comment: req.body.comment});
  console.log(dog);
  dog.save(function(err){
    if(err){
      console.log('Oops! Looks like there was a problem', err);
    }
    res.redirect('/')
  });
  //code to add dogs to db goes here, reroutes to index, displaying all dogs
});

app.get('/new', function(req,res){
  //code goes here
  res.render('new');
})

app.get('/edit/:id', function(req, res){
  console.log("These are the req params", req.params);
  //code to get access to the db goes here
  Dog.find({_id: req.params.id}, function(err, dogsID){
    console.log("This is the dogsID", dogsID);
    if(err){ console.log("Looks like we have issues, sort of like your buddy's girlfriend.", err); }
    res.render('edit', { dogs: dogsID });
  });
});

app.get('/:id', function(req, res){
  Dog.find({_id: req.params.id}, function(err, dogsID){
    if(err){console.log("This is an error:", err)}
    res.render('user', { dogs: dogsID });
  });
});

app.post('/:id', function(req, res){
  Dog.update({_id: req.params.id}, req.body, function(err, response){
    if(err){console.log("Ruh roh... we've got a problem:", err); }
    res.redirect('/');
  });
});

app.post('/delete/:id', function(req, res){
  Dog.remove({_id: req.params.id}, function(err, result){
    if(err){console.log("We've got another goddamn error over here:", err); }
    res.redirect('/');
  });
});

app.listen(8000, function(){
  console.log('listening on port 8000')
});
