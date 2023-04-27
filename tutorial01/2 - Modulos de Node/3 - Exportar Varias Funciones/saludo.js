function saludar(nombre) {
  return `Hola ${nombre}`;
}

function saludarHolaMundo() {
  return `¡Hola, Mundo!`;
}

const obj = {
  saludar01: saludar,
  saludar02: saludarHolaMundo,
};

// Sintaxis alternativa 1
module.exports = obj;
/* 
console.log(module.exports);
*/
/* 
// Sintaxis alternativa 2
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;
console.log(module.exports); 
*/
