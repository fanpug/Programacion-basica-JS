//Programa 11. Imprimir  y  contar  los  múltiplos  de  3  desde  el  uno  hasta  un  número  que  introducimos  por teclado
function validar(num) {
  let cont = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0) {
      console.log(i);
      cont++;
    }
  }
  return cont;
}

let num;

console.log("Ingresa hasta que numero: ");
process.stdin.on('data', function(data) {
  num = data.toString();
  console.log("Hay " + validar(num) + " multiplos de 3, del 1 al " + num);
  process.exit();
})
