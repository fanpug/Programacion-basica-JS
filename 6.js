//Programa 6. Imprimir todos los numeros desde 1 hasta el numero que de el usuario
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduzca la cantidad de numeros que quiere que se impriman desde el 1: ", function(numInput) {
  for(let i = 0; i <= numInput; i++){
      console.log(i);
  }
  rl.close();
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    //process.exit(0);
});


/*
function imprimir(){
  numInput = prompt("Introduzca la cantidad de numeros que quiere que se impriman desde el 1", 5);
  for(let i = 0; i <= numInput; i++){
      console.log(i);
  }
}

imprimir();
*/
