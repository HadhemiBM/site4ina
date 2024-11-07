"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

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

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.Left}>
          <h1>Add a New Blog</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
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
                      <img src={image} alt={`Preview ${index + 1}`} />
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeImage(index)}
                      >
                        ✖
                      </button>
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
            <p>{description || "Description"}</p>
            {images.length > 0 && (
              <div className={styles.imageContainer}>
                {images.map((image, i) => (
                  <img key={i} src={image} alt={`Live preview ${i + 1}`} />
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
            <p>{blog.description}</p>
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
