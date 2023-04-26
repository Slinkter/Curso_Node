const http = require("http");
const servidor = http.createServer((req, res) => {
  res.end("hola mundo");
});
const PUERTO = 3001;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
