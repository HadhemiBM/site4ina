import React, { useState } from 'react';
import styles from './index.module.css';

interface Line {
  id: number;
  content: string | File | string[] | null; 
  type: 'text' | 'file';
}

interface TextInputComponentProps {
  className?: string;
  onChange?: (newValue: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ className, onChange }) => {
  const [lines, setLines] = useState<Line[]>([{ id: 1, content: '', type: 'text' }]);

  const handleAddLine = (type: 'text' | 'file') => {
    setLines((prevLines) => [
      ...prevLines,
      { id: prevLines.length + 1, content: type === 'file' ? null : '', type },
    ]);
  };

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.target.files) {
      const imageUrls = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      handleContentChange(id, imageUrls); // Set content as an array of image URLs
    }
  };

  const handleContentChange = (id: number, content: string | File | string[] | null) => {
    const updatedLines = lines.map((line) => (line.id === id ? { ...line, content } : line));
    setLines(updatedLines);

    if (onChange) {
      const combinedContent = updatedLines
        .map((line) => {
          if (Array.isArray(line.content)) {
            return line.content
              .map((image) => `<img src="${image}" alt="Uploaded Image" />`)
              .join('');
          }
          return line.content;
        })
        .join('\n');
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
          {line.type === 'text' ? (
            <input
              type="text"
              className={styles.input}
              placeholder="Enter a message"
              value={line.content as string}
              onChange={(e) => handleContentChange(line.id, e.target.value)}
            />
          ) : (
            <div className={styles.imageContainer}>
              {Array.isArray(line.content) ? (
                line.content.map((image, index) => (
                  <img key={index} src={image} alt={`Uploaded ${index + 1}`} />
                ))
              ) : (
                <input
                  type="file"
                  className={styles.input}
                  accept="image/*"
                  multiple
                  onChange={(e) => handleImagesChange(e, line.id)}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TextInputComponent;


// import React, { useState } from 'react';
// import { CldUploadButton } from 'next-cloudinary';
// import styles from './index.module.css';

// interface Line {
//   id: number;
//   content: string | File | null;
//   type: 'text' | 'file';
// }

// interface TextInputComponentProps {
//   className?: string;
//   onChange?: (newValue: string) => void;
// }

// const TextInputComponent: React.FC<TextInputComponentProps> = ({ className, onChange }) => {
//   const [lines, setLines] = useState<Line[]>([{ id: 1, content: '', type: 'text' }]);

//   const handleAddLine = (type: 'text' | 'file') => {
//     if (type === 'file') {
   
//       document.getElementById('cloudinary-upload-button')?.click();
//     } else {
//       setLines((prevLines) => [
//         ...prevLines,
//         { id: prevLines.length + 1, content: '', type },
//       ]);
//     }
//   };

//   const handleImageUpload = (result: any) => {
//     console.log("Result info: ", result.info);
  
//     if (result && result.info && result.info.secure_url) {
//       setLines((prevLines) => [
//         ...prevLines,
//         { id: prevLines.length + 1, content: result.info.secure_url, type: 'file' },
//       ]);
  
//       if (onChange) {
//         console.log("Result info: ", result.info);
   
//         const combinedContent = [...lines, { id: lines.length + 1, content: result.info.secure_url, type: 'file' }]
//           .map((line) => line.content)
//           .join('\n');
//         onChange(combinedContent);
//       }
//     }
//   };
  
  

//   const handleContentChange = (id: number, content: string | File | null) => {
//     const updatedLines = lines.map((line) =>
//       line.id === id ? { ...line, content } : line
//     );
//     setLines(updatedLines);

//     if (onChange) {
//       const combinedContent = updatedLines.map((line) => line.content).join('\n');
//       onChange(combinedContent);
//     }
//   };

//   return (
//     <div className={`${styles.container} ${className || ''}`}>
//       <div className={styles.textEditorControls}>
//         <button onClick={() => handleAddLine('text')} className={styles.addButton}>
//           Add Text Line
//         </button>
//         <button onClick={() => handleAddLine('file')} className={styles.addButton}>
//           Add Image Line
//         </button>
//       </div>

//       {lines.map((line) => (
//         <div key={line.id} className={styles.lineContainer}>
//           {line.type === 'text' ? (
//             <input
//               type="text"
//               className={styles.input}
//               placeholder="Enter a message"
//               value={line.content as string}
//               onChange={(e) => handleContentChange(line.id, e.target.value)}
//             />
//           ) : (
//             <div className={styles.imagePreview}>
//               {typeof line.content === 'string' && (
//                 <img src={line.content} alt="Uploaded preview" />
//               )}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* Hidden CldUploadButton to trigger upload */}
//       <CldUploadButton
//         options={{ multiple: true }}
//         uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
//         onUpload={handleImageUpload}
        
    
//       />
//     </div>
//   );
// };

// export default TextInputComponent;
