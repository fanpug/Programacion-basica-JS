//Programa 34. Usando el segundo ejemplo, hacer un programa que busque una nota en la lista.

const prompt = require('prompt-sync')();

let asignaturas = [
  "español",
  "matematicas",
  "ingles",
  "ciencias",
  "arte",
  "deportes",
  "fisica",
  "calculo",
  "musica",
  "orientacion"
];
let califas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let sumacalif = 0;

for (let i = 0; i < 10; i++) {
  console.log("Ingrese calificacion para " + asignaturas[i]);
  let calif = prompt();
  calif = Number(calif);
  califas[i] = calif;
  sumacalif = sumacalif + calif;
}

let buscar = prompt("Ingrese nota a buscar: ");
buscar = Number(buscar);

for (let i = 0; i < 10; i++) {
  if (buscar == califas[i]) {
    console.log("Califa encontrada, materia de " + asignaturas[i])
  }
}
