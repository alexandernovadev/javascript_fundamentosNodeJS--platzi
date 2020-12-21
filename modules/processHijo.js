const {exec, spawn} = require('child_process')
// Es como ejecutar comando de shell comun y corriente


// exec('Comadno', (error de la function, salida del comando, error de comando))
// exec('node console.js', (err, stdout, sterr)=>{
//   if (err) 
//     return false

//   console.log(stdout);
//   console.log(sterr);
  
// })

// Parecido a exec pero mas detallista
// OJO los parametros se pasan dentro de un arreglo
let proceso = spawn('cmd.exe', ['/c', 'dir', '/x']);

// -- Imprime un objeto gigante sobre el proceso
// console.log(proceso );


// Aqui el proceso mas detallado
// stdout.on('data', function('aqui la data en buffer'))
proceso.stdout.on('data', function(data){
  console.log(data.toString());
  
})

// Cuando termina el proceso
proceso.on('exit', function(data){
  
  console.log("ESTA MUErTO", proceso.killed);
  
})


