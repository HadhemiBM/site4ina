"use client";
import React, { useState } from "react";

import RichTextEditor from "./RichTextEditor";

interface Blog {
  title: string;
  description: string;
  images: string[];
}

const BlogPage: React.FC = () => {

  const [message, setMessage] = useState<string>('');


  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
  };
  return (
  
    <div>
      <h2>Compose your message</h2>
      <RichTextEditor value={message} onChange={handleMessageChange} />
      
      <div style={{ marginTop: '20px' }}>
        <h3>Preview:</h3>
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        />
      </div>
    </div>
  );
};

export default BlogPage;
