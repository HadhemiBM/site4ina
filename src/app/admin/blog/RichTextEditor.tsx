import React, { useState, useRef } from 'react';
import styles from './RichTextEditor.module.css';

interface RichTextEditorProps {
  value: string;
  onChange: (newValue: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<string>('16px');
  const [textColor, setTextColor] = useState<string>('#000000');


  const handleTextFormatting = (command: string) => {
    document.execCommand(command, false);


    if (editorRef.current) {
      editorRef.current.style.direction = 'ltr';
      editorRef.current.style.textAlign = 'left';
    }

    if (onChange && editorRef.current) {
      const newContent = editorRef.current.innerHTML || ''; 
      onChange(newContent);  
    }
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(e.target.value);
    document.execCommand('fontSize', false, e.target.value);
    if (onChange && editorRef.current) {
      const newContent = editorRef.current.innerHTML || ''; 
      onChange(newContent); 
    }
  };


  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
    document.execCommand('foreColor', false, e.target.value);
    if (onChange && editorRef.current) {
      const newContent = editorRef.current.innerHTML || ''; 
      onChange(newContent);  
    }
  };


  const handleImageInsert = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = `<img src="${event.target?.result}" alt="image" />`;
        document.execCommand('insertHTML', false, img);
        if (onChange && editorRef.current) {
          const newContent = editorRef.current.innerHTML || ''; 
          onChange(newContent);  
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.toolbar}>
        {/* Formatting buttons */}
        <button onClick={() => handleTextFormatting('bold')}><b>B</b></button>
        <button onClick={() => handleTextFormatting('italic')}><i>I</i></button>
        <button onClick={() => handleTextFormatting('underline')}><u>U</u></button>

        {/* Font size */}
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </select>

        {/* Text color */}
        <input
          type="color"
          value={textColor}
          onChange={handleColorChange}
          title="Choose Text Color"
        />

        {/* Image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageInsert}
        />
      </div>

      {/* Content editable div with inline style to enforce LTR */}
      <div
        ref={editorRef}
        className={styles.editor}
        contentEditable
        style={{ direction: 'ltr', textAlign: 'left' }}  
        // dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => {
          if (onChange && editorRef.current) {
            const newContent = editorRef.current.innerHTML || ''; 
            onChange(newContent);  
          }
        }}
      ></div>
      
      {/* <div
        ref={editorRef}
        className={styles.editor}
        contentEditable
        style={{ direction: 'ltr', textAlign: 'left' }}  
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => {
          if (onChange && editorRef.current) {
            const newContent = editorRef.current.innerHTML || ''; 
            onChange(value + newContent);  
          }
        }}
      ></div> */}
    </div>
  );
};

export default RichTextEditor;