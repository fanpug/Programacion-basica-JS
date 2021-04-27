//Problema 20. Calcular el factorial de un número, mediante funciones
function factorial(num) {
  let fac = 1;
  for (let i = parseInt(num); i > 0; i--)
    fac = fac * i;
  return fac;
}

var numero;

console.log("Ingresa un numero para calcular su factorial: ");
process.stdin.on('data', function(data) {
  numero = data.toString();
  console.log(factorial(numero));
  process.exit();
})
