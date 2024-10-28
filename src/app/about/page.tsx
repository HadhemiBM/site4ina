"use client"; // If you are using server components, this should be used carefully
import styles from "./index.module.css";
import React, { useRef } from "react";
import { useRouter } from 'next/navigation';
import PageTransition from "../components/PageTransition";

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateToService = () => {
    router.push('/service'); 
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <h1>This is the About Page</h1>
        <button onClick={navigateToService} className={styles.button}>
          Go to Service Page
        </button>
        {/* Add other content here */}
      </div>
    </PageTransition>
  );
};

export default About;
