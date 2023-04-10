const { saludar, saludarHolaMundo } = require("./saludo");

// Llamar a las funciones importadas desde el modulo saludo.js.
// Ahora podemos llamarlas directamente porque usamos la
// sintaxis de desestructuración al importarlas.
console.log(saludar("freeCodeCamp"));
console.log(saludarHolaMundo());
