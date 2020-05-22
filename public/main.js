const { app,BrowserWindow,Menu,shell, dialog,ipcMain,screen,globalShortcut} = require('electron')
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
///
let mainWindow;
function openFile() {
  // Opens file dialog looking for markdown
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [{
      name: 'Images', extensions: ['jpeg', 'jpg', 'png', 'gif', 'pdf'],
    }],
  });

  // if no files
  if (!files) return;
  const file = files[0];

  // Send fileContent to renderer
  mainWindow.webContents.send('new-file', file);
}

// Choose directory
ipcMain.on('choose_app_dir', (event) => {
  const directory = dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });

  if (!directory) return;
  event.sender.send('app_dir_selected', directory[0]);
});

ipcMain.on('view_app_dir', (event, appDir) => {
  shell.openItem(appDir);
});

// Update file
ipcMain.on('update-file', () => {
  openFile();
});

///////////////
function createWindow() {
  const {width,height} = screen.getPrimaryDisplay().size
  mainWindow = new BrowserWindow({
    width,
    height,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    },
    resizable : true,
    movable : true
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.setMenuBarVisibility(false);
  mainWindow.getMaximumSize()

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
  globalShortcut.register("Ctrl + Shift + O",(value)=>{
    openFile()
  })
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