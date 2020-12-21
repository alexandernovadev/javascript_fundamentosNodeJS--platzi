console.log('Hola Marte');


// SetInterval ejecuta la funcion cada x timpo
let i=0
setInterval(()=>{
  console.log("Me ejecuto cada segundo" + i)
  
  i++


  // Si hay un error la ejecucion para y deja de ejecutarse
  // probacando problemas de seguridad ---OJO----
  i=z;
},1000)


// Esta se ejecuta. primero que el ciclo de arriba
/// a esto se le llama asincronia
// ejecuta todo, y cuando le toca se ejecuta, o si no NOO
console.log('Segundo instruccion');
