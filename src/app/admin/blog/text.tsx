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

  const handleAddLine = (type: 'text' | 'file') => {
    setLines([...lines, { id: lines.length + 1, content: '', type }]);
  };

  const handleContentChange = (id: number, content: string) => {
    const updatedLines = lines.map((line) =>
      line.id === id ? { ...line, content } : line
    );
    setLines(updatedLines);

    if (onChange) {
      const combinedContent = updatedLines
        .filter(line => line.type === 'text')
        .map(line => line.content)
        .join(' ');
      onChange(combinedContent);
    }
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {lines.map((line) => (
        <div key={line.id} className={styles.lineContainer}>
          <input
            type={line.type === 'text' ? 'text' : 'file'}
            className={styles.input}
            placeholder={line.type === 'text' ? 'Enter a message' : ''}
            onChange={(e) =>
              handleContentChange(line.id, line.type === 'text' ? e.target.value : e.target.files?.[0]?.name || '')
            }
          />
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <button onClick={() => handleAddLine('text')} className={styles.addButton}>
          Add Text Line
        </button>
        <button onClick={() => handleAddLine('file')} className={styles.addButton}>
          Add Image Line
        </button>
      </div>
    </div>
  );
};

export default TextInputComponent;
