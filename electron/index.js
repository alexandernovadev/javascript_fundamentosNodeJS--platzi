const {app, BrowserWindow} = require('electron')


// El script de node es "electro ruta"

app.on('ready', createWindows);

// Ventana Principal donde se va a ver toda la aplicacion
let mainWindow;

// Funcio para crear la ventana

function createWindows (){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // El archivo que va a cargar
  mainWindow.loadFile('index.html')
} 