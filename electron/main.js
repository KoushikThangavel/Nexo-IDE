const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: path.join(__dirname, 'src', 'assets', 'zoro.png'), // <-- Add your icon here
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  const startURL =
    process.env.VITE_DEV_SERVER_URL ||
    `file://${path.join(__dirname, '../dist/index.html')}`
  win.loadURL(startURL)

  // Menu template
  const menuTemplate = [
    {
      label: "File",
      submenu: [
        { label: "New File", click: () => console.log("New file clicked") },
        { label: "Open File..." },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "copy" },
        { role: "paste" },
      ],
    },
    {
      label: "View",
      submenu: [
        { label: "Command Palette" },
        { label: "Open View" },
      ],
    },
    {
      label: "Terminal",
      submenu: [
        { label: "New Terminal" },
        { label: "Run Task" },
        { label: "Build Task" },
      ],
    },
    {
      label: "Help",
      submenu: [
        { label: "Welcome" },
        { label: "Video Tutorial" },
        { label: "Tips and Tricks" },
        { label: "Join us in Youtube" },
        { label: "Check for Updates" },
        { label: "About" },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
