class Animal {
  constructor(especie, sonido) {
    //Uso del this
    this.especie = especie;
    this.sonido = sonido;
  }

  emitirSonido() {
    console.log("El " + this.especie + " hace " + this.sonido);
  }

  correr() {
    console.log("Voy corriendo detras de la comida");
  }
}

class Perro extends Animal {
  constructor() {
    super("Perro", "Gua");
  }

  emitirSonido() {
    console.log("EYYYYY : El " + this.especie + " hace " + this.sonido);
  }

  correr() {
    console.log("Voy corriendo detras de la pelota");
  }
}

class Gato extends Animal {
  constructor(sonido) {
    super("Gato", sonido);
  }

  emitirSonido() {
    console.log("Miau Miau: El " + this.especie + " hace " + this.sonido);
  }

  saltar() {
    console.log("Voy saltando detras de la rata porque soy un gato");
  }
}

let miPerro = new Animal("Perro", "Guau!");
let miGato = new Animal("Gato", "Miau!");

let superPerro = new Perro();
let superGato = new Gato("GUUUUUUUAU!");

//console.log(miPerro.especie);

//miPerro.emitirSonido(); // El Perro hace Guau!
//miGato.emitirSonido(); // El Gato hace Miau!

superPerro.emitirSonido();
superPerro.correr();

superGato.emitirSonido();
superGato.saltar();
superGato.correr();