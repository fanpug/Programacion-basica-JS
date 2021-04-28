//Programa 37. Cargar las notas de los alumnos de un colegio en función del número de cursos y del número de alumnos por curso. 
const prompt = require('prompt-sync')();

let alumnos = new Object();
let curso = new Object();
let calificaciones = new Object();

//let array=[alumnos,curso,calificaciones];

alumnos.numero = 3;
alumnos.n1 = "juan";
alumnos.n2 = "pepe";
alumnos.n3 = "luis";
curso.numero = 3;
curso.n1 = "español";
curso.n2 = "matematicas";
curso.n3 = "ingles";


let nota = prompt("nota del curso " + curso.n1 + " de " + alumnos.n1);
//nota=Numbers(nota);
calificaciones.n1 = nota;
nota = prompt("nota del curso " + curso.n2 + " de " + alumnos.n1);
//nota=Numbers(nota);
calificaciones.n2 = nota;
nota = prompt("nota del curso " + curso.n3 + " de " + alumnos.n1);
//nota=Numbers(nota);
calificaciones.n3 = nota;

nota = prompt("nota del curso " + curso.n1 + " de " + alumnos.n2);
//nota=Numbers(nota);
calificaciones.n4 = nota;
nota = prompt("nota del curso " + curso.n2 + " de " + alumnos.n2);
//nota=Numbers(nota);
calificaciones.n5 = nota;
nota = prompt("nota del curso " + curso.n3 + " de " + alumnos.n2);
//nota=Numbers(nota);
calificaciones.n6 = nota;
