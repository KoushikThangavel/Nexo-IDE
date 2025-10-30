# 🧠 Demo IDE — Electron + React + Blockly

A custom **desktop IDE** built using **Electron.js**, **React**, **HTML**, and **CSS**, designed to support both **text-based** and **block-based programming**.  
This project integrates **Google’s Blockly library** for drag-and-drop coding blocks and provides a seamless switch between **Blockly mode** and a **text editor mode** — giving users the flexibility to code the way they prefer.

---

## 🚀 Features

- 🧩 **Blockly Integration** — Users can visually code using blocks powered by the Blockly library.
- ✍️ **Text Editor Mode** — Built-in text editor for writing raw code (e.g., JavaScript, Python, etc.).
- 🔄 **Mode Switcher** — Easily toggle between block-based and text-based coding.
- 💾 **Save & Load Projects** — Preserve workspace data and load existing files.
- 🪟 **Cross-Platform Desktop App** — Runs on Windows, macOS, and Linux using Electron.
- ⚙️ **Modern UI** — Built with React and styled using HTML + CSS for a responsive, clean interface.

---

## 🧰 Tech Stack

| Component | Technology |
|------------|-------------|
| Framework | Electron.js |
| Frontend | React.js (JSX) |
| UI Design | HTML, CSS |
| Block Coding | Google Blockly |
| Code Editing | Built-in text editor (custom React component) |

---

## 🏗️ How It Works

1. **Electron.js** creates a desktop shell to run the IDE as a native app.  
2. **React** handles the frontend logic, rendering both the editor and Blockly workspace.  
3. Users can **switch between block and text coding modes** via the integrated drop-down.  
4. Blockly’s XML export/import allows saving and reloading block-based projects.  
5. All interactions happen locally — no internet connection required.

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Start the app
npm start
>>>>>>> e3cbe0f317610622aba10351404ab0a7e1524d0e
