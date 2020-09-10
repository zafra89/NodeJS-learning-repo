let persona = {
  nombre: "José",
  apellido: "García",
  edad: 45,
  altura: 1.80
}

persona.nombre = "Hulio";
persona.codigoPostal = 28080;

function mayorAltura(alt) {
  if(alt >= persona.altura) {
    return `${persona.nombre} no es más alto de ${alt}`;
  } else {
    return `${persona.nombre} mide más de ${alt}`;
  }
}

console.log(mayorAltura(1.90));
console.log(mayorAltura(1.75));
console.log(persona);