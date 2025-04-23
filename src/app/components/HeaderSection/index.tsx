"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import Image from "next/image";
// import dme from "../../Assests/dm2.gif";
import dme from "../../Assests/dm4.png";
// import dme from "../../Assests/HeaderRec1.png";
import reduction from "../../Assests/svg/reductionEnergy.svg";
import timeincrease from "../../Assests/svg/timeincrease.svg";
import moneySave from "../../Assests/svg/moneySave.svg";
import TimeReduce from "../../Assests/svg/TimeReduce.svg";
import edge from "../../Assests/cont3.gif";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { CarouselProps } from "react-responsive-carousel";
// import SlickCarousel from "./Slider";

const Header = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  
  
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
  if (currentSlide === 1 ||currentSlide === 2 ) {
    // Add slight delay to make sure DOM is mounted
    const timer = setTimeout(() => setShouldAnimate(true), 100);
    return () => clearTimeout(timer);
  } else {
    setShouldAnimate(false); // Reset when slide changes
  }
}, [currentSlide]);

  const settings = {
    // showArrows: true,
    // infiniteLoop: true,
    // showThumbs: false,
    // showStatus: false,
    // // autoPlay: true,
    // interval: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // I assume 1 here since you want full screen animations
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    onChange: (index: number) => setCurrentSlide(index),

    // beforeChange: (oldIndex, newIndex) => {
    //   setCurrentSlide(newIndex);
    // },
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
  return (
    <div className={styles.carr}>
      <Carousel {...settings}>
        {/* carousel 1 */}
        <div className={styles.container}>
          <div className={styles.HeaderText}>
            <h1 data-aos="zoom-out-left"  className={styles.HeaderTitle}>
              Redefining Energy Management with AI and IoT Excellence
            </h1>
            <p data-aos="zoom-out-left" className={styles.HeaderDesc}>
              Elevating energy management by integrating AI and IoT, enabling
              proactive monitoring, real-time analytics, and smarter
              decision-making to enhance your operational efficiency
            </p>
            <Link  href="/solutions/demo" passHref>
              <button data-aos="zoom-out-left" data-aos-delay="1500" className={styles.buttonDemo}>Book a Demo</button>
            </Link>
          </div>
          <div  data-aos="zoom-out-left" className={styles.Imagecontainer}>
            <Image
              className={styles.HeadImage}
              width={700}
              height={300}
              src={dme}
              alt="IA"
            />
          </div>
        </div>
        {/* carousel 2 */}
        
        <div className={styles.container}>
          <div  className={styles.HeaderText2}>
            <h1  data-aos="fade-up" data-aos-delay="800" className={styles.HeaderTitle2}>
            Impact of the System Energy Control on the Industry            </h1>
            <p data-aos="fade-up" data-aos-delay="800" className={styles.HeaderDesc}>
            Optimize energy efficiency and drive industrial success with advanced system energy control. Reduce costs, enhance performance, and promote sustainability with smart energy management solutions designed for a greener future.
            </p>
       
          </div>
          <div  data-aos="zoom-out-left" className={styles.Imagecontainer2}>
          {currentSlide === 1 && (
  <div className={styles.CibleRight}>
    {cibles.map((item, index) => (
      <div
        key={index} data-aos="flip-up"
        data-aos-delay={`${index * 200}`}
        className={`${styles.CibleCont} ${styles[`CibleCont${index + 1}`]} ${shouldAnimate ? styles.show : ""}`}


      >
        <p className={styles.SpinnerDescu}>{item}</p>
      </div>
    ))}
  </div>
)}



          </div>
        </div>
        {/* carousel 3 */}
        
            <div className={styles.container}>
          <div  className={styles.HeaderText}>
            <h1  data-aos="fade-up" data-aos-delay="800" className={styles.HeaderTitle}>
            Advantages of Installing Our Solution           </h1>
            <p data-aos="fade-up" data-aos-delay="800" className={styles.HeaderDesc}>
            Our smart energy solution enhances operational efficiency and significantly reduces energy costs through real-time optimization. It empowers businesses to achieve sustainable growth while making smarter, data-driven decisions.
            </p>
       
          </div>
          <div  data-aos="zoom-out-left" className={styles.Imagecontainer}>
          {currentSlide === 2 && (
  <div className={styles.CibleRight}>
    {advantages.map((item, index) => (
      <div
        key={index} data-aos="flip-up"
        data-aos-delay={`${index * 200}`}
        className={`${styles.CibleCont22} ${styles[`CibleCont22${index + 1}`]} ${shouldAnimate ? styles.show : ""}`}
      >
        <p className={styles.SpinnerDescu1}>{item}</p>
      </div>
    ))}
  </div>
)}
          </div>
        </div>
      </Carousel>
    </div>
    // <SlickCarousel />
  );
};

export default Header;
