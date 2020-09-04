const express = require('express');

const PORT = 3000;
const server = express();
const routerUpgrade = express.Router();
const routerMovies = express.Router();

const students = ['Ariadna', 'Christian', 'David', 'Desiree', 'Diyana', 'Eduardo', 'Jaime', 'Maria', 'Mauricio', 'Robinson', 'Samuel', 'Sara', 'Jose'];

routerUpgrade.get('/', (req, res) => {
  res.send('Welcome to Upgrade Hub!');
});

routerUpgrade.get('/:student', (req, res) => {
  const student = req.params.student;
  const hasStudent = students.includes(student);
  if (hasStudent) {
    res.send(`Welcome to UpgradeHub ${student}!!!`);
  } else {
    res.status(404).send('We could not find the student you are looking for!');
  }
});

const movies = ['Harry Potter', 'Titanic', 'Back to the Future', 'The Godfather'];

routerMovies.get('/', (req, res) => {
  res.send(movies);
});

routerMovies.get('/:name', (req, res) => {
  const name = req.params.name;
  const hasMovie = movies.includes(name);

  if (hasMovie) {
    res.send(`We have a movie with the name ${name}.`);
  } else {
    res.status(404).send('We could not find the movie you are looking for!');
  }
});

server.use('/movies', routerMovies);
server.use('/upgrade', routerUpgrade);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});