const express = require('express');
const Pet = require('./models/Pet')
// Requerimos el archivo de configuración de nuestra DB
require('./db.js');

const PORT = 3000;
const server = express();

const routerPets = express.Router();

routerPets.get('/', (req, res) => {
  res.send("Welcome to Pets database.")
})

routerPets.get('/create', (req, res) => {
  const pet = new Pet()
  pet.name = "Pepe";
  pet.age = 9;
  pet.species = "Perro";

  pet.save()
  .then((newPet) => {
    console.log(newPet);
    res.json(newPet);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send(error);
  })
})

routerPets.get('/read', (req, res) => {
  Pet.find({})
  .then((pets) => {
    res.send(pets);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send(error);
  })
})

routerPets.get('/read/name/:name', (req, res) => {
  const name = req.params.name;
  Pet.find({name: name}, {createdAt: 0, updatedAt: 0, __v: 0, _id: 0})
  .then((pets) => {
    res.send(pets);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send(error);
  })
})

routerPets.get('/read/:id', (req, res) => {
  const id = req.params.id;
  Pet.findById(id, {createdAt: 0, updatedAt: 0, __v: 0})
  .then((pet) => {
    res.send(pet);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send(error);
  })
})

routerPets.get('/read/filter/:age/:species', (req, res) => {
  const age = req.params.age;
  const species = req.params.species;
  Pet.find({age: {$gte: age}, species: species}, {createdAt: 0, updatedAt: 0, __v: 0, _id: 0})
  .then((pets) => {
    res.send(pets);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send(error);
  })
})

server.use('/', routerPets);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
