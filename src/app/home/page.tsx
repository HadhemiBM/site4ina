"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";

import Image from "next/image";
import Header from "../components/HeaderSection";
import SpinnerImage from "../Assests/svg/spinner.svg";
import hardware from "../Assests/svg/hardware.svg";
import algo from "../Assests/svg/algo.svg";
import indus from "../Assests/svg/indus.svg";
import decarbonization from "../Assests/svg/decarbonization.svg";
import agritec from "../Assests/svg/agritec.svg";
import software from "../Assests/svg/software.svg";
import power from "../Assests/svg/power.svg";
import arrowLeft from "../Assests/svg/arrowLeft.svg";
import arrowRight from "../Assests/svg/arrowRight.svg";
import arrowService from "../Assests/svg/arrowService.svg";
import blog from "../Assests/svg/blog.svg";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const Homee: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []; // Explicitly declare the type here

    // Show each item one after the other
    const showItems = () => {
      for (let i = 0; i < 4; i++) {
        timers.push(
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, i]);
          }, i * 300) // Adjust timing as necessary (300ms delay)
        );
      }
    };

    showItems();

    // Cleanup timers on unmount
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);
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
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730198659/team1_dwmsk4.jpg",

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
    "Hospitals",
    "Healthcare facilities",
    "Agriculture & Farming",
    "Manufacturing & Industrial",
  ];
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
            {/* <button
          onClick={

            () => {
              scrollRef.current?.scrollIntoView({ behavior: "smooth" });
            }

          } 
           className={styles.buttonDiscover}>Discover</button> */}
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
          {/* <div className={styles.CibleRight}>
            <div className={styles.CibleCont1}>
            <p className={styles.SpinnerDescu1}>Hospitals</p>
</div>
<div className={styles.CibleCont2}>
            <p className={styles.SpinnerDescu}>Healthcare facilities</p>
</div>
<div className={styles.CibleCont3}>
            <p className={styles.SpinnerDescu}>Agriculture & Farming</p>
</div>
<div className={styles.CibleCont4}>
            <p className={styles.SpinnerDescu}>Manufacturing & Industrial</p>
</div>

          </div> */}
          {/* <div className={styles.CibleRight}>
      {visibleItems.includes(0) && (
        <div className={styles.CibleCont1}>
          <p className={styles.SpinnerDescu1}>Hospitals</p>
        </div>
      )}
      {visibleItems.includes(1) && (
        <div className={styles.CibleCont2}>
          <p className={styles.SpinnerDescu}>Healthcare facilities</p>
        </div>
      )}
      {visibleItems.includes(2) && (
        <div className={styles.CibleCont3}>
          <p className={styles.SpinnerDescu}>Agriculture & Farming</p>
        </div>
      )}
      {visibleItems.includes(3) && (
        <div className={styles.CibleCont4}>
          <p className={styles.SpinnerDescu}>Manufacturing & Industrial</p>
        </div>
      )}
    </div> */}
          {/* <div className={styles.CibleRight}>
      {visibleItems.includes(0) && (
        <div className={`${styles.CibleCont} ${visibleItems.includes(0) ? styles.show : ''}`}>
          <p className={styles.SpinnerDescu1}>Hospitals</p>
        </div>
      )}
      {visibleItems.includes(1) && (
        <div className={`${styles.CibleCont} ${visibleItems.includes(1) ? styles.show : ''}`}>
          <p className={styles.SpinnerDescu}>Healthcare facilities</p>
        </div>
      )}
      {visibleItems.includes(2) && (
        <div className={`${styles.CibleCont} ${visibleItems.includes(2) ? styles.show : ''}`}>
          <p className={styles.SpinnerDescu}>Agriculture & Farming</p>
        </div>
      )}
      {visibleItems.includes(3) && (
        <div className={`${styles.CibleCont} ${visibleItems.includes(3) ? styles.show : ''}`}>
          <p className={styles.SpinnerDescu}>Manufacturing & Industrial</p>
        </div>
      )}
    </div> */}
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
            The powerful combination of our solutions ensures reliable
            performance, seamless monitoring, and real-time optimization,
            driving efficiency and innovation across various industries.
          </p>
          <div className={styles.AllSolutions}>
            <div className={styles.Solution2}>
              <h3 className={styles.SolTitle1}>Industrial</h3>
              <p className={styles.SolutionDesc1}>
                Our advanced sensors collect real-time energy usage data and
                sends information directly to our software.
              </p>
              <div className={styles.SolutionCircle}>
                <Image className={styles.Image} src={indus} alt="hardware" />
              </div>
            </div>
            <div className={styles.Solution1}>
              <div className={styles.SolutionCircle}>
                <Image
                  className={styles.Image}
                  src={decarbonization}
                  alt="hardware"
                />
              </div>
              <h3 className={styles.SolTitle1}>Decarbonization</h3>
              <p className={styles.SolutionDesc1}>
                An all-in-one, intuitive dashboard that enables you to visualize
                your energy usage data, make informed decisions, and reduce
                energy costs.
              </p>
            </div>
            <div className={styles.Solution2}>
              <h3 className={styles.SolTitle1}>Agritech</h3>
              <p className={styles.SolutionDesc1}>
                Data aggregation and forecasting to ensure that you have the
                energy you need, when you need it.
              </p>
              <div className={styles.SolutionCircle}>
                <Image className={styles.Image} src={agritec} alt="hardware" />
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
                  Technical Support
                  </h6>
                  <p className={styles.ServiceDesc}>
                  Our dedicated team is here to resolve issues and maximize system efficiency.
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
                  <h6 className={styles.ServiceTitle}>Development (Web and Mobile)</h6>
                  <p className={styles.ServiceDesc}>
                  Our intuitive platforms, available on both web and mobile, are tailored to meet your business needs
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
                  <h6 className={styles.ServiceTitle}>Migration</h6>
                  <p className={styles.ServiceDesc}>
                  Our team facilitates EMS upgrades for a seamless transition to enhanced solutions without disrupting your operations
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
                  <h6 className={styles.ServiceTitle}>Training & Accompaniement</h6>
                  <p className={styles.ServiceDesc}>
                  We offer on-site and computer-based training to ensure your team is fully equipped to utilize our solutions effectively
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div>
            {/* service5 */}
            {/* <div className={styles.Service1}>
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
                    Assistance after installation
                  </h6>
                  <p className={styles.ServiceDesc}>
                    We provide experts and engineers for energy audit and remote
                    assistance
                  </p>
                </div>
                <Link className={styles.ServiceImg} href="/services">
                  <Image src={arrowService} alt="service" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.PartnerSection}>
          <div className={styles.SolutionTitle}>
            <h1 className={styles.SolutionTitle1}>Our</h1>
            <h1 className={styles.SolutionTitle2}>Partners</h1>
          </div>
          <p className={styles.SolutionsDesc}>
            4ina Technology, we believe in the power of collaboration. Together,
            we leverage our strengths to create cutting-edge solutions that
            drive success across various sectors.
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
            <h1 className={styles.SolutionTitle1}>Pricing</h1>
            <h1 className={styles.SolutionTitle2}>Plans</h1>
          </div>
          <p className={styles.SolutionsDesc}>
            We offer flexible pricing options designed to meet the diverse needs
            of our clients.
          </p>
          <div className={styles.AllPrices}>
            <div className={styles.price1}>
              <div className={styles.priceHed}>
                <Image
                  className={styles.ImageSpin}
                  src={SpinnerImage}
                  alt="spinner"
                />
                <h3 className={styles.PriceTitle1}>Basic Plan</h3>
              </div>
              <p className={styles.Desc1}>For Small Size Business</p>
            </div>
            <div className={styles.price1}>
              <div className={styles.priceHed}>
                <Image
                  className={styles.ImageSpin}
                  src={SpinnerImage}
                  alt="spinner"
                />
                <h3 className={styles.PriceTitle1}>Standard Plan</h3>
              </div>
              <p className={styles.Desc1}>For Medium Size Business</p>
            </div>
            <div className={styles.price1}>
              <div className={styles.priceHed}>
                <Image
                  className={styles.ImageSpin}
                  src={SpinnerImage}
                  alt="spinner"
                />
                <h3 className={styles.PriceTitle1}>Advanced Plan</h3>
              </div>
              <p className={styles.Desc1}>For Large Size Business</p>
            </div>
          </div>
        </div>
        <div className={styles.BlogSection}>
          <div className={styles.SolutionTitle}>
            <h1 className={styles.SolutionTitle1}>Our</h1>
            <h1 className={styles.SolutionTitle2}>Blogs</h1>
          </div>
          <p className={styles.SolutionsDesc}>
            Stay informed about our latest developments, updates, and trends.
          </p>
          <div className={styles.AllBlog}>
            {/* blog1 */}
            <div className={styles.Blog1}>
              <div className={styles.BlogIcon}>
                <Image className={styles.BlogImage} src={blog} alt="blog" />
              </div>
              <div className={styles.BlogContent}>
                <h6 className={styles.BlogTitle}>Low energy costs</h6>
                <p className={styles.BlogDesc}>
                  One of the most significant benefits of owning an Eco Haven
                  Realty Home is lower energy costs. Our eco-friendly homes are
                  designed to use less energy with our solar powered system,
                  saving money on bills.
                </p>
                <div className={styles.Blogfooter}>
                  <p className={styles.BlogDateText}>July 12, 2021</p>

                  <Link className={styles.BlogButton} href="/blog">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* blog2 */}
            <div className={styles.Blog1}>
              <div className={styles.BlogIcon}>
                <Image className={styles.BlogImage} src={blog} alt="blog" />
              </div>
              <div className={styles.BlogContent}>
                <h6 className={styles.BlogTitle}>Low energy costs</h6>
                <p className={styles.BlogDesc}>
                  One of the most significant benefits of owning an Eco Haven
                  Realty Home is lower energy costs. Our eco-friendly homes are
                  designed to use less energy with our solar powered system,
                  saving money on bills.
                </p>
                <div className={styles.Blogfooter}>
                  <p className={styles.BlogDateText}>July 12, 2021</p>

                  <Link className={styles.BlogButton} href="/blog">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* blog3 */}
            <div className={styles.Blog1}>
              <div className={styles.BlogIcon}>
                <Image className={styles.BlogImage} src={blog} alt="blog" />
              </div>
              <div className={styles.BlogContent}>
                <h6 className={styles.BlogTitle}>Low energy costs</h6>
                <p className={styles.BlogDesc}>
                  One of the most significant benefits of owning an Eco Haven
                  Realty Home is lower energy costs. Our eco-friendly homes are
                  designed to use less energy with our solar powered system,
                  saving money on bills.
                </p>
                <div className={styles.Blogfooter}>
                  <p className={styles.BlogDateText}>July 12, 2021</p>

                  <Link href="/blog" className={styles.BlogButton}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* see all */}
          </div>
          {/* <div className={styles.SeeAll}>
            <Link className={styles.SeeAllText} href="/blog">
              See All Blogs
            </Link>

            <Image
              className={styles.SeeAllImage}
              src={arrowService}
              alt="see all"
            />
          </div> */}
          {/* <div className={styles.SeeAll}> */}
          <Link className={styles.SeeAllText} href="/posts/blog">
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>

          {/* </div> */}
        </div>
        <div className={styles.TeamSection}>
          <div className={styles.SolutionTitle}>
            <h1 className={styles.SolutionTitle1}>Our</h1>
            <h1 className={styles.SolutionTitle2}>Team</h1>
          </div>
          <p className={styles.SolutionsDesc}>
            Meet our team of experts who have been working together for over 20
            years.
          </p>
          <div className={styles.AllTeam}>
            <style>{`
       @keyframes shakeLinkedIn {
    0% { transform: translate(1px, 0); }
    25% { transform: translate(-1px, 0); }
    50% { transform: translate(1px, 0); }
    75% { transform: translate(-1px, 0); }
    100% { transform: translate(1px, 0); }
}

@keyframes shakeFacebook {
    0% { transform: rotate(5deg); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(5deg); }
}

.fa-shake-linkedin {
    animation: shakeLinkedIn 1s infinite; /* Adjust duration and iteration as needed */
}

.fa-shake-facebook {
    animation: shakeFacebook 1s infinite; /* Adjust duration and iteration as needed */
}
      `}</style>
            {team.map((item, index) => (
              <div key={index} className={styles.Team1}>
                <div className={styles.TeamIcon}>
                  <div className={styles.TeamImageWrapper}>
                    {" "}
                    {/* New wrapper for Image */}
                    <Image
                      className={styles.TeamImage}
                      src={item.img}
                      alt="team"
                      fill // Use fill for responsive behavior
                      style={{ objectFit: "cover" }} // Maintain aspect ratio
                    />
                  </div>
                </div>
                <div className={styles.column}>
                  <div className={styles.TeamContent}>
                    <h6 className={styles.TeamName}>{item.name}</h6>
                    <p className={styles.TeamDesc}>{item.post}</p>
                  </div>
                  <div className={styles.TeamSocial}>
                    <Link href={item.linkedin}>
                      <i className="fa-brands fa-linkedin fa-shake-facebook"></i>
                    </Link>
                    <Link href={item.facebook}>
                      <i className="fa-brands fa-facebook fa-shake-facebook"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Homee;
