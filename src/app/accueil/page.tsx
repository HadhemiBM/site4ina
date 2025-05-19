"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

import Image from "next/image";
import Header from "../components/HeaderSection";

import arrowLeft from "../Assests/svg/arrowLeft.svg";
import arrowRight from "../Assests/svg/arrowRight.svg";
import softSol from "../Assests/softSol.png";
import { blogs } from "../data/BlogData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Animation from "../home/animation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { solutions } from "../data/solutionsData";

const Accueil: React.FC = () => {
  const games = [
    {
      id: "technical-support",
      title: "Technical Support and Maintenance",
      description:
        " At 4InA Technologie, we understand the importance of effectively managing your energy operations by providing the right support at the right time.",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1730734704/tech_fqa1bw.jpg",
    },
    {
      id: "hardware-development",

      title: "Hardware Devolopment",
      description:
        " From concept to production, our hardware development service specialized in creating hardware that are customized to meet your unique energy management requirements.",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1730734500/hard_nlr99m.jpg",
    },
    {
      id: "software-development",

      title: "Software devolopment",
      description:
        " 4InA Technologie work closely with you to develop intuitive, scalable, and tailored web and mobile easy to use dashboard that           generates instantous insight and report to manage your energy with ease and with precision at the same time. Our offerings include:.",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1730734519/soft_rkfmli.jpg",
    },
    {
      id: "consulting",

      title: "Consulting",
      description:
        " Your business can confidently address its energy challenges while building a path toward sustainable growth and greater ROI. We offer personalized recommendations aligned with your business goal after conducting in-depth assessments to uncover  inefficiencies to enable targeted improvement and develop customized strategies..",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1730734559/consult_ohfu1s.jpg",
    },
    {
      id: "integration",

      title: "Integration",
      description:
        "Our Integration services ensure that new updates and customized features are seamlessly incorporated into your existing energy management systems. We implement new updates and integrations without disrupting your current operation.",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1730734596/integration_nucds8.jpg",
    },
    {
      id: "accredited-certification",

      title: "Accredited Certification",
      description:
        "  The Certification in ISO 50001 reflects your dedication to reducing energy consumption, enhancing operational efficiency, and minimizing environmental impact.",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1730734549/iso_kvcqa0.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleCardClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
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
  const handleViewMoreClick = (sectionId: string) => {
    router.push(`/services?section={sectionId}`);
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const navigateToService = () => {
    router.push("/services");
  };

  const scrollLeft1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };
  const scrollRight1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const items = [
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242530/AFD_wfgxdi.png",
      alt: "AFD - Agence Française de Développement",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242581/EU_nzen12.png",
      alt: "European Union",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242600/ceed_hs3zi9.jpg",
      alt: "CEED Tunisie",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242628/smartcapital-logo_auevso.png",
      alt: "Smart Capital",
    },

    {
      img: "https://res.cloudinary.com/dy5gov7fj/image/upload/v1731506807/img_2_rseenw.png",
      alt: "La GIZ en Tunisie",
    },
  ];

  const cibles = [
    {
      title: "Healthcare and Hospitality",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1745246764/Healthcare_lkrosu.png",
    },
    {
      title: "Manufacturing Industries",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1745246764/industry_uufawm.png",
    },
    {
      title: "Agriculture and Agri-food",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1745246764/agriculture_z2tooe.png",
    },
    {
      title: "Business facilities",
      image:
        "https://res.cloudinary.com/ddngbriyu/image/upload/v1745246764/Business_qomkvv.png",
    },
  ];

  const handleGo = (id: number) => {
    router.push(`/posts/blogDetails?id=${id}`);
  };
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: WheelEvent) => {
    if (Math.abs(e.deltaY) > 5) {
      // Check for significant scroll
      setIndex((prev) => {
        if (e.deltaY > 0 && prev < solutions.length - 1) return prev + 1;
        if (e.deltaY < 0 && prev > 0) return prev - 1;
        return prev;
      });
    }
  };
  // Function to handle timer-based change
  const handleTimerChange = () => {
    setIndex((prev) => (prev + 1) % solutions.length); // Cycle through the solutions
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add the scroll event listener
    container.addEventListener("wheel", handleScroll, { passive: false });

    const timer = setInterval(handleTimerChange, 10000); // Change every 5 seconds

    // Cleanup the event listener and the timer when the component unmounts
    return () => {
      container.removeEventListener("wheel", handleScroll);
      clearInterval(timer); // Stop the timer
    };
  }, []); // Only run this effect once on mount

  return (
    // <PageTransition>
    <div className={styles.container}>
      <Header />
      <div className={styles.CibleSection}>
        <div className={styles.CibleLeft}>
          <div
          className={styles.CibleTitleDiv}
          // data-aos="fade-up" data-aos-delay="400"
          >
            <h1 className={styles.CibleTitle}>
              Tailored Energy Management Solutions for Key Sectors and
              Businesses of All Sizes
            </h1>
          </div>
          <div
          // data-aos="fade-up"
          >
            <p className={styles.CibleDesc}>
              Our expertise spans agriculture, manufacturing, healthcare, and
              hospitality. From small businesses to large enterprises, we
              provide scalable and adaptive AI-powered energy solutions aligned
              with Industry 4.0 standards.
            </p>
          </div>

          <Link href="/services" passHref>
            <motion.button
              onClick={navigateToService}
              className={styles.buttonDiscover}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Discover
            </motion.button>
          </Link>
        </div>
        <div className={styles.CibleRight}>
          {cibles.map(
            (item, index) =>
              visibleItems.includes(index) && (
                <div
                  key={index}
                  className={`${styles.CibleCont} 
                  } ${visibleItems.includes(index) ? styles.show : ""}`}
                >
                  {/* <div className={styles.loader}></div> */}
                  <Image
                    onClick={navigateToService}
                    width={100}
                    height={200}
                    className={styles.IconCibles}
                    src={item.image}
                    alt="left"
                  />

                  <p className={styles.SpinnerDescu}>{item.title}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div className={styles.SolutionSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Our</h1>
          <h1 className={styles.SolutionTitle2}>Solutions</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          Our solutions at 4InA Technologie encompass both hardware and
          software, designed to optimize your energy management
        </p>
        <div ref={containerRef} className={styles.wrapperCont}>
          <AnimatePresence mode="sync">
            <motion.div
              key={index} // Update key to re-trigger animation when index changes
              className={styles.Solution1}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.Solution1Text}>
                <h2 className={styles.SolTitle1}>{solutions[index].title}</h2>
                <p className={styles.SolutionDesc1}>
                  {solutions[index].description}
                </p>
                <Link href="/services" passHref>
                  <motion.button
                    onClick={navigateToService}
                    className={styles.buttonDemoSol}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Requ  est Demo
                  </motion.button>
                </Link>
              </div>

              <Image
                src={solutions[index].image}
                alt={solutions[index].title}
                className={`${styles.SolutionImg} ${
                  index === 0
                    ? styles.SolutionImgFirst
                    : styles.SolutionImgSecond
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* <div ref={containerRef} className={styles.wrapperCont}>
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              className={styles.Solution1}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.Solution1Text}>
                <h2 className={styles.SolTitle1}>{solutions[index].title}</h2>
                <p className={styles.SolutionDesc1}>
                  {solutions[index].description}
                </p>
                <Link href="/services" passHref>
                  <motion.button
                    onClick={navigateToService}
                    className={styles.buttonDemoSol}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Request Demo
                  </motion.button>
                </Link>
              </div>

              <Image
                src={solutions[index].image}
                alt={solutions[index].title}
                className={`${styles.SolutionImg} ${
                  index === 0
                    ? styles.SolutionImgFirst
                    : styles.SolutionImgSecond
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div> */}
      </div>
      <div className={styles.DemoSection}>
        <h1 className={styles.SolutionTitle3}>
          Experience 4InA Technologie’s EMS in Action
        </h1>
        <h1 className={styles.SolutionTitle2}>Book a Demo Today!</h1>
        <p className={styles.SolutionsDesc}>
          Schedule a personalized demo with our experts to explore how we can
          help you optimize energy usage, reduce costs, and drive sustainable
          growth
        </p>
        <Link href="/solutions/demo" passHref>
          {/* <button className={styles.buttonDemo}>Book a Demo</button> */}
          <button className={styles.button}>
            <svg
              className={styles.buttonSvg}
              width="300"
              height="80"
              viewBox="0 0 300 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={`${styles.buttonLine} ${styles.buttonLineOuter}`}
                strokeWidth="2"
                stroke="#6190f5"
                strokeLinecap="round"
                fill="none"
                x="4"
                y="4"
                width="270"
                height="72"
                rx="20"
              />
              <rect
                className={`${styles.buttonLine} ${styles.buttonLineInner}`}
                strokeWidth="2"
                stroke="#0003da"
                strokeLinecap="round"
                fill="none"
                x="4"
                y="4"
                width="270"
                height="72"
                rx="20"
              />
            </svg>
            <h5 className={styles.buttonDemo}>
              {/* <h5> */}
              Book a Demo
              {/* </h5> */}
            </h5>
          </button>
        </Link>
      </div>
      <div className={styles.ServicesSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Our</h1>
          <h1 className={styles.SolutionTitle2}>Services</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          We ensure smooth implementation and long-term success
        </p>

        <div className={styles.AllServices}>
          <div className={styles.game_section}>
            <button className={styles.scrollButton1} onClick={scrollLeft1}>
              <Image src={arrowLeft} alt="left" width={11} height={20} />
            </button>
            <div
              className={styles.owl_carousel_custom_carousel_owl_theme}
              ref={scrollRef1}
            >
              {games.map((game, index) => (
                <div
                  className={styles.cardSer}
                  key={index}
                  style={{ backgroundImage: `url(${game.image})` }}
                >
                  <div className={styles.tag}>{game.title}</div>

                  <div className={styles.descriptionBox}>
                    <p className={styles.BlogDesc}>{game.description}</p>
                    <button
                      onClick={() => handleViewMoreClick(game.id)}
                      className={styles.arrowBtn}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.scrollButton1} onClick={scrollRight1}>
              <Image src={arrowRight} alt="left" width={11} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.PartnerSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Our</h1>
          <h1 className={styles.SolutionTitle2}>Partners</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          4InA Technologie, we believe in the power of collaboration. Together,
          we leverage our strengths to create cutting-edge solutions that drive
          success across various sectors.
        </p>

        <div className={styles.imagesLeaning}>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242530/AFD_wfgxdi.png"
              alt="AFD - Agence Française de Développement"
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/ddngbriyu/image/upload/v1744809051/images_jp1d7v.jpg"
              alt="European Union"
            />
          </div>
          <div className={styles.card }>
            <img
              src="https://res.cloudinary.com/ddngbriyu/image/upload/v1744809407/logo-deutsch-tunesische-zusammenarbeit_skzlyb.jpg"
              alt="La GIZ en Tunisie"
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242600/ceed_hs3zi9.jpg"
              alt="CEED Tunisie"
            />
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/ddngbriyu/image/upload/v1744895023/images_wpj9jb.png"
              alt="Smart Capital"
            />
          </div>
        </div>
      </div>
      <div className={styles.PricingSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Packages</h1>
          <h1 className={styles.SolutionTitle2}>Proposal</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          Scalable offerings, from simple visualization to intelligent AI
          optimization.
        </p>
        <div className={styles.AllPrices}>
          
            <div className={styles.rowloa}>
              {/* <div className={styles.loader}></div> */}
              <h3 className={styles.PriceTitle1}>Basic </h3>
            </div>
  
            <div className={styles.rowloa}>
              {/* <div className={styles.loader}></div> */}
              <h3 className={styles.PriceTitle1}>Silver </h3>
            </div>
    
          
            <div className={styles.rowloa}>
              {/* <div className={styles.loader}></div> */}
              <h3 className={styles.PriceTitle1}>Gold </h3>
            </div>
      
        </div>
        <Link href="/priceDetails" className={styles.viewDetails}>
          View Details
        </Link>
      </div>
      <div className={styles.BlogSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Our</h1>
          <h1 className={styles.SolutionTitle2}>Blogs</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          Your resource for the latest insights in Energy Management, AI-powered
          Solutions, and Industry 4.0 trends.
        </p>

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={blogs}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
        <Link className={styles.SeeAllText} href="/posts/blog">
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Accueil;
