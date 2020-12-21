const http = require('http')

// Crear un servidor, very easy
http.createServer((req, res) => {
  console.log('Nueva Peticion')
  console.log(req.url)

  res.writeHead(201, { 'Content-Type': 'application/json' })

  switch (req.url) {
    case '/hola':
      res.write('hola no sirve JSON')
      break;
      
    case '/enfonque':
      res.write('sou endoque')
      break;

    default:
      res.write('nada se envio')
      break;
  }

  res.end()
}).listen(3000)
console.log('Esta escuchando el en puesrto -3000')