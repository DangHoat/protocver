const { app,BrowserWindow,Menu,shell, dialog,ipcMain} = require('electron')
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const template = [{
  label: 'File',
  submenu: [{
    label: 'Open File',
    accelerator: process.platform === 'darwin' ? 'Cmd+O' : 'Ctrl+Shift+O',
    click() {
      openFile();
    },
  }],
},
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' },
    ],
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' },
    ],
  },
  {
    role: 'help',
    submenu: [{
      label: 'Learn More',
      click() {
        shell.openExternal('https://electronjs.org');
      },
    }],
  },
  {
    label: 'Developer',
    submenu: [{
      label: 'Toggle Developer Tools',
      accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
      click() {
        mainWindow.webContents.toggleDevTools();
      },
    }],
  },
];

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 1280, height: 960});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});