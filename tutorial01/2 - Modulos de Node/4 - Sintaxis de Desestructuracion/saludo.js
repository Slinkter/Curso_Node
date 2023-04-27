function saludar(nombre) {
  return `Hola ${nombre}`;
}

function saludarHolaMundo() {
  return `¡Hola, Mundo!`;
}

module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo,
};
/* console.log(module.exports); */
/* 
// Sintaxis alternativa 2
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;
console.log(module.exports);
 */
