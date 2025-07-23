
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

//   const handleImageInsert = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     console.log("Image selected:", file.name); // ✅ Test de détection
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const img = `<img src="${event.target?.result}" alt="image" />`;
//        editorRef.current?.focus(); // 👈 IMPORTANT
//       document.execCommand("insertHTML", false, img);
//       if (onChange && editorRef.current) {
//         const newContent = editorRef.current.innerHTML || "";
//         onChange(newContent);
//       }
//     };
//     reader.readAsDataURL(file);
//   }
// };
const handleImageInsert = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const maxWidth = 800;
        const scaleFactor = maxWidth / img.width;

        canvas.width = maxWidth;
        canvas.height = img.height * scaleFactor;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7); // qualité à 70%

          const htmlImg = `<img src="${compressedDataUrl}" alt="image" style="max-width:100%;height:auto;"/>`;
          editorRef.current?.focus();
          document.execCommand("insertHTML", false, htmlImg);

          if (onChange && editorRef.current) {
            const newContent = editorRef.current.innerHTML || "";
            onChange(newContent);
          }
        }
      };
      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(file);
  }
};

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, e.target.value); 
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
   
        <label htmlFor="imageUpload"    className={styles.btnupload}>
  Upload Image
</label>
<input
  id="imageUpload"
  type="file"

  accept="image/*"
  style={{ display: 'none' }}
  onChange={handleImageInsert}
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