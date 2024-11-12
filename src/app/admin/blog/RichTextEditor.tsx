// import React, { useState, useRef } from "react";
// import styles from "./RichTextEditor.module.css";

// interface RichTextEditorProps {
//   value: string;
//   onChange: (newValue: string) => void;
// }

// const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
//   const editorRef = useRef<HTMLDivElement | null>(null);
//   const [fontSize, setFontSize] = useState<string>("16px");
//   const [textColor, setTextColor] = useState<string>("#000000");

//   const handleTextFormatting = (command: string) => {
//     document.execCommand(command, false);

//     if (command === "link") {
//       const url = prompt("Enter a URL:", "http://");
//       if (url) {
//         const anchor = document.createElement("a");
//         anchor.href = url;
//         document.execCommand("insertHTML", false, anchor.outerHTML);
//       }
//     }

//     if (onChange && editorRef.current) {
//       const newContent = editorRef.current.innerHTML || "";
//       onChange(newContent);
//     }
//   };
//   const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTextColor(e.target.value);
//     document.execCommand("foreColor", false, e.target.value);
//     if (onChange && editorRef.current) {
//       const newContent = editorRef.current.innerHTML || "";
//       onChange(newContent);
//     }
//   };

//   const handleImageInsert = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         const img = `<img src="${event.target?.result}" alt="image" />`;
//         document.execCommand("insertHTML", false, img);
//         if (onChange && editorRef.current) {
//           const newContent = editorRef.current.innerHTML || "";
//           onChange(newContent);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className={styles.editorContainer}>
//       <div className={styles.toolbar}>
//         <button onClick={() => handleTextFormatting("bold")}>
//           <b>B</b>
//         </button>
//         <button onClick={() => handleTextFormatting("italic")}>
//           <i>I</i>
//         </button>
//         <button onClick={() => handleTextFormatting("underline")}>
//           <u>U</u>
//         </button>
//         <button onClick={() => handleTextFormatting("InsertH1")}>H1</button>
//         <button onClick={() => handleTextFormatting("insertH2")}>H2</button>
//         <button onClick={() => handleTextFormatting("insertH3")}>H3</button>
//         <button onClick={() => handleTextFormatting("link")}>Link</button>

//         <input
//           type="color"
//           value={textColor}
//           onChange={handleColorChange}
//           title="Choose Text Color"
//         />

//         <input type="file" accept="image/*" onChange={handleImageInsert} />
//       </div>

//       <div
//         ref={editorRef}
//         className={styles.editor}
//         contentEditable
//         style={{ direction: "ltr", textAlign: "left" }}
//         onInput={() => {
//           if (onChange && editorRef.current) {
//             const newContent = editorRef.current.innerHTML || "";
//             onChange(newContent);
//           }
//         }}
//       ></div>
//     </div>
//   );
// };

// export default RichTextEditor;
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


//   const handleTextFormatting = (command: string) => {
//     document.execCommand(command, false);

//     if (command === "link") {
//       const url = prompt("Enter a URL:", "http://");
//       if (url) {
//         document.execCommand("createLink", false, url); 
//       }
//     }

//     if (onChange && editorRef.current) {
//       const newContent = editorRef.current.innerHTML || "";
//       onChange(newContent); 
//     }
//   };

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


  const handleImageInsert = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = `<img src="${event.target?.result}" alt="image" />`;
        document.execCommand("insertHTML", false, img); 
        if (onChange && editorRef.current) {
          const newContent = editorRef.current.innerHTML || "";
          onChange(newContent);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle font size change
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, e.target.value); // Using execCommand to change font size
    if (onChange && editorRef.current) {
      const newContent = editorRef.current.innerHTML || "";
      onChange(newContent); // Update the parent component with the new content
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

    
        <button onClick={() => handleTextFormatting("link")}>Link</button>

     
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="2">12px</option>
          <option value="3">14px</option>
          <option value="4">16px</option>
          <option value="5">18px</option>
          <option value="6">20px</option>
          <option value="7">24px</option>
        </select>

       
        <input
          type="color"
          value={textColor}
          onChange={handleColorChange}
          title="Choose Text Color"
        />

       
        <input
          type="file"
          accept="image/*"
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
