// function soyAsincrona(myCallback) {
//   // console.log("Im function async");
//   setTimeout(() => {
//     console.log("Im function async");
//     myCallback()
//   }, 1000);
// }

// console.log('Start Process');
// soyAsincrona(function () {
//   console.log("Este es un callbak");
  
// })
// console.log('End Process');

function hola(name, callback) {
  setTimeout(()=>{
    console.log(`Hola ${name}`);
    callback(name)
  },1000)
}
function adios(name, othercallback) {
  setTimeout(()=>{
    console.log(`Adios ${name}`);
    othercallback()
  },1000)
}



console.log('Start Process');
hola('Alex', function (namedecall) {
  adios(namedecall, function () {
    console.log('Termno asincronia');
  })
})
console.log("Este es un callbak")
