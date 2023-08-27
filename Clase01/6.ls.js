const fs = require("node:fs");

//para leer el directorio
fs.readdir(".", (err, files) => {
  if (err) {
    console.error("Error al leer el directorio: ", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
