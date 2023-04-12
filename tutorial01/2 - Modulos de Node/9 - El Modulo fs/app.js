// Leer
// Modificar
// Copiar
// Eliminar
// cambiar de nombre
//
// -------------------------
// Versiones asincronas.
// -------------------------
const fs = require("fs");
console.log("Antes de leer el archivo...");

//
// 1.Metodod readFile - Leer un archivo(html)
fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    throw err;
  }
  console.log(contenido);
});

console.log("Despues de leer el archivo...");
//
// 2.Cambiar el nombre de un archivo.

fs.rename("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Nombre cambiado exitosamente.");
});

console.log("Depues de cambiar el nombre del archivo...");

// Agregar contenido al final de un archivo.
// Crear un archivo nuevo si no existe.

fs.appendFile("index.html", "<p>Hola</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo actualizado");
});

console.log("Depues de agregar contenido al archivo...");

// Reemplazar contenido del archivo.
// Crear un archivo nuevo si no existe.

fs.writeFile("index.html", "Contenido nuevo", (err) => {
  if (err) {
    throw err;
  }
  console.log("Contenido reemplazado exitosamente.");
});

console.log("Depues de reemplazar el contenido del archivo...");

// Eliminar archivos.

fs.unlink("main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo eliminado");
});

console.log("Depues de eliminar un archivo...");

// -------------------------
// Versiones sincronas.
// -------------------------

const archivo = fs.readFileSync("index.html", "utf-8");
console.log(archivo);
fs.renameSync("index.html", "main.html");
fs.appendFileSync("index.html", "<p>Hola</p>");
fs.writeFileSync("index.html", "Contenido nuevo");
fs.unlinkSync("main.html");
