
"use client";

import React from "react";
import styles from "./index.module.css";

import PageTransition from "../components/PageTransition";
import Animation from './animation'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import CountUp from "react-countup";
const Splash: React.FC = () => {
  const router = useRouter(); 
  const navigateToHome = () => {
    router.push("/accueil");
  };

  return(
    <PageTransition>
      <Animation id="particles"  className={styles.back}/>
   <div className={styles.container}>
      <div className={styles.centerContent}>
   
            <TextRevealCard data-aos="fade-up" text="Do You Really Know Where Your Energy Is Going?" 
            revealText="Explore how 4InA Technology transforms the future." 
            DescriptionText="Gain full control over your energy usage with real-time energy monitoring and AI-powered predictive maintenance from 4InA Technologie.">
           
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
            <div className={styles.visually_hidden}>
  High-voltage power lines and transmission towers silhouetted against a colorful sky at sunrise or sunset, representing the backbone of energy management systems like 4ina energy solutions’ custom EMS platform.
  </div>
      </div>
    </div>
    </PageTransition>
)
};

export default Splash;