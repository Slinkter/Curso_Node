function saludar(nombre) {
  return `Hola ${nombre}`;
}

const saludar02 = (name) => {
  return `Hola ${name}`;
};
// CommonJS module
module.exports = { saludar, saludar02 };
/* 
// ES module
export default saludar; 
*/
