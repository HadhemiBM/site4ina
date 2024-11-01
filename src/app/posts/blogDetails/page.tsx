"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';
import { useEffect, useState, Suspense } from 'react';
import { Blog, blogs } from "../../data/BlogData";

const  BlogDetails: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); 

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      const foundBlog = blogs.find((b) => b.id === parseInt(id as string)) || null;
      setBlog(foundBlog);
    }
  }, [id]);

  if (!blog) {
    return <p>Blog not found or loading...</p>;
  }

  return (
    <>
      <div className={styles.BlogDetails}>
        <h1 className={styles.Title}>{blog.title}</h1>
        <p className={styles.Date}>{blog.date}</p>
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={800}
          height={400}
          className={styles.Image}
        />
        <p
          className={styles.Content}
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </>
  );
}

// Wrap with Suspense in the main export for the page
export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<p>Loading blog details...</p>}>
      <BlogDetails />
    </Suspense>
  );
}
