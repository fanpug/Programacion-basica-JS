//Programa 9. Introducir un número por teclado y que nos diga si es positivo o negativo
function validar(num){
  if(num<0){
  console.log("El numero ingresado es negativo");
  }else{
  console.log("El numero ingresado es positivo");
  }
}

let num;

console.log("Ingresa un numero: ");
process.stdin.on('data',function(data){
  num = data.toString().trim();
  validar(num);
  process.exit();
})
