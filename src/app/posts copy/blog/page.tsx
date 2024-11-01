"use client";
import styles from "./index.module.css";
import React from "react";
import { useRef } from "react";
import PageTransition from "../../components/PageTransition";
import blog from "../../Assests/svg/blog.svg";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Service: React.FC = () => {
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <h1 className={styles.title}>Blogs</h1>
          <p className={styles.desc}>
            Explore insightful articles and expert advice on the latest in
            technology, web and mobile development, AI innovations, data
            analytics, and smart solutions. Stay updated with trends, tips, and
            industry news to empower your digital journey.
          </p>
        </div>
        <div className={styles.AllBlog}>
          <div className={styles.Blog1}>
            <div className={styles.BlogIcon}>
              <Image className={styles.BlogImage} src={blog} alt="blog" />
            </div>
            <div className={styles.BlogContent}>
              <h6 className={styles.BlogTitle}>Low energy costs</h6>
              <p className={styles.BlogDesc}>
                One of the most significant benefits of owning an Eco Haven
                Realty Home is lower energy costs. Our eco-friendly homes are
                designed to use less energy with our solar powered system,
                saving money on bills.
              </p>
              <div className={styles.Blogfooter}>
                <p className={styles.BlogDateText}>July 12, 2021</p>

                <Link className={styles.BlogButton} href="/blog">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* blog2 */}

          <div className={styles.Blog1}>
            <div className={styles.BlogIcon}>
              <Image className={styles.BlogImage} src={blog} alt="blog" />
            </div>
            <div className={styles.BlogContent}>
              <h6 className={styles.BlogTitle}>Low energy costs</h6>
              <p className={styles.BlogDesc}>
                One of the most significant benefits of owning an Eco Haven
                Realty Home is lower energy costs. Our eco-friendly homes are
                designed to use less energy with our solar powered system,
                saving money on bills.
              </p>
              <div className={styles.Blogfooter}>
                <p className={styles.BlogDateText}>July 12, 2021</p>

                <Link className={styles.BlogButton} href="/blog">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* blog3 */}
          <div className={styles.Blog1}>
            <div className={styles.BlogIcon}>
              <Image className={styles.BlogImage} src={blog} alt="blog" />
            </div>
            <div className={styles.BlogContent}>
              <h6 className={styles.BlogTitle}>Low energy costs</h6>
              <p className={styles.BlogDesc}>
                One of the most significant benefits of owning an Eco Haven
                Realty Home is lower energy costs. Our eco-friendly homes are
                designed to use less energy with our solar powered system,
                saving money on bills.
              </p>
              <div className={styles.Blogfooter}>
                <p className={styles.BlogDateText}>July 12, 2021</p>

                <Link className={styles.BlogButton} href="/blog">
                  Read More
                </Link>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </PageTransition>
  );
};

export default Service;
