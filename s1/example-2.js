const fileSystem = require('fs'); //nos traemos el módulo file system

const people = [
  {
		firstName: 'Juan',
		lastName: 'Gonzalez'
	},
  {
		firstName: 'María',
		lastName: 'Rodríguez'
	},
  {
		firstName: 'Jose Luis',
		lastName: 'García'
	}
];

const data = JSON.stringify(people);

fileSystem.writeFile('people.json', data, () => {
	console.log('File created!');
})