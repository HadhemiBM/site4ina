// // import React, { useEffect, useRef, useState } from "react";
// // import styles from "./com.module.css";

// // const TextEditor = ({ value, onChange, className }) => {
// //   const outputRef = useRef(null);
// //   const [fontSize, setFontSize] = useState("16px");
// //   const [textColor, setTextColor] = useState("#000000");

// //   useEffect(() => {
// //     if (outputRef.current && value !== outputRef.current.innerHTML) {
// //       outputRef.current.innerHTML = value;
// //     }
// //   }, [value]);

// //   const handleButtonClick = (cmd, value = null) => {
// //     if (cmd === "createlink") {
// //       const url = prompt("Enter the link here:", "http://");
// //       if (url) {
// //         document.execCommand(cmd, false, url);
// //       }
// //     } else if (cmd === "insertH1" || cmd === "insertH2" || cmd === "insertH3") {
// //       const tag = cmd.replace("insert", "H");
// //       document.execCommand("formatBlock", false, tag);
// //     } else {
// //       document.execCommand(cmd, false, value);
// //     }

// //     if (onChange && outputRef.current) {
// //       onChange(outputRef.current.innerHTML);
// //     }
// //   };

// //   const handleColorChange = (e) => {
// //     const color = e.target.value;
// //     setTextColor(color);
// //     handleButtonClick("foreColor", color);
// //   };

// //   const handleFontSizeChange = (e) => {
// //     const size = e.target.value;
// //     setFontSize(size);
// //     handleButtonClick("fontSize", size);
// //   };

// //   const handleInput = () => {
// //     if (onChange && outputRef.current) {
// //       onChange(outputRef.current.innerHTML);
// //     }
// //   };

// //   const handleImagesChange = (event) => {
// //     if (event.target.files) {
// //       const file = event.target.files[0];
// //       const imageURL = URL.createObjectURL(file);

// //       // Insert the image at the current cursor position
// //       const img = document.createElement("img");
// //       img.src = imageURL;
// //       img.style.maxWidth = "100%";  // Make sure the image is responsive
// //       img.alt = "Uploaded Image";

// //       // Insert the image at the current cursor position
// //       if (outputRef.current) {
// //         outputRef.current.focus();
// //         const selection = window.getSelection();
// //         const range = selection.getRangeAt(0);
// //         range.deleteContents();
// //         range.insertNode(img);
// //       }
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.toolbar}>
// //         <ul className={styles.toolList}>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyLeft")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-left"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyCenter")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-center"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("bold")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-bold"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("italic")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-italic"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("underline")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-underline"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH1")}
// //               className={styles.toolBtn}
// //             >
// //               H1
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH2")}
// //               className={styles.toolBtn}
// //             >
// //               H2
// //             </button>
// //           </li>
// //           <li className={styles.Li_toolBtnColor}>
// //             <input
// //               type="color"
// //               value={textColor}
// //               onChange={handleColorChange}
// //               className={styles.toolBtnColor}
// //               title="Choose text color"
// //             />
// //           </li>
// //         </ul>
// //       </div>
// //       <div
// //         ref={outputRef}
// //         className={`${styles.output} ${className}`}
// //         contentEditable="true"
// //         onInput={handleInput}
// //         suppressContentEditableWarning={true}
// //       >
// //         <input
// //           type="file"
// //           accept="image/*"
// //           multiple
// //           onChange={handleImagesChange}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TextEditor;

// //222
// // import React, { useState } from "react";
// // import styles from "./index.module.css";

// // const TextEditor = () => {
// //   const [content, setContent] = useState<
// //     { type: "text" | "image"; value: string }[]
// //   >([]);
// //   const [textColor, setTextColor] = useState("#000000");
// //   const [fontSize, setFontSize] = useState("16px");

// //   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

// //   const addContent = (type: "text" | "image") => {
// //     setContent([
// //       ...content,
// //       { type, value: type === "text" ? "" : "" }, // image value can be URL, text is an empty string
// //     ]);
// //   };

// //   const handleChange = (index: number, newValue: string) => {
// //     const updatedContent = [...content];
// //     updatedContent[index].value = newValue;
// //     setContent(updatedContent);
// //   };

// //   const handleImageChange = (
// //     index: number,
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const file = event.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const updatedContent = [...content];
// //         updatedContent[index].value = reader.result as string;
// //         setContent(updatedContent);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   // const handleButtonClick = (cmd: string, value = null) => {
// //   //   if (selectedIndex === null) return;

// //   //   const updatedContent = [...content];
// //   //   const currentText = updatedContent[selectedIndex].value;

// //   //   switch (cmd) {

// //   //     case "justifyLeft":
// //   //       updatedContent[
// //   //         selectedIndex
// //   //       ].value = `<div style="text-align: left;">${currentText}</div>`;
// //   //       break;
// //   //     case "justifyCenter":
// //   //       updatedContent[
// //   //         selectedIndex
// //   //       ].value = `<div style="text-align: center;">${currentText}</div>`;
// //   //       break;
// //   //     case "bold":
// //   //       updatedContent[selectedIndex].value = `<b>${currentText}</b>`;
// //   //       break;
// //   //     case "italic":
// //   //       updatedContent[selectedIndex].value = `<i>${currentText}</i>`;
// //   //       break;
// //   //     case "underline":
// //   //       updatedContent[selectedIndex].value = `<u>${currentText}</u>`;
// //   //       break;
// //   //     case "insertH1":
// //   //       updatedContent[selectedIndex].value = `<h1>${currentText}</h1>`;
// //   //       break;
// //   //     case "insertH2":
// //   //       updatedContent[selectedIndex].value = `<h2>${currentText}</h2>`;
// //   //       break;
// //   //     default:
// //   //       break;
// //   //   }

// //   //   setContent(updatedContent);
// //   // };

// //   const handleButtonClick = (cmd:string, value = null) => {
// //     if (cmd === "createlink") {
// //       const url = prompt("Enter the link here:", "http://");
// //       if (url) {
// //         document.execCommand(cmd, false, url);
// //       }
// //     } else if (cmd === "insertH1" || cmd === "insertH2" || cmd === "insertH3") {
// //       const tag = cmd.replace("insert", "H");
// //       document.execCommand("formatBlock", false, tag);
// //     } else {
// //       document.execCommand(cmd, false, value);

// //     if (onChange && outputRef.current) {
// //       onChange(outputRef.current.innerHTML);
// //     }
// //   };

// //   const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setTextColor(event.target.value);

// //     if (selectedIndex !== null) {
// //       const updatedContent = [...content];
// //       updatedContent[
// //         selectedIndex
// //       ].value = `<span style="color: ${event.target.value};">${updatedContent[selectedIndex].value}</span>`;
// //       setContent(updatedContent);
// //     }
// //   };

// //   return (
// //     <div className={styles.editorContainer}>
// //       <h2>Text Editor</h2>
// //       <div className={styles.toolbar}>
// //         <ul className={styles.toolList}>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyLeft")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-left"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyCenter")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-center"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("bold")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-bold"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("italic")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-italic"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("underline")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-underline"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH1")}
// //               className={styles.toolBtn}
// //             >
// //               H1
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH2")}
// //               className={styles.toolBtn}
// //             >
// //               H2
// //             </button>
// //           </li>
// //           <li className={styles.Li_toolBtnColor}>
// //             <input
// //               type="color"
// //               value={textColor}
// //               onChange={handleColorChange}
// //               className={styles.toolBtnColor}
// //               title="Choose text color"
// //             />
// //           </li>
// //         </ul>
// //       </div>
// //       <div className={styles.editor}>
// //         {content.map((item, index) => (
// //           <div key={index} className={styles.item}>
// //             {item.type === "text" ? (
// //               <div>
// //                 <textarea
// //                   value={item.value}
// //                   onChange={(e) => handleChange(index, e.target.value)}
// //                   placeholder="Enter text"
// //                   className={styles.textarea}
// //                   onFocus={() => setSelectedIndex(index)}
// //                 />
// //               </div>
// //             ) : (
// //               <div>
// //                 <img src={item.value} alt="Uploaded" className={styles.image} />
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   onChange={(e) => handleImageChange(index, e)}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //         <button className={styles.addButton} onClick={() => addContent("text")}>
// //           Add Text
// //         </button>
// //         <button
// //           className={styles.addButton}
// //           onClick={() => addContent("image")}
// //         >
// //           Add Image
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TextEditor;

// ///////////////////////33333333333333333333333333
// // import React, { useRef, useState } from "react";
// // import styles from "./index.module.css";

// // const TextEditor = () => {
// //   const [content, setContent] = useState<{ type: "text" | "image"; value: string }[]>([]);
// //   const [textColor, setTextColor] = useState("#000000");
// //   const [fontSize, setFontSize] = useState("16px");

// //   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

// //   const outputRef = useRef<HTMLDivElement>(null); // Correctly type the ref

// //   const addContent = (type: "text" | "image") => {
// //     setContent([
// //       ...content,
// //       { type, value: type === "text" ? "" : "" }, // Image value will be URL (empty initially)
// //     ]);
// //   };

// //   const handleChange = (index: number, newValue: string) => {
// //     const updatedContent = [...content];
// //     updatedContent[index].value = newValue;
// //     setContent(updatedContent);
// //   };

// //   const handleImageChange = (
// //     index: number,
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const file = event.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const updatedContent = [...content];
// //         updatedContent[index].value = reader.result as string;
// //         setContent(updatedContent);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleButtonClick = (cmd: string, value: string | null = null) => {
// //     if (cmd === "createlink") {
// //       const url = prompt("Enter the link here:", "http://");
// //       if (url) {
// //         (document as Document).execCommand(cmd, false, url);
// //       }
// //     } else if (cmd === "insertH1" || cmd === "insertH2" || cmd === "insertH3") {
// //       const tag = cmd.replace("insert", "H");
// //       (document as Document).execCommand("formatBlock", false, tag);
// //     } else {
// //       (document as Document).execCommand(cmd, false, value ?? undefined);
// //     }

// //     if (outputRef.current) {
// //       const onChange = (html: string) => {

// //         console.log(html);
// //       };
// //       onChange(outputRef.current.innerHTML);
// //     }
// //   };

// //   return (
// //     <div className={styles.editorContainer}>
// //       <h2>Text Editor</h2>
// //       <div className={styles.toolbar}>
// //         <ul className={styles.toolList}>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyLeft")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-left"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyCenter")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-center"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("bold")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-bold"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("italic")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-italic"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("underline")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-underline"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH1")}
// //               className={styles.toolBtn}
// //             >
// //               H1
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH2")}
// //               className={styles.toolBtn}
// //             >
// //               H2
// //             </button>
// //           </li>
// //           <li className={styles.Li_toolBtnColor}>
// //             <input
// //               type="color"
// //               value={textColor}
// //               onChange={(e) => setTextColor(e.target.value)}
// //               className={styles.toolBtnColor}
// //               title="Choose text color"
// //             />
// //           </li>
// //         </ul>
// //       </div>
// //       <div className={styles.editor} ref={outputRef}>
// //         {content.map((item, index) => (
// //           <div key={index} className={styles.item}>
// //             {item.type === "text" ? (
// //               <div>
// //                 <textarea
// //                   value={item.value}
// //                   onChange={(e) => handleChange(index, e.target.value)}
// //                   placeholder="Enter text"
// //                   className={styles.textarea}
// //                   onFocus={() => setSelectedIndex(index)}
// //                 />
// //               </div>
// //             ) : (
// //               <div>
// //                 <img src={item.value} alt="Uploaded" className={styles.image} />
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   onChange={(e) => handleImageChange(index, e)}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //         <button className={styles.addButton} onClick={() => addContent("text")}>
// //           Add Text
// //         </button>
// //         <button
// //           className={styles.addButton}
// //           onClick={() => addContent("image")}
// //         >
// //           Add Image
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TextEditor;

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
// // import React, { useEffect, useRef, useState } from "react";
// // import styles from "./com.module.css";

// // const TextEditor = ({ value, onChange, className }) => {
// //   const outputRef = useRef(null);
// //   const [fontSize, setFontSize] = useState("16px");
// //   const [textColor, setTextColor] = useState("#000000");
// //   const [content, setContent] = useState([]);
// //   const [selectedIndex, setSelectedIndex] = useState(null);

// //   const addContent = (type) => {
// //     setContent([...content, { type, value: type === "text" ? "" : "" }]);
// //   };

// //   useEffect(() => {
// //     if (outputRef.current && value !== outputRef.current.innerHTML) {
// //       outputRef.current.innerHTML = value;
// //     }
// //   }, [value]);

// //   const handleButtonClick = (cmd, value = null) => {
// //     if (cmd === "createlink") {
// //       const url = prompt("Enter the link here:", "http://");
// //       if (url) {
// //         document.execCommand(cmd, false, url);
// //       }
// //     } else if (cmd === "insertH1") {
// //       document.execCommand("formatBlock", false, "H1");
// //     } else if (cmd === "insertH2") {
// //       document.execCommand("formatBlock", false, "H2");
// //     } else if (cmd === "insertH3") {
// //       document.execCommand("formatBlock", false, "H3");
// //     } else {
// //       document.execCommand(cmd, false, value);
// //     }

// //     if (onChange && outputRef.current) {
// //       onChange(outputRef.current.innerHTML);
// //     }
// //   };

// //   const handleColorChange = (e) => {
// //     const color = e.target.value;
// //     setTextColor(color);
// //     handleButtonClick("foreColor", color);
// //   };

// //   const handleFontSizeChange = (e) => {
// //     const size = e.target.value;
// //     setFontSize(size);
// //     handleButtonClick("fontSize", size);
// //   };

// //   const handleInput = () => {
// //     if (onChange && outputRef.current) {
// //       onChange(outputRef.current.innerHTML);
// //     }
// //   };

// //   const handleChange = (index, value) => {
// //     const updatedContent = [...content];
// //     updatedContent[index].value = value;
// //     setContent(updatedContent);
// //   };

// //   const handleImageChange = (index, e) => {
// //     const file = e.target.files[0];
// //     const reader = new FileReader();

// //     reader.onloadend = () => {
// //       const updatedContent = [...content];
// //       updatedContent[index].value = reader.result;
// //       setContent(updatedContent);
// //     };

// //     if (file) {
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.toolbar}>
// //         <ul className={styles.toolList}>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyLeft")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-left"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("justifyCenter")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-align-center"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("bold")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-bold"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("italic")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-italic"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("underline")}
// //               className={styles.toolBtn}
// //             >
// //               <i className="fas fa-underline"></i>
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH1")}
// //               className={styles.toolBtn}
// //             >
// //               H1
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               type="button"
// //               onClick={() => handleButtonClick("insertH2")}
// //               className={styles.toolBtn}
// //             >
// //               H2
// //             </button>
// //           </li>
// //           <li className={styles.Li_toolBtnColor}>
// //             <input
// //               type="color"
// //               value={textColor}
// //               onChange={handleColorChange}
// //               className={styles.toolBtnColor}
// //               title="Choose text color"
// //             />
// //           </li>
// //           <li>
// //             <select
// //               value={fontSize}
// //               onChange={handleFontSizeChange}
// //               className={styles.toolBtnSize}
// //               title="Choose font size"
// //             >
// //               <option value="12px">12px</option>
// //               <option value="14px">14px</option>
// //               <option value="16px">16px</option>
// //               <option value="18px">18px</option>
// //               <option value="20px">20px</option>
// //               <option value="24px">24px</option>
// //               <option value="26px">26px</option>
// //               <option value="28px">28px</option>
// //               <option value="30px">30px</option>
// //             </select>
// //           </li>
// //         </ul>
// //       </div>
// //       <div className={styles.editor} ref={outputRef}>
// //         {content.map((item, index) => (
// //           <div key={index} className={styles.item}>
// //             {item.type === "text" ? (
// //               <div>
// //                 <textarea
// //                   value={item.value}
// //                   onChange={(e) => handleChange(index, e.target.value)}
// //                   placeholder="Enter text"
// //                   className={styles.textarea}
// //                   onFocus={() => setSelectedIndex(index)}
// //                 />
// //               </div>
// //             ) : (
// //               <div>
// //                 <img src={item.value} alt="Uploaded" className={styles.image} />
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   onChange={(e) => handleImageChange(index, e)}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //         <button className={styles.addButton} onClick={() => addContent("text")}>
// //           Add Text
// //         </button>
// //         <button
// //           className={styles.addButton}
// //           onClick={() => addContent("image")}
// //         >
// //           Add Image
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TextEditor;

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