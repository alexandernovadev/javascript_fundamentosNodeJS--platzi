const fs = require('fs');
const moment = require('moment'); // libreria para manejar dates
const colors = require('colors/safe'); // libreria para agregar color a los mensajes en la terminal

// crea una nueva consolda
const logger = newconsole.Console({stdout: process.stdout, stderr: process.stderr, colorMode: true});

logger.log = (msg = '\n') => {
    console.log(colors.bgCyan.black('[%s -- INFO] ---> %s'), moment().format('YYYY-MM-DD HH:mm:ss'), msg);
}

logger.warn = (msg = '\n') => {
    console.log(colors.bgYellow.black('[%s -- WARNING] ---> %s'), moment().format('YYYY-MM-DD HH:mm:ss'), msg);
}

logger.error = (msg = '\n') => {
    console.log(colors.bgRed.black('[%s -- ERROR] ---> %s'), moment().format('YYYY-MM-DD HH:mm:ss'), msg);
}

logger.log('Hello world, its only info');
logger.warn('Hello world, caution, there is a warning...');
logger.error('Hello world, Houston, there is a problem!');