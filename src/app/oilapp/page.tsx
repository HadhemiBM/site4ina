"use client";

import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

import PageTransition from "../components/PageTransition";
import Image from "next/image";
import tabs from "../Assests/oilapp/2Tabs_Header.png";
import whatsChart from "../Assests/oilapp/whatsChart.png";
import icon1 from "../Assests/oilapp/icon1.png";
import icon2 from "../Assests/oilapp/icon2.png";
import icon3 from "../Assests/oilapp/icon3.png";
import icon4 from "../Assests/oilapp/icon4.png";
import Zitouna from "../Assests/oilapp/zi1.png";
import telMockUp from "../Assests/oilapp/telMockUp.png";
import Link from "next/link";
import { motion } from "framer-motion";
const OIlapp: React.FC = () => {
  const router = useRouter();
  type ItemProps = {
    icon: StaticImageData;
    title: string;
    desc: string;
  };

  const Item = ({ icon, title, desc }: ItemProps) => (
   <div className={styles.item}>
   <Image
            src={icon}
            width={100}
            height={70}
            className={styles.itemIcon}
            alt="interface application oil"
          />
<div className={styles.text}>
<h6>
 {title}
</h6>
<p>
 {desc}

</p>
</div>
</div>
  );
  return (
    <PageTransition>
      <div className={styles.Container}>
        <div className={styles.Header}>
          <Image
            src={tabs}
            width={600}
            height={600}
            className={styles.tabsImage}
            alt="interface application oil"
          />
          <div className={styles.textContainer}>
            <div className={styles.FirstH1}>
              <h1>Digitally </h1>
              <Image
                src={Zitouna}
                width={170}
                height={40}
                className={styles.ZitounaImage}
                alt="interface application oil"
              />
            </div>
            <h1>Empowered Processes</h1>
            <h6> Simplified & automated</h6>
            <p>
              Digitize every aspect of your operations, client management,
              accounting, and automated reporting all in one seamless
              application
            </p>
            <div className={styles.btns}>
              <Link href="/accueil" passHref>
                <motion.button
                  // onClick={navigateToHome}
                  className={styles.buttonStarted}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/accueil" passHref>
                <motion.button
                  // onClick={navigateToHome}
                  className={styles.buttonDemo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Request Demo
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Whats}>
          <div className={styles.WhatsTitle}>
            <h1>What is </h1>
            <h1 className={styles.WhatsTitle2}>OilAPP? </h1>
          </div>
          <p>
            OilApp is a cutting-edge digital platform designed to revolutionize
            oil production management through complete digitization and
            automation. It simplifies workflows, automates accounting processes,
            and provides real-time tracking of production, finances, and
            reporting all within a single, unified system.
          </p>
          <Image
            src={whatsChart}
            width={900}
            height={900}
            className={styles.tabsImage}
            alt="interface application oil"
          />
        </div>
        <div className={styles.Innovating}>

<h1>Innovating Oil Press Factory Management with a User-Friendly Application </h1>
<div className={styles.InnovatingContent}>
<div className={styles.ContentLeft}>

             <Item icon={icon1} 
             title="End-to-End Automation"
              desc='Make data-driven decisions with predictive analytics'>
</Item>
             <Item icon={icon2} 
             title="Advanced Analytics"
              desc='From the delivery of your clients olives to invoicing, everything is streamlined'>
</Item>
<Item icon={icon3} 
             title=" Secure & Compliant"
              desc='Ensures data protection while meeting industry standards'>
</Item>
             <Item icon={icon4} 
             title="Cloud & Mobile Accessibility"
              desc='Manage your factory operations anytime, anywhere.'>
</Item>
</div>
<Image
            src={telMockUp}
            width={350}
            height={600}
            className={styles.tabsImage}
            alt="interface application oil"
          />
</div>
        </div>
        <div className={styles.Action}>
                  <div className={styles.ActionLeft}>
                    <h1>
  See OilApp in Action!
</h1>
<p>
  Explore how our platform streamlines every step, keeping you informed and up-to-date on workflows and online invoices effortlessly
</p>
        </div>
             <div className={styles.ActionRight}>
                
              <Link href="/accueil" passHref>
                <motion.button
                  // onClick={navigateToHome}
                  className={styles.Actionbutton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/accueil" passHref>
                <motion.button
                  // onClick={navigateToHome}
                  className={styles.Actionbutton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Request Demo
                </motion.button>
              </Link>
       
        </div>

        </div>
        <div className={styles.Tap}>
          <div className={styles.TapTitle}>
            <h1 className={styles.TapTitle1}>
              OilApp
            </h1>
                <h1 className={styles.TapTitle2}>
              Fueling Your Needs, One Tap at a Time!
            </h1>
          </div>
  <div className={styles.Adv}>
  <div className={styles.Advanages}>
              <div className={styles.Advanage}>Client Interface</div>
              <div className={styles.Advanage}>Financial Management</div>
              <div className={styles.Advanage}>Reporting & Insights</div>
            </div>
            <div className={styles.Advanages2}>
              {/* //1.1 */}
              <div className={styles.Advanage2}>Track Delivered Olives</div>
              {/* //1.2 */}
              <div className={styles.Advanage2}>Oil quantity estimation</div>

              {/* //1.3 */}
              <div className={styles.Advanage2}>Real-Time updates </div>
              {/* //1.4 */}

              <div className={styles.Advanage2}>Delivery history </div>
              {/* //1.5 */}

              <div className={styles.Advanage2}>Processing Status</div>
              {/* //2.1  6*/}

              <div className={styles.Advanage2}>Invoicing & Payment   </div>
                {/* //2.2   7*/}

              <div className={styles.Advanage2}>Cost Management   </div>
     {/* //2.3    8*/}

              <div className={styles.Advanage2}>Payment and financing   </div>
                {/* //2.4   9 */}

              <div className={styles.Advanage2}>Financial reports   </div>
              {/* //3.1   10 */}

              <div className={styles.Advanage2}>Automated reports   </div>
                       {/* //3.2   11 */}

              <div className={styles.Advanage2}>Performance analysis    </div>
                       {/* //3.3   12 */}

              <div className={styles.Advanage2}>Resource Optimization  </div>
                       {/* //3.4   13 */}

              <div className={styles.Advanage2}>Data visualization   </div>
            </div>
</div>

      </div>
      </div>
    </PageTransition>
  );
};

export default OIlapp;
