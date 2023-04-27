function mostrarTema(tema) {
  console.log("func mostrarTema :", `Estoy aprendiendo ${tema}`);
}
//---------------------------------------
console.log("Antes --> setImmediate()");
setImmediate(mostrarTema, "Node.js");
console.log("Despues --> setImmediate()");
// los console.log  se ejecutan antes mostrarTema
// setImmediate() ejecuta la funcion en el proximo
// ciclo de eventos de Node.js (como codigo asincrono).
