const express = require('express');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const server = express();
const path = require('path');
var turn;
const PORT = 3000;
const routerTictactoe = express.Router();

routerTictactoe.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

const handleTurns = () => {
  const realTurn = turn == "O"? "O" : "X";
  turn = realTurn;
  htmlTurn = realTurn
  console.log(htmlTurn);
}
handleTurns();


server.use('/', routerTictactoe);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});