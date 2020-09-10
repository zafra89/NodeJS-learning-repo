const express = require('express');
const fs = require('fs');

const PORT = 3000;
const server = express();
const routerAlbums = express.Router();

const readAlbums = (callback) => {
  fs.readFile("albums.json", (error, readData) => {
    if (error) {
      callback(readData);
    }
    else {
      callback(JSON.parse(readData));
    }
  })
}

routerAlbums.get('/', (req, res) => {
  res.send('Welcome to my albums page.');
});

routerAlbums.get('/albums', (req, res) => {
  readAlbums((albums) => {
    res.send(albums)
  })
});

routerAlbums.get('/albums/:id', (req, res) => { //http://localhost:3000/albums/7
  const id = req.params.id;
  readAlbums((albums) => {
    const index = albums.findIndex((element) => element.id === parseInt(id));
    const isAlbumInList = index === -1 ? "The album doesn't exist in our list." : `${albums[index].name} is part of our albums list.`;
    res.send(isAlbumInList)
  })
});

routerAlbums.get('/search', (req, res) => {  //http://localhost:3000/search?id=7
  const id = req.query.id;
  readAlbums((albums) => {
    const index = albums.findIndex((element) => element.id === parseInt(id))
    const isAlbumInList = index === -1 ? "The album doesn't exist in our list." : `${albums[index].name} is part of our albums list.`
    res.send(isAlbumInList)
  })
});

server.use('/', routerAlbums);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});