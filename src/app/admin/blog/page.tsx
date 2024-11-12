
"use client";
import React, { useState, useEffect, useRef } from "react";
import RichTextEditor from "./RichTextEditor";
import styles from "./index.module.css";

interface Blog {
  title: string;
  description: string;
  images: string[];
}

const BlogPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const previewRef = useRef<HTMLDivElement | null>(null);

  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
  };

  useEffect(() => {
    if (previewRef.current) {
      const images = previewRef.current.querySelectorAll("img");
      images.forEach((img) => {
        img.classList.add(styles.previewImage);
      });
    }
  }, [message]);

  return (
    <div className={styles.container}>
      <h2>Compose your message</h2>
      <RichTextEditor value={message} onChange={handleMessageChange} />

      <div className={styles.container2} style={{ marginTop: "20px" }}>
        <h3>Preview:</h3>
        <div
          ref={previewRef}
          dangerouslySetInnerHTML={{ __html: message }}
          className={styles.previewContainer}
        />
      </div>
    </div>
  );
};

export default BlogPage;
