const http = require("http");
const url = require('url')
const urlValue = 'https://t5teyi.sse.codesandbox.io/?name=Viktor';
const today = new Date();

//create a server
const requestListener = function (req, res) {
  var parseUrl = url.parse(urlValue, true);
  name = parseUrl.query["name"];
  
  var day = today.toLocaleDateString('en-US', {weekday:'long',});

  res.writeHead(200);
  res.end("Hello " + name + ", today is " + day);
};

const server = http.createServer(requestListener);
server.listen(8080);
