// Con async await hacemos lo mismo de forma mas concisa.
// Una funcion asincrona retorna una promesa.
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando --------> ${producto} de Tienda.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de Tienda...");
      } else {
        reject("Este producto no esta disponible actualmente.");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de Tienda.");
    }, 4000);
  });
}
async function realizarPedido(producto) {
  try {
    /*  */
    console.group("Await");
    const rpta = await ordenarProducto(producto);
    const rptaProcesada = await procesarPedido(rpta);
    console.log(rpta);
    console.log(rptaProcesada);
    console.groupEnd();
    debugger;
  } catch (err) {
    console.log(err);
  }
}

//realizarPedido("taza");
realizarPedido("lapiz");
