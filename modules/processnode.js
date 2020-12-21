// const p = require('process'); NODE es global. por lo
// tanto no hay necesidad de importarlo



process.on('beforeExit', () => {
  // Detectar antes de que el programa termine
  console.log('el proceso va a terminar');
});

// Detecta cuando el proceso termino
process.on('exit', () => {
  console.log('Ale, el proceso acabó');
  setTimeout(() => {
    // No se ve porque el procces termino aariba
      console.log('Esto no se va a ver nunca');
  }, 0);
});

setTimeout(() => {
  console.log('Esto se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error', err);
  setTimeout(() => {
      console.log('Esto viene desde las excepciones');
  }, 0);
});

// Forzar un error
funcionQueNoExiste();


console.log('Esto si el error no se recoje, no sale');
