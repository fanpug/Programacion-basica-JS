//Programa 18. Hacer  un  programa  que  cuente  las  veces  que  aparece  una  determinada  letra  en  una  frase que introduciremos por teclado
var frase = [];
let conte = 0;
let aparece = 0;

console.log("Escriba una frase y la letra que quiere buscar en ella: ");
process.stdin.on('data', function(data) {
  frase[conte] = data.toString().trim();
  if (conte == 1) {
    for (let i = 0; i < frase[0].length; i++) {
      if (frase[0].toString().charAt(i) == frase[1].toString())
        aparece++;
    }

    console.log("La letra " + frase[1] + " aparece " + aparece + " veces");
    process.exit();
  }
  conte++;
})
