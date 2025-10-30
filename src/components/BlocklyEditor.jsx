import React, { useEffect, useRef } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";
import "blockly/javascript";

export default function BlocklyEditor({ onCodeChange }) {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    // Initialize Blockly workspace
    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
          <category name="Logic" colour="#5C81A6">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
          </category>
          <category name="Loops" colour="#5BA55B">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="#5C68A6">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
            <block type="math_arithmetic"></block>
          </category>
          <category name="Text" colour="#5CA65C">
            <block type="text"></block>
            <block type="text_print"></block>
          </category>
        </xml>
      `,
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      }
    });

    // Handle updates
    const updateCode = () => {
      try {
        const code = Blockly.JavaScript.workspaceToCode(workspaceRef.current);
        onCodeChange(code);

        const xml = Blockly.Xml.workspaceToDom(workspaceRef.current);
        const xmlText = Blockly.Xml.domToText(xml);
        localStorage.setItem("blocklyWorkspace", xmlText);
      } catch (error) {
        console.error("Error updating code:", error);
      }
    };

    workspaceRef.current.addChangeListener(updateCode);

    // Load saved workspace
    const savedWorkspace = localStorage.getItem("blocklyWorkspace");
    if (savedWorkspace) {
      try {
        const xmlDom = Blockly.Xml.textToDom(savedWorkspace);
        Blockly.Xml.domToWorkspace(xmlDom, workspaceRef.current);
      } catch (error) {
        console.error("Error loading workspace:", error);
      }
    }

    // Handle resize
    const handleResize = () => {
      Blockly.svgResize(workspaceRef.current);
    };

    window.addEventListener("resize", handleResize);
    // Initial resize
    setTimeout(handleResize, 200);

    return () => {
      window.removeEventListener("resize", handleResize);
      workspaceRef.current?.dispose();
    };
  }, [onCodeChange]);

  return (
    <div 
      id="blocklyDiv"
      ref={blocklyDiv} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff'
      }}
    />
  );
}