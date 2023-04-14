function mostrarTema(tema) {
  console.log("---> :", `Estoy aprendiendo ${tema}`);
}
//
console.log("Antes de setImmediate()");
setImmediate(mostrarTema, "Node.js");
console.log("Despues de setImmediate()");
// Se ejecuta antes que mostrarTema porque
// setImmediate() ejecuta la funcion en el proximo
// ciclo de eventos de Node.js (como codigo asincrono).
