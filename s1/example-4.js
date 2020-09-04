const fs = require('fs');

fs.readFile('people.json', (err, data) => {
  if (err) {
    console.log('There was an error reading the file!');
  } else {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
  }
});