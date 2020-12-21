const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, enconding, callback) {
    
    let camel = chunk.toString().toLowerCase()
    let tr_camel = camel.split(' ')

    let CamelCase = ''

    for (let index = 0; index < tr_camel.length; index++) {
      CamelCase = CamelCase.concat( tr_camel[index].charAt(0).toUpperCase() + tr_camel[index].slice(1))
    }

    this.push(CamelCase);
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);


