//Programa 12.Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los números pares por un lado, y por otro, la de todos los impares
function suma() {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
      sum1 += i;
    else
      sum2 += i;
  }
  
  console.log("La suma de los numeros pares es " + sum1);
  console.log("La suma de los numeros impares es " + sum2);
}


suma();
