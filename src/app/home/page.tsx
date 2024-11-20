"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";

import Image from "next/image";
import Header from "../components/HeaderSection";

import arrowLeft from "../Assests/svg/arrowLeft.svg";
import arrowRight from "../Assests/svg/arrowRight.svg";

import { blogs } from "../data/BlogData";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Tableau from "../priceDetails/page";

const Homee: React.FC = () => {
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
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

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

  const toggleDetails2 = () => {
    setShowDetails2((prev) => !prev);
  };
  const toggleDetails3 = () => {
    setShowDetails3((prev) => !prev);
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };
  const router = useRouter();
  const navigateToService = () => {
    router.push("./services");
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
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
    "Manufacturing Industries",
    "Agriculture and Agri-food",
    "Healthcare and Hospitality",
    "Business facilities",
  ];
  const handleGo = (id: number) => {
    router.push(`/posts/blogDetails?id=${id}`);
  };
  return (
    <PageTransition>
      <div className={styles.container}>
        <Header />
        <div className={styles.CibleSection}>
          <div className={styles.CibleLeft}>
            <h1 className={styles.CibleTitle}>
              Tailored Energy Management Solutions for Key Sectors and
              Businesses of All Sizes
            </h1>
            <p className={styles.CibleDesc}>
              Our expertise spans agriculture, manufacturing, healthcare, and
              hospitality. From small businesses to large enterprises, we
              provide scalable and adaptive AI-powered energy solutions aligned
              with Industry 4.0 standards.
            </p>

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
                    className={`${styles.CibleCont} ${
                      styles[`CibleCont${index + 1}`]
                    } ${visibleItems.includes(index) ? styles.show : ""}`}
                  >
                    <p className={styles.SpinnerDescu}>{item}</p>
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
          <div className={styles.AllSolutions}>
            <div className={styles.music_case}>
              <div className={styles.front_case}>
                <h3 className={styles.SolTitle1}>Hardware</h3>
                <p className={styles.SolutionDesc1}>
                  Our precision sensors collect real-time energy usage data
                  continuously , seamlessly connecting with our platform to
                  provide a clear, data-driven view of your consumption
                  patterns.
                </p>
              </div>
              <div className={styles.disc}></div>
              {/* <div className={styles.back_case}></div> */}
            </div>
            <div className={styles.music_case}>
              <div className={styles.front_case2}>
                <h3 className={styles.SolTitle1}>Software</h3>
                <p className={styles.SolutionDesc12}>
                  Our cloud-based software analyzes data from each device and
                  offers intelligent automation that adapts to your energy
                  needs, providing easy, remote access ( Web & Mobile) to
                  insights while optimizing consumption and minimizing waste
                </p>
              </div>
              <div className={styles.disc2}>
                {/* <div className={styles.hole}></div> */}
              </div>
              {/* <div className={styles.back_case2}></div> */}
            </div>
          </div>
        </div>
        <div className={styles.DemoSection}>
          <h1 className={styles.SolutionTitle3}>
            Experience 4InA Technologie’s EMS in Action 
          </h1>
          <h1 className={styles.SolutionTitle2}>
           Book a Demo Today!
          </h1>
          <p className={styles.SolutionsDesc}>
            Schedule a personalized demo with our experts to explore how we can
            help you optimize energy usage, reduce costs, and drive sustainable
            growth
          </p>
          <Link href="/solutions/demo" passHref>
            <button className={styles.buttonDemo}>Book a Demo</button>
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
            <Image src={arrowLeft} alt="left" width={11} height={20}  />
          </button>
              <div className={styles.owl_carousel_custom_carousel_owl_theme} ref={scrollRef1}>
                {games.map((game, index) => (
                  <div className={styles.row10} key={index}>
                    <div
                      key={index}
                      className={`${styles.item} ${
                        activeIndex === index ? styles.item_active : ""
                      }`}
                      onClick={() => handleCardClick(index)}
                      style={{ backgroundImage: `url(${game.image})` }}
                    >
                      <div className={styles.item_desc}>
                        <p>{game.description}</p>
                      </div>
                      <div
                        className={styles.item_View}
                        onClick={() => handleViewMoreClick(game.id)}
                      >
                        <p>View more</p>
                      </div>
                    </div>
                    <h3  onClick={() => handleViewMoreClick(game.id)} className={styles.item_title}>{game.title}</h3>
                  </div>
                ))}
              </div>
              <button className={styles.scrollButton1} onClick={scrollRight1}>
            <Image src={arrowRight} alt="left" width={11} height={20} />
          </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PartnerSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Our</h1>
          <h1 className={styles.SolutionTitle2}>Partners</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          4ina Technologie, we believe in the power of collaboration. Together,
          we leverage our strengths to create cutting-edge solutions that drive
          success across various sectors.
        </p>
        <div className={styles.wrapper}>
          {/* <button className={styles.scrollButton} onClick={scrollLeft}>
            <Image src={arrowLeft} alt="left" width={11} height={20} />
          </button> */}
          <div className={styles.scrollContainer} ref={scrollRef}>
            {items.map((item, index) => (
              <div key={index} className={styles.scrollItem}>
                <Image
                  width={130}
                  height={200}
                  src={item.img}
                  alt={item.alt}
                  className={styles.imge}
                />
              </div>
            ))}
          </div>
          {/* <button className={styles.scrollButton} onClick={scrollRight}>
            <Image src={arrowRight} alt="left" width={11} height={20} />
          </button> */}
        </div>
      </div>
      <div className={styles.PricingSection}>
        <div className={styles.SolutionTitle}>
          <h1 className={styles.SolutionTitle1}>Solution</h1>
          <h1 className={styles.SolutionTitle2}>Proposal</h1>
        </div>
        <p className={styles.SolutionsDesc}>
          We offer you a complete solution of different services and categories
        </p>
        <div className={styles.AllPrices}>
          <div className={styles.price1}>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.PriceTitle1}>Basic Solution</h3>
            </div>
          
          </div>
          <div className={styles.price1}>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.PriceTitle1}>Silver Solution</h3>
            </div>
           
          </div>
          <div className={styles.price1}>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.PriceTitle1}>Gold Solution</h3>
            </div>


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
        <div className={styles.AllBlog}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.Blog1}>
              <div className={styles.BlogIcon}>
                <Image
                  width={419}
                  height={400}
                  className={styles.BlogImage}
                  src={blog.imageUrl}
                  alt="blog"
                />
              </div>
              <div className={styles.BlogContent}>
                <h6
                  onClick={() => handleGo(blog.id)}
                  className={styles.BlogTitle}
                >
                  {blog.title}
                </h6>
                <p className={styles.BlogDesc}>{blog.description}</p>
                <div className={styles.Blogfooter}>
                  <p className={styles.BlogDateText}>{blog.date}</p>
                 
                  <p 
                  className={styles.BlogDateText1}
                     onClick={() => handleGo(blog.id)}
                  
                  >

                    Read More
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link className={styles.SeeAllText} href="/posts/blog">
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
    </PageTransition>
  );
};

export default Homee;
