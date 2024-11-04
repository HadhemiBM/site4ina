"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";

import Image from "next/image";
import Header from "../components/HeaderSection";

import power from "../Assests/svg/power.svg";
import arrowLeft from "../Assests/svg/arrowLeft.svg";
import arrowRight from "../Assests/svg/arrowRight.svg";
import arrowService from "../Assests/svg/arrowService.svg";

import { Blog, blogs } from "../data/BlogData";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Homee: React.FC = () => {
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

  const toggleDetails2 = () => {
    setShowDetails2((prev) => !prev);
  };
  const toggleDetails3 = () => {
    setShowDetails3((prev) => !prev);
  };

  const scrollRef = useRef<HTMLDivElement>(null);

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
  const items = [
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242530/AFD_wfgxdi.png",
      alt: "Tekup Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242581/EU_nzen12.png",
      alt: "Other Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242600/ceed_hs3zi9.jpg",
      alt: "Another Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242628/smartcapital-logo_auevso.png",
      alt: "Tekup Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242530/AFD_wfgxdi.png",
      alt: "Tekup Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242581/EU_nzen12.png",
      alt: "Other Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242600/ceed_hs3zi9.jpg",
      alt: "Another Logo",
    },
    {
      img: "https://res.cloudinary.com/dyrh4zwb1/image/upload/v1729242628/smartcapital-logo_auevso.png",
      alt: "Tekup Logo",
    },
  ];
  const team = [
    {
      name: "Nouressafa Chaabani",
      linkedin: "https://www.linkedin.com/in/nouressafa-c-753456216/",
      facebook: "https://www.facebook.com/nour.essafa.73",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730198659/team1_dwmsk4.jpg",

      post: "Data",
    },
    {
      name: "Hadhemi Ben Mansour",
      linkedin:
        "https://www.linkedin.com/in/hadhemi-ben-mansour-0241701a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.facebook.com/share/1gHaTjDcGmz2JKWJ/",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730198659/team1_dwmsk4.jpg",

      post: "Data",
    },
    {
      name: "Oumaima Ben Aziza",
      linkedin:
        "https://www.linkedin.com/in/oumaimabenaziza?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook:
        "https://www.facebook.com/share/95iqP7MBQDRPiHvX/?mibextid=qi2Omg",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730446516/oumaima_kd346i.webp",

      post: "Data",
    },
    {
      name: "Meriam Zouaoui",
      linkedin:
        "https://www.linkedin.com/in/meriam-zouaoui-b08a51234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.facebook.com/meriam.zouaoui.1?mibextid=ZbWKwL",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730198659/team1_dwmsk4.jpg",

      post: "Data",
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
            <div className={styles.Solution1}>
              {/* <div className={styles.SolutionCircle}> */}
              {/* <Image
                  className={styles.Image}
                  src={decarbonization}
                  alt="hardware"
                /> */}
              {/* </div> */}
              <h3 className={styles.SolTitle1}>Hardware</h3>
              <p className={styles.SolutionDesc1}>
                Our precision sensors collect real-time energy usage data
                continuously , seamlessly connecting with our platform to
                provide a clear, data-driven view of your consumption patterns.
              </p>
            </div>
            <h1>+</h1>
            <div className={styles.Solution2}>
              <h3 className={styles.SolTitle1}>Software</h3>
              <p className={styles.SolutionDesc1}>
                Our cloud-based software analyzes data from each device and
                offers intelligent automation that adapts to your energy needs,
                providing easy, remote access ( Web & Mobile) to insights while
                optimizing consumption and minimizing waste
              </p>
              {/* <div className={styles.SolutionCircle}>
               
              {/* </div> */}
            </div>
          </div>
          <div className={styles.AvantagesSection}>
            <h1 className={styles.InnovationTitle}>
              Advantages of Installing Our Solution
            </h1>
            <div className={styles.Allavant}>
              <div className={`${styles.item} ${styles.item1}`}>
                <div className={styles.number}>1</div>
                <div className={styles.content}>
                  <h3>Monitoring of energy consumption</h3>
                  <p className={styles.contentP}>
                    4InA Technologie is a Tunisian startup empowering businesses
                    across industries to enhance and optimize their energy
                    management operations, supporting sustainable growth through
                    AI and IoT solutions.
                  </p>
                </div>
              </div>

              <div className={`${styles.item} ${styles.item2}`}>
                <div className={styles.number}>2</div>
                <div className={styles.content}>
                  <h3>Guidance for energy managers</h3>
                  <p className={styles.contentP}>
                    Provide actionable insights for energy and electricity
                    managers through intelligent machines to enhance
                    decision-making.
                  </p>
                </div>
              </div>

              <div className={`${styles.item} ${styles.item3}`}>
                <div className={styles.number}>3</div>
                <div className={styles.content}>
                  <h3>Monitoring Machine Behavior and Predicting Failures</h3>
                  <p className={styles.contentP}>
                    Analyze machine behavior to predict future energy
                    consumption and detect potential faults before they
                    escalate.
                  </p>
                </div>
              </div>

              <div className={`${styles.item} ${styles.item4}`}>
                <div className={styles.number}>4</div>
                <div className={styles.content}>
                  <h3>Reducing Maintenance Costs</h3>
                  <p className={styles.contentP}>
                    Lower maintenance costs, reduce energy bills, and mitigate
                    the effects of harmonics for improved operational
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DemoSection}>
          <h1 className={styles.SolutionTitle2}>
            Experience 4InA Technologie’s EMS in Action Book a Demo Today!
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
            {/* service1 */}

            <div className={styles.Service1}>
              <div className={styles.ServiceIcon}>
                <Image
                  className={styles.ServicePower}
                  src={power}
                  alt="hardware"
                />
              </div>
              <div className={styles.ServiceContent}>
                <div className={styles.ServiceContentCol}>
                  <h6 className={styles.ServiceTitle}>
                    Technical Support and Maintenance
                  </h6>
                  <p className={styles.ServiceDesc}>
                    Our dedicated team is here to resolve issues and maximize
                    system efficiency.
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div>
            {/* service2 */}
            <div className={styles.Service1}>
              <div className={styles.ServiceIcon}>
                <Image
                  className={styles.ServicePower}
                  src={power}
                  alt="hardware"
                />
              </div>
              <div className={styles.ServiceContent}>
                <div className={styles.ServiceContentCol}>
                  <h6 className={styles.ServiceTitle}>Hardware Devolopment</h6>
                  <p className={styles.ServiceDesc}>
                    We develop advanced hardware solutions tailored to meet your
                    unique needs
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div>
            {/* service3 */}
            <div className={styles.Service1}>
              <div className={styles.ServiceIcon}>
                <Image
                  className={styles.ServicePower}
                  src={power}
                  alt="hardware"
                />
              </div>
              <div className={styles.ServiceContent}>
                <div className={styles.ServiceContentCol}>
                  <h6 className={styles.ServiceTitle}>
                    Software devolopment ( Web and Mobile){" "}
                  </h6>
                  <p className={styles.ServiceDesc}>
                    We provide custom development and upgrades for your mobile
                    and web software to meet your evolving energy management
                    demand.
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div>
            {/* service4 */}
            <div className={styles.Service1}>
              <div className={styles.ServiceIcon}>
                <Image
                  className={styles.ServicePower}
                  src={power}
                  alt="hardware"
                />
              </div>
              <div className={styles.ServiceContent}>
                <div className={styles.ServiceContentCol}>
                  <h6 className={styles.ServiceTitle}>Consulting</h6>
                  <p className={styles.ServiceDesc}>
                    We offer expert consulting tailored to your unique energy
                    management needs, helping to identify inefficiencies and
                    ensure your team is fully equipped to utilize our solutions
                    effectively
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div>
            {/* service5 */}
            <div className={styles.Service1}>
              <div className={styles.ServiceIcon}>
                <Image
                  className={styles.ServicePower}
                  src={power}
                  alt="hardware"
                />
              </div>
              <div className={styles.ServiceContent}>
                <div className={styles.ServiceContentCol}>
                  <h6 className={styles.ServiceTitle}>Integration</h6>
                  <p className={styles.ServiceDesc}>
                    The integration of new updates and specific features
                    tailored to your business's current energy situation.
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div>
            {/* service6 */}
            <div className={styles.Service1}>
              <div className={styles.ServiceIcon}>
                <Image
                  className={styles.ServicePower}
                  src={power}
                  alt="hardware"
                />
              </div>
              <div className={styles.ServiceContent}>
                <div className={styles.ServiceContentCol}>
                  <h6 className={styles.ServiceTitle}>
                    Accredited Certification
                  </h6>
                  <p className={styles.ServiceDesc}>
                    We provide training programs for certifications such as ISO
                    50001 and more, ensuring your organization meets industry
                    standards.
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
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
            4ina Technologie, we believe in the power of collaboration.
            Together, we leverage our strengths to create cutting-edge solutions
            that drive success across various sectors.
          </p>
          <div className={styles.wrapper}>
            <button className={styles.scrollButton} onClick={scrollLeft}>
              <Image src={arrowLeft} alt="left" width={11} height={20} />
            </button>
            <div className={styles.scrollContainer} ref={scrollRef}>
              {items.map((item, index) => (
                <div key={index} className={styles.scrollItem}>
                  <Image
                    width={100}
                    height={100}
                    src={item.img}
                    alt={item.alt}
                    className={styles.imge}
                  />
                </div>
              ))}
            </div>
            <button className={styles.scrollButton} onClick={scrollRight}>
              <Image src={arrowRight} alt="left" width={11} height={20} />
            </button>
          </div>
        </div>
        <div className={styles.PricingSection}>
          <div className={styles.SolutionTitle}>
            <h1 className={styles.SolutionTitle1}>Solution</h1>
            <h1 className={styles.SolutionTitle2}>Proposal</h1>
          </div>
          <p className={styles.SolutionsDesc}>
            We offer you a complete solution of different services and
            categories
          </p>
          <div className={styles.AllPrices}>
            <div className={styles.price1}>
              <div className={styles.rowloa}>
                <div className={styles.loader}></div>
                <h3 className={styles.PriceTitle1}>Basic Solution</h3>
              </div>

              <Link
                href=""
                className={styles.SeeAllTextPrice}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDetails();
                }}
              >
                <div>
                  {showDetails ? (
                    <div className={styles.arrow2}>
                      <span className={styles.close}></span>
                      <span className={styles.close}></span>
                    </div>
                  ) : (
                    <div className={styles.arrow1}>
                      <span className={styles.arrowLine}></span>
                      <span className={styles.arrowLine}></span>
                    </div>
                  )}
                </div>
              </Link>

              {showDetails && (
                <div className={styles.details}>
                  <ul>
                    <li>• Device + Platform</li>
                    <li>• Maintenance contract with AI model updates</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.price1}>
              <div className={styles.rowloa}>
                <div className={styles.loader}></div>
                <h3 className={styles.PriceTitle1}>Silver Solution</h3>
              </div>
              <Link
                href=""
                className={styles.SeeAllTextPrice}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDetails2();
                }}
              >
                <div>
                  {showDetails2 ? (
                    <div className={styles.arrow2}>
                      <span className={styles.close}></span>
                      <span className={styles.close}></span>
                    </div>
                  ) : (
                    <div className={styles.arrow1}>
                      <span className={styles.arrowLine}></span>
                      <span className={styles.arrowLine}></span>
                    </div>
                  )}
                </div>
              </Link>

              {showDetails2 && (
                <div className={styles.details}>
                  <ul>
                    <li>• Device + Platform</li>
                    <li>• Web Application</li>
                    <li>• Maintenance contract with AI model updates</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.price1}>
              <div className={styles.rowloa}>
                <div className={styles.loader}></div>
                <h3 className={styles.PriceTitle1}>Gold Solution</h3>
              </div>

              <div
                className={styles.SeeAllTextPrice}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDetails3();
                }}
              >
                {showDetails3 ? (
                  <div className={styles.arrow2}>
                    <span className={styles.close}></span>
                    <span className={styles.close}></span>
                  </div>
                ) : (
                  <div className={styles.arrow1}>
                    <span className={styles.arrowLine}></span>
                    <span className={styles.arrowLine}></span>
                  </div>
                )}
              </div>

              {showDetails3 && (
                <div className={styles.details}>
                  <ul>
                    <li> • Device + Platform</li>
                    <li> • Web Application</li>
                    <li>• Mobile Application</li>

                    <li>• Maintenance contract with AI model updates</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.BlogSection}>
          <div className={styles.SolutionTitle}>
            <h1 className={styles.SolutionTitle1}>Our</h1>
            <h1 className={styles.SolutionTitle2}>Blogs</h1>
          </div>
          <p className={styles.SolutionsDesc}>
            Your resource for the latest insights in Energy Management,
            AI-powered Solutions, and Industry 4.0 trends.
          </p>
          <div className={styles.AllBlog}>
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.Blog1}>
                <div className={styles.BlogIcon}>
                  <Image
                    width={419}
                    height={100}
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
                    <Link
                      className={styles.BlogButton}
                      href={`/blog/${blog.id}`}
                    >
                      Read More
                    </Link>
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
      </div>
    </PageTransition>
  );
};

export default Homee;
