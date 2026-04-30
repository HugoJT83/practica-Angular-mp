const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    getPlatform: () => ipcRenderer.invoke('get-platform'), //obtener plataforma del usuario

}) //construccion de la API para conectar el back y el front