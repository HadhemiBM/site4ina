"use client";
import styles from "./index.module.css";
import React from "react";
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Blog, blogs } from "../../data/BlogData";
import Link from "next/link";

const Blogg: React.FC = () => {
  const router = useRouter();

  const handleGo = (id: number) => {
    router.push(`./blogDetails?id=${id}`);
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <h1 className={styles.title}>Blogs</h1>
          <p className={styles.desc}>
            Your resource for the latest insights in Energy Management,
            AI-powered Solutions, and Industry 4.0 trends.
          </p>
        </div>

        <div className={styles.AllBlog}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.Blog1}>
              <div className={styles.BlogIcon}>
                <Image
                  width={419}
                  height={100}
                  className={styles.BlogImage}
                  src={blog.imageUrl}
                  alt="blog"
                />
              </div>
              <div className={styles.BlogContent}>
                <h6
                  onClick={() => handleGo(blog.id)}
                  className={styles.BlogTitle}
                >
                  {blog.title}
                </h6>
                <div className={styles.Blogfooter}>
                  <p className={styles.BlogDateText}>{blog.date}</p>

                  <Link
                    className={styles.BlogButton}
                    href={`./blogDetails?id=${blog.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Blogg;
