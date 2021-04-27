//Programa 13. Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
function suma() {
  let sum = 0;

  for (let i = 1; i <= 100; i++)
    if (i % 2 == 0 || i % 3 == 0) {
      console.log(i);
      sum++;
    }

  console.log("Existen" + suma + " multiplos de 2 y 3, del 1 al 100");
}

suma();
