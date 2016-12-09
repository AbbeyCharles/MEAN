var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
  console.log('client request URL: ', request.url);

  if(request.url === '/cars') {
    fs.readFile('views/cars.html', 'utf8', function(errors, contents){
      console.log(errors);
      response.writeHead(200, {'Content-Type': 'text/html'});
      console.log(errors);
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === "/stylesheets/style.css") {
      fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
        console.log(errors);
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
      });
    }

  else if(request.url === "/images/911_targa.jpg"){
    fs.readFile('./images/911_targa.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === "/images/2002_bmw.jpg"){
    fs.readFile('./images/2002_bmw.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === "/images/squareback.jpg"){
    fs.readFile('./images/squareback.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === "/images/cornish_rex.jpg"){
    fs.readFile('./images/cornish_rex.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === "/images/devon_rex.jpg"){
    fs.readFile('./images/devon_rex.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === "/images/russian_blue.jpg"){
    fs.readFile('./images/russian_blue.jpeg', function(errors, contents){
      console.log(errors);
      response.writeHead(200, {'Content-Type': 'image/jpeg'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === '/cats') {
    fs.readFile('views/cats.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === '/cars/new') {
    fs.readFile('views/new.html', 'utf8', function(errors, contents){
      console.log(errors);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }

  else{
    response.writeHead(404);
    response.end('File not found!')
  }

});

server.listen(7077);

console.log('Running in localhost at port 7077')
