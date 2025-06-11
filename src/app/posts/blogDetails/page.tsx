// "use client";
// import { useRouter, useSearchParams } from 'next/navigation';
// import Image from 'next/image';
// import styles from './index.module.css';
// import { useEffect, useState, Suspense } from 'react';
// import { Blog, blogs } from "../../data/BlogData";

// const  BlogDetails: React.FC = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id"); 

//   const [blog, setBlog] = useState<Blog | null>(null);

//   useEffect(() => {
//     if (id) {
//       const foundBlog = blogs.find((b) => b.id === parseInt(id as string)) || null;
//       setBlog(foundBlog);
//     }
//   }, [id]);

//   if (!blog) {
//     return <p>Blog not found or loading...</p>;
//   }

//   return (
//     <>
//       <div className={styles.BlogDetails}>
//         <h1 className={styles.Title}>{blog.title}</h1>
//         <p className={styles.Date}>{blog.date}</p>
//         <Image
//           src={blog.imageUrl}
//           alt={blog.title}
//           width={800}
//           height={400}
//           className={styles.Image}
//         />
//         <p
//           className={styles.Content}
//           dangerouslySetInnerHTML={{ __html: blog.description }}
//         />
//       </div>
//     </>
//   );
// }

// // Wrap with Suspense in the main export for the page
// export default function BlogDetailsPage() {
//   return (
//     <Suspense fallback={<p>Loading blog details...</p>}>
//       <BlogDetails />
//     </Suspense>
//   );
// }
"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';
import { useEffect, useState, Suspense } from 'react';

interface Blog {
   id: number;
  title: string;
  description: string;
  date: string;
  thumbnail_url: string;
  createAt:Date;
}

const BlogDetails: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const response = await fetch(`https://site4ina-back.onrender.com/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading blog details...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className={styles.BlogDetails}>
      <h1 className={styles.Title}>{blog.title}</h1>
      <p className={styles.Date}>  {new Date(blog.createAt).toLocaleDateString("en-CA")}</p>
      <Image
        src={blog.thumbnail_url}
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
  );
}

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<p>Loading blog details...</p>}>
      <BlogDetails />
    </Suspense>
  );
}
