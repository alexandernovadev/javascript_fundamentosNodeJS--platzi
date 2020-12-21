
//-- Buffer guarda 4 bytes de memoria
// let buffer = Buffer.alloc(4);

//-- Guarda directamente el arreglo, me imagino que asigan alloc 
// ccada numero es una espacio en memoria
// let buffer = Buffer.from([1, 2, 5]);


//-- Aquui transforma el String a buffer
// let buffer = Buffer.from('Hola');

// console.log(buffer);

// -- Llenar abecedario con ASCII

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    // Desde el 97 comienza es ascii a, b ....
    abc[i] = i + 97;
}

console.log(abc.toString());

// BUFFER siempre imprime en hexadecimal

// Un buuffer es algo que sale de un stream
