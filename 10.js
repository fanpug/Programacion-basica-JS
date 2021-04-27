//Programa 10. Introducir un número por teclado y que nos diga si es par o impar
function validar(num){
 if((num%2) == 0)
 {
   console.log("El numero ingresado es par");
 }
 else
 {
   console.log("El numero ingresado es impar");
 }
}

let num;

console.log("Ingresa un numero: ");
process.stdin.on('data',function(data){
  num = data.toString();
  validar(num);
  process.exit();
});
