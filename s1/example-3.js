const http = require('http');

function requestHandler(request, response) {
  let nombre = "José Luis";
  if (request.url === '/node') {
    response.setHeader('Content-Type', 'text/plain');
    response.writeHead(200);
    response.end(`¡Enhorabuena ${nombre}, el servidor funciona correctamente!`);
  }
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});