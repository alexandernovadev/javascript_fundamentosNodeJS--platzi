const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type','text/plain')
  if (req.method === 'POST' && req.url == '/echo') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.write('Hello MYYYY ECHO')
    // console.log(req.body); NO SE PUEDE HACE
    let body = [];

    // Stream, then recibe chunks
    req.on('data', chunk => {
      // Va llenando la data
      body.push(chunk);

      //Cuando termina de recibir  envia la cabecera
    }).on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      console.log("HOLA sirve");
      // y pone el mensaje

      // Mire como lo hace el profe mas hard
      // Convertir la data a string
      // body = Buffer.concat(body).toString()

      res.end(body.toString());
    })
  }
  else if (req.method === 'POST' && req.url == '/birthday') {
    // Recibe fecha de cumpleaños y decuevla el dia de la semana en que nacieron
    let data= []
    req.on('data', chunk=>{
      data.push(chunk)
    }).on('end', ()=>{
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      })

      data = data.toString()
      let parts = data.split('/');

      var d = new Date(data);
      let year = parts[0]
      let mes = parts[1]
      let day = parts[2]

      console.log("Mes",mes);
      console.log("Day",day);
      console.log("Year",year);
      console.log("fecha",d);
      console.log("Dia semana",d.getDay());
      const weekdays = ['Monday', 'Tuesday', 'Webnesday', 'Thrusday', 'Friday', 'Saturday','Sunday'];
      console.log("Nombre Dia ",weekdays[d.getDay()-1]);
      res.end("Nombre Dia " +weekdays[d.getDay()-1]);
    })
  }
  else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log("Server on Port http://loacalhost:8001")


