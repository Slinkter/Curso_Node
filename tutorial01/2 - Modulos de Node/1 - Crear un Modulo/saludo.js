function saludar(nombre) {
  return `Hola ${nombre}`;
}

const greethings = (name) => {
  return `Hello ${name}`;
};
// CommonJS module
module.exports = { saludar, greethings };
/* 
// ES module
export default saludar; 
*/
