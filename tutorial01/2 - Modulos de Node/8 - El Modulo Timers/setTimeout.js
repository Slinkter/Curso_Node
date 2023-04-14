// Ejemplo con un solo argumento.
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}
// setTimeout(func,time,Args)
setTimeout(mostrarTema, 5000, "Node.js");

// Ejemplo con varios argumentos.
function sumar(a, b) {
  console.log(a + b);
}
//setTimeout(func,time,Arg01,Arg02)
setTimeout(sumar, 2000, 5, 6);
