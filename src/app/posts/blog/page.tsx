"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import { useRouter } from "next/navigation";
import spinner from "../../Assests/svg/Spinne.svg";
import Empty from "../../Assests/gif/Empty.gif";
// import { Blog, blogs } from "../../data/BlogData";
import Link from "next/link";
import Swal from "sweetalert2";
interface Blog {
  id: number;
  title: string;
  description: string;
  date: string;
  thumbnail_url: string;
  createAt:Date;
}

const Blogg: React.FC = () => {
  const router = useRouter();
const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<boolean>(false);

  const handleGo = (id: number) => {
    router.push(`/posts/blogDetails?id=${id}`);
  };
 const fetchBlogs = async () => {
    try {
      const response = await fetch("https://site4ina-back.onrender.com/blogs/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        console.error("Error from server:", errData);
        throw new Error(errData.message || "Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data); // Met à jour l'état avec les blogs récupérés
    } catch (error) {
      setError(true);

      console.error("Error fetching blogs:", error);
      // alert("Something went wrong. Please try again.");
      Swal.fire({
    icon: "warning",
    title: "Oops!",
    text: "We couldn't load the blog articles at the moment. Please try again later.",
    confirmButtonColor: "#0003da",
  });
    }
    finally {
        setLoading(false);
      }
  };
    useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <h1 className={styles.titleHead}>Blogs</h1>
          <p className={styles.desc}>
            Your resource for the latest insights in Energy Management,
            AI-powered Solutions, and Industry 4.0 trends.
          </p>
        </div>

        <div className={styles.AllBlog}>
         
          
          
           {loading ? (
                  <div  className={styles.noevents}>

        {/* <p>Loading blogs...</p> */}
        <Image
            src={spinner}
            alt="Loading blogs"
            width={400}
            height={400}
            />
            </div>
      ) : error || blogs.length === 0 ? (
        <div  className={styles.noevents}>
          <Image
            src={Empty}
            alt="No blogs"
            width={500}
            height={500}
          />
         
           {/* <p className={styles.noEventsText}>
            {error
              ? "Failed to load blogs. Please try again later."
              : "No blogs available at the moment."}
          </p> */}
        </div>
      ) : (
         [...blogs].reverse().map((blog) => (
            <div key={blog.id} className={styles.Blog1}>
              <div className={styles.BlogIcon}>
                <Image
                  width={419}
                  height={100}
                  className={styles.BlogImage}
                  src={blog.thumbnail_url}
                  // src={blog.imageUrl}
                  alt={blog.title}
                />
              </div>
              <div className={styles.BlogContent}>
                <h6
                onClick={() => handleGo(blog.id)}
                  
                  className={styles.BlogTitle}
                >
                  {blog.title}
                </h6>
                {/* <p className={styles.BlogDesc}>{blog.description}</p> */}
                <div className={styles.Blogfooter}>
                 <p className={styles.BlogDateText}>
  {new Date(blog.createAt).toLocaleDateString("en-CA")}
  {/* {blog.date} */}
</p>
                  <Link
                    className={styles.BlogButton}
                    href={`/posts/blogDetails?id=${blog.id}`}
                  > Read More 
                  </Link>
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>
    </PageTransition>
  );
};
export default Blogg;
// "use client";
// import styles from "./index.module.css";
// import React from "react";
// import PageTransition from "../../components/PageTransition";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Blog, blogs } from "../../data/BlogData";
// import Link from "next/link";

// const Blogg: React.FC = () => {
//   const router = useRouter();

//   const handleGo = (id: number) => {
//     router.push(`./blogDetails?id=${id}`);
//   };

//   return (
//     <PageTransition>
//       <div className={styles.container}>
//         <div className={styles.Header}>
//           <h1 className={styles.title}>Blogs</h1>
//           <p className={styles.desc}>
//             Your resource for the latest insights in Energy Management,
//             AI-powered Solutions, and Industry 4.0 trends.
//           </p>
//         </div>

//         <div className={styles.AllBlog}>
//           {blogs.map((blog) => (
//             <div key={blog.id} className={styles.Blog1}>
//               <div className={styles.BlogIcon}>
//                 <Image
//                   width={419}
//                   height={100}
//                   className={styles.BlogImage}
//                   src={blog.imageUrl}
//                   alt="blog"
//                 />
//               </div>
//               <div className={styles.BlogContent}>
//                 <h6
//                   onClick={() => handleGo(blog.id)}
//                   className={styles.BlogTitle}
//                 >
//                   {blog.title}
//                 </h6>
//                 <p className={styles.BlogDesc}>{blog.description}</p>
//                 <div className={styles.Blogfooter}>
//                   <p className={styles.BlogDateText}>{blog.date}</p>

//                   <Link
//                     className={styles.BlogButton}
//                     href={`./blogDetails?id=${blog.id}`}
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </PageTransition>
//   );
// };

// export default Blogg;