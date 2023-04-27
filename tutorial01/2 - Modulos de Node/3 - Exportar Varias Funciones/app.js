// Llamar a las funciones importadas desde modulo saludo.js.
const objectModulo = require("./saludo");
console.log(objectModulo.saludar01("nuevo usuario"));
console.log(objectModulo.saludar02());
// =========================
// terminal
// --> node app.js
// --> nodemon app.js
// =========================
