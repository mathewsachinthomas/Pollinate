var fn = require(“./insert.js”);
const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('timestamp submitted');
});

server.listen(port, hostname, () => {
  console.log(`timestamp submitted`);
  fn()
});
