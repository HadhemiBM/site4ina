
"use client";
import React, { useState, useEffect, useRef } from "react";
import RichTextEditor from "./RichTextEditor";
import styles from "./index.module.css";

interface Blog {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}

const BlogPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setThumbnail(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newBlog: Blog = {
      title: title,
      description: message,
      thumbnail: thumbnail,
      images: [],
    };
    console.log("Submitting blog:", newBlog);

    setIsSubmitted(true);
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
      <h2>Add Your Blog</h2>

      <div className={styles.inputContainer}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter article title"
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="thumbnail">Thumbnail:</label>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={styles.iconButton}
        >
          <i className="fas fa-upload"></i> Upload Image
        </button>

        <input
          ref={fileInputRef}
          type="file"
          id="thumbnail"
          accept="image/*"
          onChange={handleThumbnailChange}
          style={{ display: "none" }}
        />

        {thumbnail && (
          <img
            src={thumbnail}
            alt="Thumbnail Blog"
            className={styles.thumbnailPreview}
          />
        )}
      </div>

      <RichTextEditor value={message} onChange={handleMessageChange} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSubmit} className={styles.submitButton}>
          Submit
        </button>
      </div>

      {isSubmitted && (
        <div className={styles.container2} style={{ marginTop: "20px" }}>
            <h4>{title}</h4>
          {thumbnail && (
            <div className={styles.thumbnailPreviewWrapper}>
              {/* <h4>Thumbnail:</h4> */}
              <img
                src={thumbnail}
                alt="Thumbnail Blog"
                className={styles.thumbnailPreview2}
              />
            </div>
          )}
          {/* <h3>Preview:</h3> */}
          <div
            ref={previewRef}
            dangerouslySetInnerHTML={{ __html: message }}
            className={styles.previewContainer}
          />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
