const sharp = require('sharp');


// Manejo de imagenes en c++

//
sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')
    .then(data=>{
        console.log("DATA: ",data);
        
    })