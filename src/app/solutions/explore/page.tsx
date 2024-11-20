"use client";

import styles from "./index.module.css";
import React from "react";
import PageTransition from "../../components/PageTransition";
import Video3 from "./video3";
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  return (
    // <PageTransition>
     
    //    <Video3 />
    
    // </PageTransition>
    <div className={styles.container}>
    <div className={styles.content}>
      <motion.h1 
        className={styles.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Coming Soon
      </motion.h1>
      <motion.p 
        className={styles.subheading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We're working hard to bring you something amazing. Stay tuned!
      </motion.p>
      <motion.div
        className={styles.dots}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </motion.div>
    </div>
  </div>
  );
};

export default Contact;
