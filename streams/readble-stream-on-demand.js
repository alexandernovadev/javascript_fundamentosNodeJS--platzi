const { Readable } = require('stream');
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            // Comieza desde la letra A

            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            // Y hace un bucle
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    }
});

readableStream.currentCharCode = 65;
// Imprimir
readableStream.pipe(process.stdout);