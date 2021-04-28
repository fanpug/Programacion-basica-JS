//Programa 33. Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene en y calcule e imprima su media.

let ask = ['Matematicas: ', 'Algebra: ', 'Ingles: ',
  'Ingles Avanzado: ', 'Geografia: ', 'Quimica: ', 'Biologia: ', 'Artes: ',
  'Quimica 2: ', 'Educacion Fisica: '
];
let calificaciones = [];
let sumaCalif;

function sumaCalifas() {
  let integer1 = parseInt(calificaciones[0], 10);
  let integer2 = parseInt(calificaciones[1], 10);
  let integer3 = parseInt(calificaciones[2], 10);
  let integer4 = parseInt(calificaciones[3], 10);
  let integer5 = parseInt(calificaciones[4], 10);
  let integer6 = parseInt(calificaciones[5], 10);
  let integer7 = parseInt(calificaciones[6], 10);
  let integer8 = parseInt(calificaciones[7], 10);
  let integer9 = parseInt(calificaciones[8], 10);
  let integer10 = parseInt(calificaciones[9], 10);

  sumaCalif = integer1 + integer2 + integer3 + integer4 + integer5 + integer6 + integer7 + integer8 + integer9 + integer10;
  return sumaCalif / 10;
}

function asking(i) {
  process.stdout.write(ask[i]);
}

process.stdin.on('data', function(data) {
  calificaciones.push(data.toString().trim());

  if (calificaciones.length < ask.length) {
    asking(calificaciones.length);
  } else {
    console.log("La media de las materias del estudiante es: " + sumaCalifas());
    process.exit();
  }
});


asking(0);
