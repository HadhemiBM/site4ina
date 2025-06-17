"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AnimationHead from "./animation";
const Header = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const router = useRouter();
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const showItems = () => {
      for (let i = 0; i < 4; i++) {
        timers.push(
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, i]);
          }, i * 300)
        );
      }
    };
    showItems();
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    if (currentSlide === 1 || currentSlide === 2) {
      const timer = setTimeout(() => setShouldAnimate(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false); // Reset when slide changes
    }
  }, [currentSlide]);
  const navigateToService = () => {
    router.push("/services");
  };
  const navigateToDemo= () => {
    router.push("/demo");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // I assume 1 here since you want full screen animations
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    onChange: (index: number) => setCurrentSlide(index),
    transitionTime: 0,
    renderArrowPrev: (
      onClickHandler: () => void,
      hasPrev: boolean,
      label: string
    ): ReactNode => (
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={onClickHandler}
        disabled={!hasPrev}
        aria-label={label}
      >
        &lt;
      </button>
    ),
    renderArrowNext: (
      onClickHandler: () => void,
      hasNext: boolean,
      label: string
    ): ReactNode => (
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={onClickHandler}
        disabled={!hasNext}
        aria-label={label}
      >
        &gt;
      </button>
    ),
  };

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.carr}>

      <Carousel {...settings}>
        {/* carousel 1 */}
        <div className={styles.container}>
         
          <div className={styles.HeaderText}>
            <h1
       
              className={styles.HeaderTitle}
            >
             AI-Powered Energy Management Solutions for Smarter Business Efficiency
            </h1>
            <p
            
              className={styles.HeaderDesc}
            >
              We transform energy data into real-time insights and predictive analytics, empowering industries to reduce energy waste, cut costs, and drive smarter operations with AI-driven decisions. 
            </p>
            {/* <AnimationHead id="particles" className={styles.back} /> */}
            <div className={styles.boutons}>
              <Link href="/solutions/demo/" passHref>
                <motion.button
                  onClick={navigateToDemo}
                  className={styles.buttonDiscover}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Book A Demo
                </motion.button>
              </Link>
              <Link href="/services" passHref>
                <motion.button
                  onClick={navigateToService}
                  className={styles.buttonDiscover}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  See More
                </motion.button>
              </Link>
            </div>
          </div>

        
        </div>
      
        {/* carousel 2 */}
         <div className={styles.container}>
         
          <div className={styles.HeaderText}>
            <h1
       
              className={styles.HeaderTitle2}
            >
             Unlock Operational Excellence With Intelligent Energy Insights
            </h1>
            {/* <p
            
              className={styles.HeaderDesc}
            >
              From predictive maintenance to real-time machine behavior analysis, our system helps you prevent costly failures, extend equipment life, and support sustainability goals, all while giving energy managers actionable insights
              
            </p> */}
            {/* <AnimationHead id="particles" className={styles.back} /> */}
            <div className={styles.Advanages}>
             
              <div className={styles.Advanage} >
                Track and analyze energy usage in real time

              </div>
             <div className={styles.Advanage} >
               Empower energy teams with intelligent recommendations
              </div>
              <div className={styles.Advanage} >
                Detect anomalies and anticipate machine breakdowns
              </div>
              <div className={styles.Advanage} >
               Lower maintenance costs and reduce downtime

              </div>
            </div>
          </div>

        
        </div>
        
      </Carousel>
    </div>
    // <SlickCarousel />
  );
};

export default Header;
