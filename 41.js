//Programa 41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son: ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO. 
const prompt = require('prompt-sync')();


function writeF(id, nombre, apellidos, direccion, estado){
  const fs = require('fs');
  let stream = fs.createWriteStream("DATOS.DAT");

  //escribe lo nuevo
  stream.once('open', function(fd) {
    stream.write("ID\t\t\t\t\t\tNOMBRE\t\t\t\t\t\tAPELLIDOS\t\t\t\t\t\tDIRECCION\t\t\t\t\t\tESTADO");
    stream.write("\n" + id + "\t\t\t\t\t" + nombre + "\t\t\t\t\t" + apellidos + "\t\t\t\t\t" + direccion + "\t\t\t\t\t" + estado);
    stream.end();
  });

}


function main(){
  let datos = ["ida", "nombre", "apellidos", "direccion", "estado"];

  console.log("A continuacion introduzca los datos necesarios de la persona.");
  //ID
  //process.stdout.write("\nIntroduzca el id: ");
  datos[0] = prompt("Introduzca el id: ");
  //console.log(datos[0]);

  //NOMBRE
  //process.stdout.write("\nIntroduzca el nombre: ");
  datos[1] = prompt("Introduzca el nombre: ");

  //APELLIDOS
  //process.stdout.write("\nIntroduzca los apellidos: ");
  datos[2] = prompt("Introduzca los apellidos: ");

  //DIRECCION
  //process.stdout.write("\nIntroduzca la direccion: ");
  datos[3] = prompt("Introduzca la direccion: ");

  //ESTADO
  //process.stdout.write("\nIntroduzca el estado: ");
  datos[4] = prompt("Introduzca el estado: ");


  writeF(datos[0], datos[1], datos[2], datos[3], datos[4]);
}


main();
