"use client";
import styles from "./index.module.css";
import React from "react";
import { useEffect, useRef } from "react";
import PageTransition from "../components/PageTransition";
import { useRouter } from 'next/navigation';
import service from "../Assests/tech.jpg";

import Image from "next/image";
import Data from "../Assests/hard.jpg";
import web from "../Assests/soft.png";
import iso from "../Assests/iso.png";
import consult from "../Assests/consult.jpg";
import integration from "../Assests/integration.jpg";

const Service: React.FC = () => {
  const SmartSectionRef = useRef<HTMLDivElement | null>(null);
  const DataSectionRef = useRef<HTMLDivElement | null>(null);
  const MobileSectionRef = useRef<HTMLDivElement | null>(null);
  const WebSectionRef = useRef<HTMLDivElement | null>(null);
  const AssistSectionRef = useRef<HTMLDivElement | null>(null);
  const certifSectionRef = useRef<HTMLDivElement | null>(null);
  const SmartSection = () => {
    SmartSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const DataSection = () => {
    DataSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const WebSection = () => {
    WebSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const MobileSection = () => {
    MobileSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const AssistanceSection = () => {
    AssistSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const certifSection = () => {
    certifSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <div className={styles.Left}>
            <h1 className={styles.title}>Services</h1>
            <p className={styles.desc}>
              Explore our comprehensive services that cover every aspect of
              energy management. We are committed to assisting your company in
              prospering in the context of sustainable energy.
            </p>
          </div>
          <div className={styles.Right}>
            <div className={styles.content}>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={SmartSection}>Technical Support and Maintenance</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>

                <p onClick={DataSection}>Hardware Devolopment</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={WebSection}>Software devolopment</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={MobileSection}>Consulting</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={AssistanceSection}>Integration</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={certifSection}>Accredited Certification</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.AllService}>
        <div ref={SmartSectionRef}></div>

          <div   id="technical-support" className={styles.service}>
            <div  className={styles.serviceIconLeft}>
              <Image src={service} alt="service" className={styles.techImage} />
            </div>
            <div className={styles.serviceContentLeft}>
              <div className={styles.row}>
                {/* <i className="fa-solid fa-circle"></i> */}
                <h6> • Technical Support and Maintenance</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                At 4InA Technologie, we understand the importance of effectively
                managing your energy operations by providing the right support
                at the right time.
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
          <div ref={DataSectionRef}></div>

          <div  className={styles.serviceRight}>
            <div className={styles.serviceContentRight}>
              <div className={styles.row}>
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
          <div ref={WebSectionRef}></div>

          <div  className={styles.service}>
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
<div ref={MobileSectionRef}></div>
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
<div ref={AssistSectionRef}></div>

          <div  className={styles.service}>
            <div className={styles.serviceIconLeft}>
              <Image
                src={integration}
                alt="service"
                className={styles.techImage}
              />
            </div>
            <div className={styles.serviceContentLeft}>
              <div className={styles.row}>
                {/* <i className="fa-solid fa-circle"></i> */}
                <h6> • Integration</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                Our Integration services ensure that new updates and customized
                features are seamlessly incorporated into your existing energy
                management systems. We implement new updates and integrations
                without disrupting your current operation.
              </p>
              <p className={styles.serviceContent_desc}>
                We offer as well post-integration service to verify
                compatibility and performance.
              </p>
            </div>
          </div>
          <div ref={certifSectionRef}></div>

          <div  className={styles.serviceRight}>
            <div className={styles.serviceContentRight}>
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
              </p>
              <p className={styles.serviceContent_desc}>
                We guide through each step of the ISO 50001 Certification
                process.
              </p>
            </div>
            <div className={styles.serviceIcon}>
              <Image src={iso} alt="service" className={styles.techImage} />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Service;
// "use client";
// import styles from "./index.module.css";
// import React, { useEffect, useRef } from "react";
// import PageTransition from "../components/PageTransition";

// import Image from "next/image";

// // Import images
// import serviceImg from "../Assests/tech.jpg";
// import dataImg from "../Assests/hard.jpg";
// import webImg from "../Assests/soft.png";
// import isoImg from "../Assests/iso.png";
// import consultImg from "../Assests/consult.jpg";
// import integrationImg from "../Assests/integration.jpg";
// import { useSearchParams } from "next/navigation";

// const Service: React.FC = () => {
//   const searchParams = useSearchParams();
//   const section = searchParams.get("section");
//   type SectionKey = "technical-support" | "hardware-development" | "software-development" | "consulting" | "integration" | "accredited-certification";
//   const SmartSectionRef = useRef<HTMLDivElement | null>(null);
//   const DataSectionRef = useRef<HTMLDivElement | null>(null);
//   const MobileSectionRef = useRef<HTMLDivElement | null>(null);
//   const WebSectionRef = useRef<HTMLDivElement | null>(null);
//   const AssistSectionRef = useRef<HTMLDivElement | null>(null);
//   const certifSectionRef = useRef<HTMLDivElement | null>(null);

//   // Define a map of section names to refs
//   const sectionRefs: Record<SectionKey, React.RefObject<HTMLDivElement>> = {
//     "technical-support": SmartSectionRef,
//     "hardware-development": DataSectionRef,
//     "software-development": WebSectionRef,
//     "consulting": MobileSectionRef,
//     "integration": AssistSectionRef,
//     "accredited-certification": certifSectionRef,
//   };
//   // // Scroll function
//   // const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
//   //   sectionRef.current?.scrollIntoView({ behavior: "smooth" });
//   // };
 
//   useEffect(() => {
//     if (section && sectionRefs[section as SectionKey]) {
//       const timeoutId = setTimeout(() => {
//         sectionRefs[section as SectionKey].current?.scrollIntoView({ behavior: "smooth" });
//       }, 100); // Small delay to allow rendering

//       return () => clearTimeout(timeoutId);
//     }
//   }, [section]);
//   return (
//     <PageTransition>
//       <div className={styles.container}>
//         <div className={styles.Header}>
//           <div className={styles.Left}>
//             <h1 className={styles.title}>Services</h1>
//             <p className={styles.desc}>
//               Explore our comprehensive services that cover every aspect of energy management. We are committed to assisting your company in prospering in the context of sustainable energy.
//             </p>
//           </div>
//           <div className={styles.Right}>
//             <div className={styles.content}>
//               <div id="technical-support" className={styles.RightDesc} ref={SmartSectionRef}>
//                 <div className={styles.loader}></div>
//                 <p>Technical Support and Maintenance</p>
//               </div>
//               <div className={styles.RightDesc} ref={DataSectionRef}>
//                 <div className={styles.loader}></div>
//                 <p>Hardware Development</p>
//               </div>
//               <div className={styles.RightDesc} ref={WebSectionRef}>
//                 <div className={styles.loader}></div>
//                 <p>Software Development</p>
//               </div>
//               <div className={styles.RightDesc} ref={MobileSectionRef}>
//                 <div className={styles.loader}></div>
//                 <p>Consulting</p>
//               </div>
//               <div className={styles.RightDesc}ref={AssistSectionRef}>
//                 <div className={styles.loader}></div>
//                 <p>Integration</p>
//               </div>
//               <div className={styles.RightDesc} ref={certifSectionRef}>
//                 <div className={styles.loader}></div>
//                 <p>Accredited Certification</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.AllService}>
//           <div ref={SmartSectionRef} className={styles.service}>
//             <div className={styles.serviceIconLeft}>
//               <Image src={serviceImg} alt="Technical Support" className={styles.techImage} />
//             </div>
//             <div className={styles.serviceContentLeft}>
//               <h6> • Technical Support and Maintenance</h6>
//               <p className={styles.serviceContent_desc}>
//                 At 4InA Technologie, we understand the importance of effectively managing your energy operations by providing the right support at the right time.
//               </p>
//               <p className={styles.serviceContent_descc}>
//                 • On-Demand 24/7 Availability
//                 <br />• Certified Expertise Advanced
//                 <br />• Tools and Methodology
//                 <br />• Specialized Support Team
//               </p>
//             </div>
//           </div>

//           <div ref={DataSectionRef} className={styles.serviceRight}>
//             <div className={styles.serviceContentRight}>
//               <h6> • Hardware Development</h6>
//               <p className={styles.serviceContent_desc}>
//                 From concept to production, our hardware development service specializes in creating hardware customized to meet your unique energy management requirements.
//               </p>
//               <p className={styles.serviceContent_descc}>
//                 • Tailored Design
//                 <br />• Advanced Technology AI and IoT
//               </p>
//             </div>
//             <div className={styles.serviceIcon}>
//               <Image src={dataImg} alt="Hardware Development" className={styles.techImage} />
//             </div>
//           </div>

//           <div ref={WebSectionRef} className={styles.service}>
//             <div className={styles.serviceIconLeft}>
//               <Image src={webImg} alt="Software Development" className={styles.techImage} />
//             </div>
//             <div className={styles.serviceContentLeft}>
//               <h6> • Software Development</h6>
//               <p className={styles.serviceContent_desc}>
//                 4InA Technologie works closely with you to develop intuitive, scalable web and mobile applications for real-time energy management insights.
//               </p>
//             </div>
//           </div>

//           <div ref={MobileSectionRef} className={styles.serviceRight}>
//             <div className={styles.serviceContentRight}>
//               <h6> • Consulting</h6>
//               <p className={styles.serviceContent_desc}>
//                 We offer personalized recommendations aligned with your business goals to address energy challenges sustainably and maximize ROI.
//               </p>
//             </div>
//             <div className={styles.serviceIcon}>
//               <Image src={consultImg} alt="Consulting" className={styles.techImage} />
//             </div>
//           </div>

//           <div ref={AssistSectionRef} className={styles.service}>
//             <div className={styles.serviceIconLeft}>
//               <Image src={integrationImg} alt="Integration" className={styles.techImage} />
//             </div>
//             <div className={styles.serviceContentLeft}>
//               <h6> • Integration</h6>
//               <p className={styles.serviceContent_desc}>
//                 Our Integration services incorporate new updates and features seamlessly into your existing energy management systems.
//               </p>
//             </div>
//           </div>

//           <div ref={certifSectionRef} className={styles.serviceRight}>
//             <div className={styles.serviceContentRight}>
//               <h6> • Accredited Certification</h6>
//               <p className={styles.serviceContent_desc}>
//                 ISO 50001 Certification helps organizations manage and improve energy efficiency. We guide you through each step of the certification process.
//               </p>
//             </div>
//             <div className={styles.serviceIcon}>
//               <Image src={isoImg} alt="Certification" className={styles.techImage} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageTransition>
//   );
// };

// export default Service;
