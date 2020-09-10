const express = require('express');

const PORT = 3000;
const server = express();
const routerUpgrade = express.Router();
const routerMovies = express.Router();
const students = ['Ariadna', 'Christian', 'David', 'Desiree', 'Diyana', 'Eduardo', 'Jaime', 'Maria', 'Mauricio', 'Robinson', 'Samuel', 'Sara', 'Jose'];
const movies = ['Harry Potter', 'Titanic', 'Back to the Future', 'The Godfather'];

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

routerMovies.get('/', (req, res) => {
  res.send(movies);
});

routerMovies.get('/peli/:name', (req, res) => {
  const name = req.params.name;
  const hasMovie = movies.includes(name);


  if (hasMovie) {
    res.send(`We have a movie with the name ${name} in our array of movies.`);
  } else {
    res.status(404).send('We could not find the movie you are looking for!');
  }
});


routerMovies.get('/consulta', (req, res) => {  //http://localhost:3000/movies/consulta?query=Matrix
  const name = req.query.query;
  const hasMovie = movies.includes(name);


  if (hasMovie) {
    res.send(`Tengo una peli llamada ${name} en mi array de películas.`);
  } else {
    res.status(404).send(`No tenemos la peli de ${name} en mi array de películas.`);
  }
});


server.use('/movies', routerMovies);
server.use('/upgrade', routerUpgrade);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});