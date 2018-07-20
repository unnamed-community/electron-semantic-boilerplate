import path from 'path'
import url from 'url'
import { app, BrowserWindow, ipcMain as ipc, dialog } from 'electron'
import config from '../config/app'

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow(config.windowOpts)

  mainWindow.setMenu(null)
  mainWindow.setTitle(config.title)
  if (process.env.environment === 'development') mainWindow.openDevTools()

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

ipc.on('open-file-dialog', event => {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openFile']
  }, files => {
    if (files) event.sender.send('selected-directory', files)
  })
})

ipc.on('open-error-dialog', (event, args) => {
  dialog.showErrorBox(args.title ? args.title : 'Error', args.message)
})

ipc.on('save-dialog', (event, args) => {
  const options = {
    title: args.title,
    filters: args.filters
  }

  dialog.showSaveDialog(mainWindow, options, filename => {
    event.sender.send('saved-file', filename)
  })
})

ipc.on('open-information-dialog', (event, args) => {
  const options = {
    type: args.type ? args.type : 'info',
    title: args.title ? args.title : 'Info',
    message: args.message,
    buttons: args.buttons
  }

  dialog.showMessageBox(mainWindow, options, index => {
    event.sender.send('information-dialog-selection', index)
  })
})

ipc.on('get-system-locale', (event, callback) => {
  event.sender.send('system-locale-information', app.getLocale())
})
