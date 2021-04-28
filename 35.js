//Programa 35. Generar  una  matriz  de  4  filas  y  5  columnas  con  números  aleatorios  entre  1  y  100,  e imprimirla.

let numero;

function getRandom() {
  return Math.floor((Math.random() * 100) + 1);
}


for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {

    process.stdout.write(getRandom() + " ");
  }
  process.stdout.write(getRandom() + "\n");


}
