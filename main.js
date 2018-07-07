// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const {execSync, exec, fork} = require('child_process')
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 500, height: 488})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const {ipcMain} = require('electron')
ipcMain.on('close-me', (evt, arg) => {
  app.quit()
})

ipcMain.on('startMonitor', (evt, arg) => {
  generateNetworkConnection(arg.name, arg.pass)
  const card = arg.card || 'wlxa0f3c12e0fa3'
  const internalCard = arg.icard || 'wlp2s0'
  //console.log(arg.name + '\n' + arg.pass + '\n' + arg.essid + '\n' + arg.card)
  exec(`sudo systemctl stop NetworkManager.service && sudo systemctl disable NetworkManager.service && sudo wpa_supplicant -Dwext  -i ${internalCard} -c/etc/or.conf && sudo dhclient ${internalCard}`)
  setTimeout(() => {
    exec(`sudo ifconfig ${card} down && sudo iwconfig ${card} mode managed && sudo ifconfig ${card} up && sudo python evil_twin.py -c 6 -u ${card} -i ${internalCard} -s ${arg.name}`)
  }, 9000);
})

function generateNetworkConnection(name, pass) {
  const content = `network={
    ssid="${name}"
    psk="${pass}"
}`;
  fs.writeFileSync(path.join('/etc/', 'or.conf'), content, 'utf8', err => {
      if (err) {
          return console.log(err)
      }
  }); 
}