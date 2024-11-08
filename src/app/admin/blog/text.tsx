import React, { useState } from 'react';
import styles from './index.module.css';

interface Line {
  id: number;
  content: string;
  type: 'text' | 'file';
}

interface TextInputComponentProps {
  className?: string;
  onChange?: (newValue: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ className, onChange }) => {
  const [lines, setLines] = useState<Line[]>([{ id: 1, content: '', type: 'text' }]);
  const [description, setDescription] = useState(''); 

  const handleAddLine = (type: 'text' | 'file') => {
    setLines((prevLines) => [
      ...prevLines,
      { id: prevLines.length + 1, content: '', type },
    ]);
  
    // Add a newline to the description while preserving the existing content
    setDescription((prevDescription) => prevDescription + '\n');
  };
  
  const handleContentChange = (id: number, content: string) => {
    const updatedLines = lines.map((line) =>
      line.id === id ? { ...line, content } : line
    );
    setLines(updatedLines);
  
    if (onChange) {
      // Join the lines with a newline character (`\n`)
      const combinedContent = updatedLines
        .map((line) => line.content)
        .join('\n');  // Joining with actual newline
      onChange(combinedContent);
    }
  };
  
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.textEditorControls}>
        <button onClick={() => handleAddLine('text')} className={styles.addButton}>
          Add Text Line
        </button>
        <button onClick={() => handleAddLine('file')} className={styles.addButton}>
          Add Image Line
        </button>
      </div>

      {lines.map((line) => (
        <div key={line.id} className={styles.lineContainer}>
          <input
            type={line.type === 'text' ? 'text' : 'file'}
            className={styles.input}
            placeholder={line.type === 'text' ? 'Enter a message' : ''}
            value={line.type === 'text' ? line.content : ''}
            onChange={(e) =>
              handleContentChange(line.id, line.type === 'text' ? e.target.value : e.target.files?.[0]?.name || '')
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TextInputComponent;
