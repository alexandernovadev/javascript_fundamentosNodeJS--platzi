const fs = require('fs');
const stream = require('stream');
const util = require('util'); 
// Nos brinda un monton de metodos para trbajar con arrglos y objetos

// Un Stream es para leet un archivo grande poco a poco
// o chuck a chunck

// Un chunk (del inglés «trozo») es un fragmento de información, 
// contenido en muchos formatos multimedia como PNG, IFF, MP3, AVI y otros.

let data = '';

// Voy a leer un archivo
let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8'); //Le pongo codificacion UTF8

// // Comienza el stream
// readableStream.on('data', function (chunk) {
//     // console.log(chunk);
    
//     data += chunk;
// });

// // Saber when end te stream
// readableStream.on('end', function() {
//     console.log("TERMIS", data);
// });


//-- stdout: ya es un bbffer de escritura
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')


/************************************** */
// Vamos a leer el fichero PASARLO a MAyusculas 
// y escribirlo en la salida estandar del sistema
/************************************** */

// Esto nos permite trannsformar el Stream MODIFICAR LA DATA QUE VA LLEGANDO
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

//  Creat una intancia Mayus,y le pasa la data Taransform
// La funcion mayus trae todo lo que nececita de transform
util.inherits(Mayus, Transform);

// A cada pedazo que reciba transforle a String y luego a uupercase
Mayus.prototype._transform = function(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

// el txt, primero lo pipea por mayus y luego lo pipea para imprimir
readableStream
    .pipe(mayus)
    .pipe(process.stdout);



// EXPLICACION By ZeroData

// Streams
// intentaré explicarlo para ver si se entiende de mejor manera que wea pasa en esta parte del código

// const Transform = stream.Transform;
// lo que se hace aquí es crear una constante que va a contener la clase Transform, pero… que es lo que hace Transform?.
// pues básicamente lo que hace es transformar la secuencia de entrada para que la secuencia de salida sea una diferente. EJ: ( no falta el weon que se lo olvida que las iniciales de los nombres van en Mayúsculas, sin embargo tu quieres asegurarte que los nombres en tu pagina web, la Inicial aparezca en Mayúscula. entonces es ahí donde ocupas el Transform para que la secuencia de entrada la puedas cambiar y produzca una secuencia de salida diferente.)

// Bien que aquí prácticamente estas diciendo que sera en esta función será donde ejecutaras la transformación. al colocar Tranform.call(this) estas iniciando el llamado a la tranformacion de tu secuencia datos. y al colocar this estas diciendo que se hará dentro del método Mayus

// functionMayus(){
//     Transform.call(this);
// }
// dicho esto pasemos a lo siguiente…

// bien acá por lo que busque y encontré.(porque el que busca encuentra) lo que hace util.inherits(Mayus,Transform); es crear una instancia de la clase Transform y estableciéndolo como prototipo a la función Mayus, tambien adjuntando el EventEmmitter. es decir el Transform.Call(this).
// de modo que cada vez que se crea una instancia de la funcion Mayus se ejecutara el fichero.

// en pocas palabras para el que sepa PHP o JAVA . es como llamar al metodo super()

// util.inherits(Mayus,Transform);
// CABE RECALCAR QUE NODE NO RECOMIENDA USAR ESTA FUNCIÓN

// bueno bueno que tenemos acá.
// pero miren justo Mayus.prototype._transform fue posible gracias a la función de util.inherits(Mayus,Transform) que establecía la clase Transform como prototipo de la función Mayus.

// PERO QUE SIGNIFICA ._transform ?
// bueno básicamente significa que la transformación que tu harás podrá ser personalizada, así es(como mi redacción). es decir que tu veras que cambio o que transformación le harás a la secuencia de datos que estas recibiendo como entrada.

// Mayus.prototype._transform=function(chunk,codifi,callback){
//      chunkMayus = chunk.toString().toUpperCase();
//      this.push(chunkMayus);
//      callback();
// }
// pasemos a lo siguiente…

// bueno y por ultimo que sucede al final. pues simple
// creas una instancia de la funcion Mayus

// y bueno por ultimo lo que hace pipe() es limitar el almacenamiento en el buffer para que no haya una sobresaturacion a la hora se pasar la secuencia de los datos


// var mayus = new Mayus();

// readablesStream.pipe(mayus).pipe(process.stdout);
// BUENO RECALCO QUE ESTO LO DESCRIBÍ CON MIS PROPIAS PALABRAS, si hay algo en lo que me equivoco al mencionar pues que comente para que así sepamos bien el error y entendamos bien el concepto