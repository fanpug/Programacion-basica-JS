//Programa 40. Una  empresa  guarda  las  ventas  realizadas  por  sus  tres  representantes  a  lo  largo  de  doce meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de cada mes de todos los representantes. Imprimir toda la información.

function ventasTot(num, sellers) {
  let productos = [];
  for (let i = 0; i < num; i++) {
    productos.push([]);
    for (let j = 0; j < 12; j++) {
      productos[i].push([]);
      let ventas = Math.floor(Math.random() * 5) + 1;
      for (let k = 0; k < ventas; k++) {
        productos[i][j].push({
          vendedor: vendedores[Math.floor(Math.random() * sellers.length)],
          venta: Math.floor(Math.random() * 500) + 1
        });
      }
    }
  }
  return productos;
}

let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let vendedores = ['Luis', 'Maria', 'Jesus']
let ventas = ventasTot(4, vendedores);

ventas.forEach((producto, numero) => {
  console.log(`Ventas producto ${numero+1}`);
  producto.forEach((mes, numero) => {
    let total = mes.reduce((acc, current) => {
      return acc + current.venta
    }, 0);
    console.log(`${months[numero]} : ${total}`);
  });
  console.log('\n');
});
