//Programa 14. Hacer  un  programa  que  imprima  el  mayor  y  el  menor  de  una  serie  de  cinco  números  que vamos introduciendo por teclado
function print(numero) {
  let mayor = 0;
  let menor = 0;
  mayor = numero[0];
  menor = numero[0];
  for (let i = 1; i < 5; i++) {
    if (parseInt(mayor) <= parseInt(numero[i]))
      mayor = numero[i];
    if (parseInt(men) >= parseInt(numero[i]))
      menor = numero[i];
  }
  console.log("El numero mayor es " + mayor + " y el menor es " + menor);
}

let numero = [0, 0, 0, 0, 0];
let conte = 0;

console.log("Ingresa 5 numeros ");
process.stdin.on('data', function(data) {
  numero[conte] = data.toString();
  if (conte == 4) {
    print(numero);
    process.exit();
  }
  conte++;
})
