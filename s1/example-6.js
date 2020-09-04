const fs = require('fs');
const http = require('http');

function requestHandler(req, res) {
  fs.readFile('people.json', (err, data) => {
    if (err) {
      console.log('There was an error reading the file!');
    } else {
      if (req.url === '/hello') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(data);
      } else {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(404);
        res.end('Incorrect path');
      }
    }
  });
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});