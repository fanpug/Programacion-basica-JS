//Programa 7. Introducir tantas frases como queramos y contarlas
let frases = [];
let cont = 0;

console.log("Bienvenido al programa 7, cuando quiera salir escriba 'BYE' ");
console.log("Introduzca una frase: ");

process.stdin.on('data', function(data){
    frases.push(data.toString().trim());
    if(frases[frases.length - 1] == "BYE"){
      process.exit();
    }
    cont++;
    console.log("Llevas " + cont + " frases.\n");
});
