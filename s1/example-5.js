const http = require('http');

function requestHandler(req, res) {
  if (req.url === '/upgrade') {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('Bienvenido a Upgrade Hub!');
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(404);
    res.end('Ruta incorrecta');
  }
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});