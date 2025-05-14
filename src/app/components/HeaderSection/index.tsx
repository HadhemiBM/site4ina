"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

// import SlickCarousel from "./Slider";
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
  const cibles = [
    "80% Increased Productivity Time",
    "80% Reduction in Lost Time Duties",
    "50% Cost Reduction",
    "20% Consumption Reduction",
  ];
  const advantages = [
    "Monitoring of energy consumption",
    "Guidance for energy managers",
    "Monitoring Machine Behavior and Predicting Failures",
    "Reducing Maintenance Costs",
  ];
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
              Leading Energy Management With AI-Driven Solution
            </h1>
            <p
            
              className={styles.HeaderDesc}
            >
              Through real-time data and predictive insights, we empower
              businesses to make smarter energy decisions. We decode energy
              complexity, helping you act fast and optimize smarter.
            </p>
            <AnimationHead id="particles" className={styles.back} />
            <div className={styles.boutons}>
              <Link href="/services" passHref>
                <motion.button
                  onClick={navigateToService}
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
              Advantages of Installing Our Solution
            </h1>
            <p
            
              className={styles.HeaderDesc}
            >
               Our smart energy solution enhances operational efficiency and
              significantly reduces energy costs through real-time optimization.
              It empowers businesses to achieve sustainable growth while making
              smarter, data-driven decisions.
            </p>
            <AnimationHead id="particles" className={styles.back} />
            <div className={styles.Advanages}>
             
              <div className={styles.Advanage} >
                Monitoring of energy consumption

              </div>
             <div className={styles.Advanage} >
               Guidance for energy managers
              </div>
              <div className={styles.Advanage} >
                Monitoring Machine Behavior and Predicting Failures
              </div>
              <div className={styles.Advanage} >
               Reducing Maintenance Costs

              </div>
            </div>
          </div>

        
        </div>
        {/* <div className={styles.container}>
          <div className={styles.HeaderText}>
            <h1
              data-aos="fade-up"
              data-aos-delay="800"
              className={styles.HeaderTitle}
            >
              Advantages of Installing Our Solution{" "}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className={styles.HeaderDesc}
            >
              Our smart energy solution enhances operational efficiency and
              significantly reduces energy costs through real-time optimization.
              It empowers businesses to achieve sustainable growth while making
              smarter, data-driven decisions.
            </p>
          </div>
          <div data-aos="zoom-out-left" className={styles.Imagecontainer}>
            {currentSlide === 1 && (
              <div className={styles.CibleRight}>
                {advantages.map((item, index) => (
                  <div
                    key={index}
                    data-aos="flip-up"
                    data-aos-delay={`${index * 200}`}
                    className={`${styles.CibleCont22} ${
                      styles[`CibleCont22${index + 1}`]
                    } ${shouldAnimate ? styles.show : ""}`}
                  >
                    <p className={styles.SpinnerDescu1}>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */}
      </Carousel>
    </div>
    // <SlickCarousel />
  );
};

export default Header;
