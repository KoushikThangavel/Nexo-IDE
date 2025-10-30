// ...existing code...
import { useState } from "react";
import "./App.css";
import BlocklyEditor from "./components/BlocklyEditor"; // ✅ Import the blockly component

function App() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("text"); // ✅ Add mode state: 'text' or 'block'

  const runCode = () => {
    try {
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
      setOutput(error.message);
    }
  };

  return (
    <div id="app">
      {/* Sidebar */}
      <div id="sidebar">
        <h2>Explorer</h2>
        <ul id="content_table">
          <li>main.js</li>
          <li>index.html</li>
        </ul>
      </div>

      {/* Editor Section */}
      <div id="editor">
        {/* Toolbar - give it a class so it stays above Blockly */}
        <div className="toolbar" style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "8px" }}>
          <button className="run-btn" onClick={runCode}>
            ▶️ Run
          </button>

          {/* ✅ Mode Switch */}
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="text">Text Mode</option>
            <option value="block">Block Mode</option>
          </select>
        </div>

        {/* Editor content area - toolbar stays above, blockly/text sits below */}
        <div className="editor-content">
          {mode === "text" ? (
            <textarea
              id="codeArea"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          ) : (
            <BlocklyEditor onCodeChange={setCode} />
          )}
        </div>
      </div>

      {/* Output Section */}
      <div id="statusbar">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
// ...existing code...