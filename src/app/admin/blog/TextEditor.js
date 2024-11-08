
// import React, { useEffect, useRef, useState } from "react";
// import styles from "./com.module.css";

// const TextEditor = ({ value, onChange, className }) => {
//   const outputRef = useRef(null);

//   useEffect(() => {
//     if (outputRef.current && value !== outputRef.current.innerHTML) {
//       outputRef.current.innerHTML = value;
//     }
//   }, [value]);
//   const [fontSize, setFontSize] = useState("16px");
//   const [textColor, setTextColor] = useState("#000000");

//   useEffect(() => {
//     if (outputRef.current && value !== outputRef.current.innerHTML) {
//       outputRef.current.innerHTML = value;
//     }
//   }, [value]);

//   const handleTextFormat = (format) => {
//       if (format === "bold") {
//         setDescription((prev) => prev + "<strong> text </strong> "+" ");
//       } else if (format === "h1") {
//         setDescription((prev) => prev + "<h1>tt <h1> \n");
//       } else if (format === "h2") {
//         setDescription((prev) => prev + "<h2> tt <h2> \n");
//       } else if (format === "color") {
//         setDescription((prev) => prev + "<span style='color:red;'>Colored Text</span>");
//       }
//     };
//   const handleButtonClick = (cmd, value = null) => {
//     if (cmd === "createlink") {
//       const url = prompt("Enter the link here: ", "http://");
//       if (url) {
//         const selection = window.getSelection();
//         const range = selection.getRangeAt(0);
//         const anchor = document.createElement("a");
//         anchor.href = url;
//         anchor.textContent = selection.toString();
//         range.deleteContents();
//         range.insertNode(anchor);
//         selection.removeAllRanges();
//       }
//     } else if (cmd === "foreColor") {
     
//       document.execCommand(cmd, false, value);
//     } else if (cmd === "fontSize") {
   
//       document.execCommand(cmd, false, value);
//     } else {

//       document.execCommand(cmd, false, null);
//     }

//     if (onChange) {
//       onChange(outputRef.current.innerHTML);
//     }
//   };
//   const handleColorChange = (e) => {
//     const color = e.target.value;
//     setTextColor(color);
//     handleButtonClick("foreColor", color); 
//   }
//   const handleFontSizeChange = (e) => {
//     const size = e.target.value;
//     setFontSize(size);
//     handleButtonClick("fontSize", size); 
//   };

//   const handleInput = () => {
//     if (onChange) {
//       onChange(outputRef.current.innerHTML);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.toolbar}>
//         <ul className={styles.toolList}>
//           <li>
//             <button
//               type="button"
//               onClick={() => handleButtonClick("justifyLeft")}
//               className={styles.toolBtn}
//             >
//               <i className="fas fa-align-left"></i>
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               onClick={() => handleButtonClick("justifyCenter")}
//               className={styles.toolBtn}
//             >
//               <i className="fas fa-align-center"></i>
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               onClick={() => handleButtonClick("bold")}
//               className={styles.toolBtn}
//             >
//               <i className="fas fa-bold"></i>
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               onClick={() => handleButtonClick("italic")}
//               className={styles.toolBtn}
//             >
//               <i className="fas fa-italic"></i>
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               onClick={() => handleButtonClick("underline")}
//               className={styles.toolBtn}
//             >
//               <i className="fas fa-underline"></i>
//             </button>
//           </li>
          
//    <li className={styles.Li_toolBtnColor} >
//             <input
//               type="color"
//               value={textColor}
//               onChange={handleColorChange}
//               className={styles.toolBtnColor}
//               title="Choose text color"
//             />
//           </li>
//           <li>
//             <select
//               value={fontSize}
//               onChange={handleFontSizeChange}
//               className={styles.toolBtnSize}
//               title="Choose font size"
//             >
//               <option value="12px">12px</option>
//               <option value="14px">14px</option>
//               <option value="16px">16px</option>
//               <option value="18px">18px</option>
//               <option value="20px">20px</option>
//               <option value="24px">24px</option>
//               <option value="24px">26px</option>
//               <option value="28px">28px</option>
//               <option value="28px">30px</option>
//             </select>
//           </li>
//           <li>
//             <button
//               type="button"
//               onClick={() => handleButtonClick("createlink")}
//               className={styles.toolBtn}
//             >
//               <i className="fas fa-link"></i>
//             </button>
//           </li>
//         </ul>
//       </div>

//       <div
//         ref={outputRef}
//         id="output"
//         className={`${styles.output} ${className}`}
//         contentEditable="true"
//         onInput={handleInput}
//         suppressContentEditableWarning={true}
//       ></div>
//     </div>
//   );
// };

// export default TextEditor;
import React, { useEffect, useRef, useState } from "react";
import styles from "./com.module.css";

const TextEditor = ({ value, onChange, className }) => {
  const outputRef = useRef(null);
  const [fontSize, setFontSize] = useState("16px");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    if (outputRef.current && value !== outputRef.current.innerHTML) {
      outputRef.current.innerHTML = value;
    }
  }, [value]);

  const handleButtonClick = (cmd, value = null) => {
    if (cmd === "createlink") {
      const url = prompt("Enter the link here:", "http://");
      if (url) {
        document.execCommand(cmd, false, url);
      }
    } else if (cmd === "insertH1") {
      document.execCommand("formatBlock", false, "H1");

    } else if (cmd === "insertH2") {
      document.execCommand("formatBlock", false, "H2");
    } else if (cmd === "insertH3") {
      document.execCommand("formatBlock", false, "H3");
    }
    else {
      document.execCommand(cmd, false, value);
    }

    if (onChange && outputRef.current) {
      onChange(outputRef.current.innerHTML);
    }
  };
   const [description, setDescription] = useState("");
  const handleColorChange = (e) => {
    const color = e.target.value;
    setTextColor(color);
    handleButtonClick("foreColor", color);
  };

  const handleFontSizeChange = (e) => {
    const size = e.target.value;
    setFontSize(size);
    handleButtonClick("fontSize", size);
  };

  const handleInput = () => {
    if (onChange && outputRef.current) {
      onChange(outputRef.current.innerHTML);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <ul className={styles.toolList}>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("justifyLeft")}
              className={styles.toolBtn}
            >
              <i className="fas fa-align-left"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("justifyCenter")}
              className={styles.toolBtn}
            >
              <i className="fas fa-align-center"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("bold")}
              className={styles.toolBtn}
            >
              <i className="fas fa-bold"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("italic")}
              className={styles.toolBtn}
            >
              <i className="fas fa-italic"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("underline")}
              className={styles.toolBtn}
            >
              <i className="fas fa-underline"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("insertH1")}
              className={styles.toolBtn}
            >
              H1
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleButtonClick("insertH2")}
              className={styles.toolBtn}
            >
              H2
            </button>
          </li>
          <li className={styles.Li_toolBtnColor} >
             <input
               type="color"
               value={textColor}
               onChange={handleColorChange}
               className={styles.toolBtnColor}
               title="Choose text color"
             />
           </li>
           <li>
             <select
               value={fontSize}
               onChange={handleFontSizeChange}
               className={styles.toolBtnSize}
               title="Choose font size"
             >
               <option value="12px">12px</option>
               <option value="14px">14px</option>
               <option value="16px">16px</option>
               <option value="18px">18px</option>
               <option value="20px">20px</option>
               <option value="24px">24px</option>
               <option value="24px">26px</option>
               <option value="28px">28px</option>
               <option value="28px">30px</option>
             </select>
           </li>
        </ul>
      </div>
      <div
        ref={outputRef}
        className={`${styles.output} ${className}`}
        contentEditable="true"
        onInput={handleInput}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default TextEditor;
