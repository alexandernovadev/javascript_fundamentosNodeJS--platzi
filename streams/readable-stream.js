const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
// Para decurle que llego al threshold hay que add Null
readableStream.push(null);

// Para que imprima por console
readableStream.pipe(process.stdout);