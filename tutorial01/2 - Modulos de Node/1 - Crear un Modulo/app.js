/* 
//ES module
import { saludar, saludar02 } from "./saludo";
*/
// CommonJS module
const modulo = require("./saludo"); // require(archivo.js)
const saludar = modulo.saludar;
const greethings = modulo.greethings;
console.log(saludar("nuevousuario"));
console.log(greethings("new user "));
