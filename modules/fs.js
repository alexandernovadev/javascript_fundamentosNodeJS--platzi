const fs = require('fs')


// cb es igual a callback
function leer(ruta, cb) {
  fs.readFile(ruta , (err, data)=>{

    // la data la ennvie en buffer (un monton de numero)
    // console.log("Data -> ", data)
    // Toca convertir el buffer con toString()
    cb(data.toString())
    
  })
}


function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
      if (err) {
          console.error('No he podido escribirlo', err);
      } else {
          console.log('Se ha escrito correctamente');
      }

  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, (err)=>{
    if (err) throw err;
      cb("Archiv booraldo")
  });
}


// Se puede lazar un console.log en el segundo parametro
// e imprime lo que viene WOooooOW WTF
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo.txt',console.log)
borrar(__dirname + '/archivo1.txt', console.log)