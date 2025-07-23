"use client";
import React, { useState, useEffect, useRef } from "react";
import RichTextEditor from "./RichTextEditor";
import styles from "./index.module.css";

interface Blog {
  title: string;
  description: string;
  thumbnail_url: string;
  images: string[];
}

const BlogPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const handleSubmit = async () => {
    const newBlog: Blog = {
      title: title,
      description: message,
      thumbnail_url: thumbnail,
      images: [], 
    };
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://site4ina-back.onrender.com/blogs/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
           
          },
          body: JSON.stringify(newBlog),
          credentials: "include", 
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        console.error("Error from server:", errData);
        throw new Error(errData.message || "Failed to create blog");
      }
      const data = await response.json();
      console.log("Blog created:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
      <h2>Add New Blog</h2>

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
        <label htmlFor="thumbnail_url">Thumbnail URL:</label>
        <input
          type="text"
          id="thumbnail_url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          placeholder="https://example.com/image.png"
          className={styles.input}
        />
      </div>

      {thumbnail && (
        <img
          src={thumbnail}
          alt="Thumbnail Blog"
          className={styles.thumbnailPreview}
        />
      )}

      <RichTextEditor value={message} onChange={handleMessageChange} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSubmit} className={styles.submitButton}>
          Submit
        </button>
      </div>

     
    </div>
  );
};
export default BlogPage;
