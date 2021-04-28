//Programa 36. Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su matriz transpuesta.

function getRandom() {
  return Math.floor((Math.random() * 100) + 1);
}


for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    process.stdout.write(getRandom() + " ");
  }
  process.stdout.write("\n");
}

console.log("transpuesta:");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    process.stdout.write(getRandom() + " ");
  }
  process.stdout.write("\n");
}
