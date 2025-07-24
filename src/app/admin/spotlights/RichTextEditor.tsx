
import React, { useState, useRef } from "react";
import styles from "./RichTextEditor.module.css";
interface RichTextEditorProps {
  value: string;
  onChange: (newValue: string) => void;
}
const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<string>("16px");
  const [textColor, setTextColor] = useState<string>("#000000");


const handleTextFormatting = (command: string) => {
    if (command === "link") {
      const url = prompt("Enter a URL:", "http://");
      if (url) {
        document.execCommand("createLink", false, url); 
      }
    } else if (command === "insertH1") {
      document.execCommand("formatBlock", false, "h1"); 
    } else if (command === "insertH2") {
      document.execCommand("formatBlock", false, "h2"); 
    } else if (command === "insertH3") {
      document.execCommand("formatBlock", false, "h3"); 
    } else {
      document.execCommand(command, false); 
    }
  
   
    if (onChange && editorRef.current) {
      const newContent = editorRef.current.innerHTML || "";
      onChange(newContent); 
    }
  };
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
    document.execCommand("foreColor", false, e.target.value);
    if (onChange && editorRef.current) {
      const newContent = editorRef.current.innerHTML || "";
      onChange(newContent); 
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.toolbar}>
        <button onClick={() => handleTextFormatting("bold")}><b>B</b></button>
        <button onClick={() => handleTextFormatting("italic")}><i>I</i></button>
        <button onClick={() => handleTextFormatting("underline")}><u>U</u></button>        
        <button onClick={() => handleTextFormatting("insertH1")}>H1</button>
        <button onClick={() => handleTextFormatting("insertH2")}>H2</button>
        <button onClick={() => handleTextFormatting("insertH3")}>H3</button>
        <button onClick={() => handleTextFormatting("link")}>
            
        <i className="fa-solid fa-link"></i>
        </button>
      
        <input
          type="color"
          value={textColor}
          onChange={handleColorChange}
          title="Choose Text Color"
          className={styles.colorPalette}
        />
   
       

      </div>
      <div
         ref={editorRef}
         className={styles.editor}
         contentEditable
         style={{ direction: "ltr", textAlign: "left" }}
         onInput={() => {
           if (onChange && editorRef.current) {
             const newContent = editorRef.current.innerHTML || "";
             onChange(newContent);
           }
         }}
       ></div>
    </div>
  );
};

export default RichTextEditor;