
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
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/accueil"); 
  //   }, 7000); 
  //   return () => clearTimeout(timer); 
  // }, [router]);
  return(
    <PageTransition>
      <Animation id="particles"  className={styles.back}/>
   <div className={styles.container}>
      <div className={styles.centerContent}>
   
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
    </div>
    </PageTransition>
)
};

export default Splash;