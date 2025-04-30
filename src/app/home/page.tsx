"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Logo from '../Assests/logo_white.png'
import PageTransition from "../components/PageTransition";
import Animation from '../accueil/animation'
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextRevealCard, TextRevealCardDescription } from "@/components/ui/text-reveal-card";
import CountUp from "react-countup";
const Splash: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter(); 
  const navigateToHome = () => {
    setIsExiting(true);
    setTimeout(() => router.push("/accueil"), 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => router.push("/accueil"), 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (

      <motion.div
        className={styles.container}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
                  <Animation id="particles"  className={styles.back}/>

      
    <div className={styles.centerContent}>

        {/* <Animation id="particles"  className={styles.back}/> */}

            <TextRevealCard data-aos="fade-up" text="Do You Really Know Where Your Energy Is Going?" 
            revealText="Explore how 4InA Technology transforms the future." 
            DescriptionText="From real-time monitoring to predictive maintenance, 4InA Technologie helps you take control">
           
</TextRevealCard>
<div className={styles.row}>
<div className={styles.column}>

<CountUp className={styles.count} start={0} end={80} duration={2.5} suffix="%" />
<h5>
Increased Productivity Time
</h5>
</div>

<div className={styles.column}>

<CountUp className={styles.count} start={0} end={50} duration={2.5} suffix="%" />
<h5>
Cost Reduction
</h5>
</div>
<div className={styles.column}>

<CountUp className={styles.count} start={0} end={80} duration={2.5} suffix="%" />
<h5>
Reduction in Lost Time Duties
</h5>
</div>
<div className={styles.column}>

<CountUp className={styles.count} start={0} end={20} duration={2.5} suffix="%" />
<h5>
Consumption Reduction
</h5>
</div>
</div>


<Link  data-aos="fade-up" href="/accueil" passHref>
              <motion.button
                onClick={navigateToHome}
                className={styles.buttonDiscover}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore now
              </motion.button>
            </Link>  
    </div>

            </motion.div>

    // </PageTransition>
)
};

export default Splash;
