"use client";
import React, { useState } from "react";
import DOMPurify from "dompurify";
import styles from "./index.module.css";
import TextInputComponent from "./text";
import TextEditor from "./TextEditor";
import { CldUploadButton } from "next-cloudinary";

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
  const [imageURL, setImageURL] = useState<string>("");

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
    const sanitizedDescription = DOMPurify.sanitize(description);
    console.log("Sanitized Description:", sanitizedDescription);

    return <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />;
  };

  const handleImageUpload = (result: any) => {
    console.log("Cloudinary Upload Response:", result);

    if (result && result.info && result.info.secure_url) {
      const imageUrl = result.info.secure_url;

      console.log("Image URL:", imageUrl);

      const imageTag = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`;

      setDescription((prevDescription) => prevDescription + imageTag);

      setImages((prevImages) => [...prevImages, imageUrl]);

      setImageURL(imageUrl);
    } else {
      console.error("Cloudinary upload failed", result);
    }
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
            <button type="submit">Add Blog</button>
          </form>
        </div>
        <div className={styles.Right}>
          <div>
            <CldUploadButton
              options={{ multiple: true }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
              onUpload={handleImageUpload}
            >
              <span>Upload Images</span>
            </CldUploadButton>
          </div>
          <h2>Live Preview</h2>
          {/* <div className={styles.livePreview}>
            <h3>{title || "Title"}</h3>
            <div>{formatDescription(description || "Description")}</div>

            {imageURL && (
              <div className={styles.imageURLContainer}>
                <p>
                  Image URL:{" "}
                  <a href={imageURL} target="_blank" rel="noopener noreferrer">
                    {imageURL}
                  </a>
                </p>
              </div>
            )}

            <div className={styles.imagePreview}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() =>
                      setImages(images.filter((_, i) => i !== index))
                    }
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <img src={image} alt={`Preview ${index + 1}`} />
                </div>
              ))}
            </div>
          </div> */}
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
                <img key={i} src={image} alt={`Blog Image ${i + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
