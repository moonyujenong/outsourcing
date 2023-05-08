var http = require("http");

var hostname = "localhost";
var port = 5500;

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, world!</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
