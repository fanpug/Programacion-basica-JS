//Programa 29. Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.

let dado1;
let dado2;
let sumaDados;
let cont = 0;

for (var i = 1; i < 100; i++) {
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  sumaDados = dado1 + dado2;

  if (sumaDados == 10)
    cont++;
}

console.log(cont);
