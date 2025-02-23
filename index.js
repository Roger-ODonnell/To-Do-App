// Import Electron modules
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Function to create the main window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional for security
    },
  });

  // Load HTML file into the window
  mainWindow.loadFile('./site/index.html');

  // Open DevTools (optional)
  // mainWindow.webContents.openDevTools();

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// App lifecycle events
app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});