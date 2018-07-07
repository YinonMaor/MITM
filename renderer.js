// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron');

const startMonitor = document.getElementById('clickButton');
startMonitor.addEventListener('click', () => {
    const essid = document.getElementById('text-new-essid').value;
    const card = document.getElementById('text-new-card').value;
    const name = document.getElementById('text-original-name').value;
    const pass = document.getElementById('text-original-pass').value;
    const icard = document.getElementById('text-original-icard').value;
    ipcRenderer.send('startMonitor', {essid, card, name, pass, icard})
});

const closeApp = document.getElementById('closeButton');
closeApp.addEventListener('click', () => {
    ipcRenderer.send('close-me')
});