//Programa 17. Imprimir,  contar  y  sumar  los  múltiplos  de  2  que  hay  entre  una  serie  de  números,  tal  que  el segundo sea mayor o igual que el primero.
function print(num, num2) {
  let cont = 0,
    suma = 0;
  for (let i = parseInt(num); i <= parseInt(num2); i++) {
    if (i % 2 == 0) {
      console.log(i);
      suma += i;
      cont++;
    }
  }
  console.log("De " + num + " a " + num2 + " hay " + cont + " pares y su suma es " + suma);
}

var numero = [];
let cont = 0;

console.log("Ingrese 2 numeros, el segundo debe ser mayor o igual que el primero: ");
process.stdin.on('data', function(data) {
  numero[conte] = data.toString().trim();
  if (cont == 1) {
    if (parseInt(numero[1]) >= parseInt(numero[0])) {
      print(numero[0], numero[1]);
      process.exit();
    }
  } else
    cont++;
})
