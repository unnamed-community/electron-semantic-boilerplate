import path from 'path'
import url from 'url'
import { app, BrowserWindow, Menu } from 'electron'
import config from '../config/app'

const debug = /--debug/.test(process.argv[2])

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600 ,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 800,
        maxHeight: 600,
        resizable: false,
        maximizable: false
    })

    mainWindow.setMenu(null)
    mainWindow.setTitle(config.title)
    if (debug) mainWindow.openDevTools()

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) createWindow()
})
