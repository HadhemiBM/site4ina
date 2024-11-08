
"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import TextInputComponent from "./text";
import TextEditor from "./TextEditor";

interface Blog {
  title: string;
  description: string;
  images: string[];
}

const BlogPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFilesArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newFilesArray]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title && description && images.length > 0) {
      const newBlog: Blog = {
        title,
        description,
        images,
      };
      setBlogs((prev) => [newBlog, ...prev]);
      setTitle("");
      setDescription("");
      setImages([]);
    }
  };


  const formatDescription = (description: string) => {
    return description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.Left}>
          <h2>Add a New Blog</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextInputComponent
              className={styles.textInputComponent}
              onChange={(newValue: string) => setDescription(newValue)}
            />
            <TextEditor
             className={styles.textEditor}
               value={description}
               onChange={(newValue: string) => setDescription(newValue)}
             /> 
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
            />
            {images.length > 0 && (
              <div className={styles.previewContainer}>
                <h4>Image Preview:</h4>
                <div className={styles.imagePreview}>
                  {images.map((image, index) => (
                    <div key={index} className={styles.imageWrapper}>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeImage(index)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <img src={image} alt={`Preview ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button type="submit">Add Blog</button>
          </form>
        </div>
        <div className={styles.Right}>
          <h2>Live Preview</h2>
          <div className={styles.livePreview}>
            <h3>{title || "Title"}</h3>
    
            <div>{formatDescription(description || "Description")}</div>
            {images.length > 0 && (
              <div className={styles.imageContainer}>
                {images.map((image, i) => (
                  <img key={i} src={image} alt={`Live Preview ${i + 1}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <h2>Blogs</h2>
      <div className={styles.blogList}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogItem}>
            <h3>{blog.title}</h3>
            <div>{formatDescription(blog.description)}</div>
            <div className={styles.imageContainer}>
              {blog.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Blog ${index + 1} - Image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
