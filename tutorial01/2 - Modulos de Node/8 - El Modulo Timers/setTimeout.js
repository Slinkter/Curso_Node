// Ejemplo con un solo argumento.
// setTimeout(func,time,Args)
// se ejecuta 1 vez
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema, 5000, "Node.js");

// Ejemplo con varios argumentos.
//setTimeout(func,time,Arg01,Arg02)
function sumar(a, b) {
  console.log(a + b);
}
setTimeout(sumar, 000, 5, 6);
