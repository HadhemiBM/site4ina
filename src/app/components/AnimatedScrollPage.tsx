"use client";
import { useScroll, useTransform, motion } from "motion/react"; // make sure to import from motion/react
import { useRef } from "react";
import { MotionValue } from "motion/react"; // import MotionValue from motion/react
import Image from "next/image";
import styles from "../services/index2.module.css";
import { services } from "../data/serviceData";
import service from "../Assests/tech.jpg";
import Data from "../Assests/hard.jpg";
import web from "../Assests/soft.png";
import iso from "../Assests/iso.png";
import consult from "../Assests/consult.jpg";
import integration from "../Assests/integration.jpg";
interface SectionProps {
  scrollYProgress: MotionValue<number>; // Use MotionValue from motion/react
}

export default function AnimatedScrollPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
<main
  ref={container}
  className="relative h-[420vh]"
  
>


      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
      <Section4 scrollYProgress={scrollYProgress} />
      <Section5 scrollYProgress={scrollYProgress} />

    </main>
  );
}

const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 0.20], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, -5]);
  

  return (
    <motion.section
    style={{ scale, rotate, width: "100%" ,
      // backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255), rgba(90, 85, 247, 0.52), rgb(255, 255, 255))",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    // className="sticky top-0 h-screen bg-gradient-to-t to-[#fff8e5] from-[#d9e9f7] flex flex-col items-center justify-center text-black"
  >
    {/* <div 
   className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_0.px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
   bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
    />  */}
    <article       style={{width: "90%",height:"80vh" }}  className="  mx-auto relative z-10 ">
      <div id="technical-support" className={styles.service}>
        <div className={styles.serviceIconLeft}>
          <Image src={service} alt="service" className={styles.techImage} />
        </div>
        <div className={styles.serviceContentLeft}>
          <div className={styles.row}>
            {/* <i className="fa-solid fa-circle"></i> */}
            <h6> • Technical Support and Maintenance</h6>
          </div>
          <p className={styles.serviceContent_desc}>
            At 4InA Technologie, we understand the importance of effectively
            managing your energy operations by providing the right support at
            the right time.
          </p>
          <p className={styles.serviceContent_desc}>
            We provide prompt, expert assistance to resolve any technical
            issues, ensuring minimal downtime and uninterrupted operations.
            Our support and maintenance service include:
          </p>
          <p className={styles.serviceContent_descc}>
            • On-Demand 24/7 Availability
            <br></br>• Certified Expertise Advanced
            <br></br>• Tools and Methodology
            <br></br> • Specialized Support Team
          </p>
        </div>
      </div>
    </article>
  </motion.section>
  );
};

const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0.20, 0.40], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, -5]);
  

  return (
    <motion.section
      style={{ scale, rotate, width: "100%",
        // backgroundImage: "linear-gradient(180deg,rgb(255, 255, 255), var(--blue))",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      // className="sticky top-0 h-screen bg-gradient-to-t to-[#fff8e5] from-[#d9e9f7] flex flex-col items-center justify-center text-black"

    >
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
      <article       style={{width: "90%" }}  className="  mx-auto relative z-10 ">
        <div id="technical-support" className={styles.service}>
          
          <div className={styles.serviceContentLeft}>
            <div className={styles.row}>
              {/* <i className="fa-solid fa-circle"></i> */}
              <h6> • Hardware Devolopment</h6>
            </div>
            <p className={styles.serviceContent_desc}>
                 From concept to production, our hardware development service
                 specialized in creating hardware that are customized to meet
                 your unique energy management requirements.
               </p>
               <p className={styles.serviceContent_desc}>
                 We develop robust, high-performance devices that seamlessly
                 integrate with your existing systems. It includes:
               </p>
               <p className={styles.serviceContent_descc}>
                 • Tailored design
                 <br></br>• Advanced technology AI and IOT
               </p>
             </div>
             <div className={styles.serviceIcon}>
               <Image src={Data} alt="service" className={styles.techImage} />
             </div>
           </div>
      </article>
    </motion.section>
  );
};
const Section3 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0.5, 0.75], [0, -5]);
  

  return (
    <motion.section
      style={{ scale, rotate, width: "100%" }} 
        // className="sticky top-0 h-screen bg-gradient-to-t to-[#d9e9f7] from-[#fff8e5] flex flex-col items-center justify-center text-black"
    >
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
      <article       style={{width: "90%" }}  className="  mx-auto relative z-10 ">
        <div id="technical-support" className={styles.service}>
        <div className={styles.serviceIconLeft}>
          <Image src={web} alt="service" className={styles.techImage} />
        </div>
          <div className={styles.serviceContentLeft}>
            <div className={styles.row}>
              {/* <i className="fa-solid fa-circle"></i> */}
              <h6> • Software devolopment</h6>
            </div>
            <p className={styles.serviceContent_desc}>
                 4InA Technologie work closely with you to develop intuitive,
                 scalable, and tailored web and mobile easy to use dashboard that
                 generates instantous insight and report to manage your energy
                 with ease and with precision at the same time. Our offerings
                 include:
               </p>
               <p className={styles.serviceContent_descc}>
                 • Software built specifically for your energy management goals
                 <br></br>• Web and mobile applications designed to ensure
                 accessibility from any device
                 <br></br>• Tools that enable you to monitor, analyze, and
                 optimize energy usage on the go with real time data access.
               </p>
             </div>
           </div>
      </article>
    </motion.section>
  );
};
const Section4 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0.75, 1], [0, -5]);
  

  return (
    <motion.section
      style={{ scale, rotate, width: "100%" }} 
      // className="sticky top-0 h-screen bg-gradient-to-t to-[#fff8e5] from-[#d9e9f7] flex flex-col items-center justify-center text-black"
    >
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_0.px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
      <article       style={{width: "90%" }}  className="  mx-auto relative z-10 ">
      <div  className={styles.serviceRight}>
             <div className={styles.serviceContentRight}>
               <div className={styles.row}>
                 <h6> • Consulting</h6>
               </div>

               <p className={styles.serviceContent_desc}>
                 Your business can confidently address its energy challenges
                 while building a path toward sustainable growth and greater ROI.
                 We offer personalized recommendations aligned with your business
                 goal after conducting in-depth assessments to uncover
                 inefficiencies to enable targeted improvement and develop
                 customized strategies.
               </p>
             </div>
             <div className={styles.serviceIcon}>
               <Image src={consult} alt="service" className={styles.techImage} />
             </div>
           </div>
      </article>
    </motion.section>
  );
};
const Section5 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0.5, 0.75], [0, -5]);
  

  return (
    <motion.section
      style={{ scale, rotate, width: "100%" }} 
        // className="sticky top-0 h-screen bg-gradient-to-t to-[#d9e9f7] from-[#fff8e5] flex flex-col items-center justify-center text-black"
    >
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
      <article       style={{width: "90%" }}  className="  mx-auto relative z-10 ">
        <div id="technical-support" className={styles.service}>
        <div className={styles.serviceIconLeft}>
          <Image src={iso} alt="service" className={styles.techImage} />
        </div>
          <div className={styles.serviceContentLeft}>
            <div className={styles.row}>
              {/* <i className="fa-solid fa-circle"></i> */}
              <h6> • Accredited Certification</h6>
            </div>
            <p className={styles.serviceContent_desc}>
            ISO 50001 is an international standard that applies to
                 organizations of any size and provides requirements for
                 establishing, managing and improving their energy consumption
                 and efficiency. It helps organizations establish, implement, and
                maintain practices for more efficient energy use.
               </p>
               <p className={styles.serviceContent_desc}>
               The Certification in ISO 50001 reflects your dedication to
                 reducing energy consumption, enhancing operational efficiency,
                 and minimizing environmental impact.
                 <br></br>  We guide through each step of the ISO 50001 Certification
                                  process.
               </p>
             </div>
           </div>
      </article>
    </motion.section>
  );
};