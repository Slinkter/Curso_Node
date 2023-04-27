/* 
//ES module
import { saludar, saludar02 } from "./saludo";
*/
// CommonJS module
const modulo = require("./saludo"); // require(archivo.js)
console.log(saludar("nuevousuario"));
console.log(saludar02("new user "));
