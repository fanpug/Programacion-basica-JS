//Programa 39. Crear  una  tabla  de  3  paginas,  4  filas  y  5  columnas  donde  el  primer  elemento  valga  1,  el segundo 2, el tercero 3 y así sucesivamente.

function tabla(col1, col2, col3, col4, col5) {
  this.col1 = col1;
  this.col2 = col2;
  this.col3 = col3;
  this.col4 = col4;
  this.col5 = col5;
}

let i = 1;

var fila1 = new tabla(i, i + 1, i + 2, i + 3, i + 4);
i = i + 5;
var fila2 = new tabla(i, i + 1, i + 2, i + 3, i + 4);
i = i + 5;
var fila3 = new tabla(i, i + 1, i + 2, i + 3, i + 4);
i = i + 5;
var fila4 = new tabla(i, i + 1, i + 2, i + 3, i + 4);


console.table([fila1, fila2, fila3, fila4]);
