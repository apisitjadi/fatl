var http = require('http');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});

  //res.end('Hello World!');

  request('https://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });

}).listen(8080);
