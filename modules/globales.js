// console.log(global.global.global.global.global.global.global.global);

// Este es el output
// Object [global] {
//   global: [Circular], // Se llama asi mismo una y otra vez
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(util.promisify.custom)]: [Function]
//   }
// }

// Timers
// console.log(setInterval);) Pone intertvalos
// console.log(clearInterval); Borra Intecalos
// console.log(setTimeout); Ecucuta function como cronometro
// console.log(clearTimeout);  boorra tmeout
// console.log(setInmediate);

// Ubicación de ficheros
console.log(__dirname); // donde esta UBICADo el fichero(no muestra fichero)
console.log(__filename); // donde esta el fichero (si muestra fichero)

