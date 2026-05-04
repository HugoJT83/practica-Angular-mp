const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

const isDev = !app.isPackaged; //para saber si se esta en produccion o en desarrollo

function createWindow(){
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname,'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    if(isDev) {
        win.loadURL('http://127.0.0.1:4200');
    } else {
        win.loadFile(path.join(__dirname,'../dist/angular-mp/browser/index.html'));
    }
}

ipcMain.handle('get-platform', ()=> {
    return process.platform;
})

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    }); //Para usuarios de MACOs
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){ //darwin == MACos
        app.quit();
    }
})
