//Programa 15. Introducir  dos  números  por  teclado.  Imprimir  los  números  naturales  que  hay  entre  ambos números  empezando  por  el  más  pequeño,  contar  cuántos  hay  y  cuántos  de  ellos  son  pares. Calcular la suma de los impares.
function print(num1, num2) {
  let men = 0, may = 0, total = 0, pares = 0, suma = 0;

  if (parseInt(num1) >= parseInt(num2)) {
    men = parseInt(num2);
    may = parseInt(num1);
  } else {
    men = parseInt(num1);
    may = parseInt(num2);
  }
  for (let i = men; i <= may; i++) {
    total++;
    if (i % 2 == 0)
      pares++;
    else
      suma += i;
  }
  console.log("Del " + men + " al " + may + " hay " + total + " numeros naturales, " + pares + " pares y la suma de los impares es " + suma);
}

let numero = [0, 0];
let conte = 0;

console.log("Ingresa 2 numeros ");
process.stdin.on('data', function(data) {
  numero[conte] = data.toString();
  if (conte == 1) {
    print(numero[0], numero[1]);
    process.exit();
  }
  conte++;
})
