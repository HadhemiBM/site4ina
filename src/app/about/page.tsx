"use client";
import styles from "./index.module.css";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "../components/PageTransition";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateToService = () => {
    router.push("/service");
  };
  const team = [
    {
      name: "Hinda Zribi",
      linkedin: "https://www.linkedin.com/in/nouressafa-c-753456216/",
      facebook: "https://www.facebook.com/nour.essafa.73",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730379959/image_2024-10-31_130650941_fy1vxc.png",

      post: "Data",
    },
    {
      name: "Sabri Mhimdi",
      linkedin: "https://www.linkedin.com/in/nouressafa-c-753456216/",
      facebook: "https://www.facebook.com/nour.essafa.73",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730379861/image_2024-10-31_130511808_ozum3u.png",

      post: "Data",
    },
    {
      name: "Nouressafa Chaabani",
      linkedin: "https://www.linkedin.com/in/nouressafa-c-753456216/",
      facebook: "https://www.facebook.com/nour.essafa.73",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730375202/nour_jrsh79.webp",

      post: "Data",
    },
    {
      name: "Hadhemi Ben Mansour",
      linkedin:
        "https://www.linkedin.com/in/hadhemi-ben-mansour-0241701a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.facebook.com/share/1gHaTjDcGmz2JKWJ/",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730375552/hadhemi_ixxqaq.jpg",

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
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730377673/mariem_hgjohw.webp",

      post: "Data",
    },
  ];
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.CibleSection}>
          <div className={styles.column}>
            <h1 className={styles.CibleTitle}>Who We Are ?</h1>
            <div className={styles.loader_line}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.circle}>
              <div className={styles.loader}>
                <div className={styles.loader}>
                  <div className={styles.loader}>
                    <div className={styles.loader}></div>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.CibleDesc}>
              4InA Technologie is a Tunisian startup, founded in November 2020
              and labeled by Startup Act.
            </p>
          </div>
          <div className={styles.row}>
            <div className={styles.circle}>
              <div className={styles.loader}>
                <div className={styles.loader}>
                  <div className={styles.loader}>
                    <div className={styles.loader}></div>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.CibleDesc}>
              4InA operates in the field of energy management and artificial
              intelligence. Our primary focus is the development and design of
              energy management systems.
            </p>
          </div>
        </div>
        <div className={styles.InnovationSection}>
          <h1 className={styles.InnovationTitle}>
            Innovation and Digital Aspects
          </h1>
          <div className={styles.AllASPECT}>
            <div className={styles.column}>
           
                <div className={styles.InnovationTit}>
                  <h1>Real Time Electric System</h1>
                </div>

                <p className={styles.InnovationDes}>
                  We use real-time electricity data to optimize energy
                  consumption, reduce costs, and drive sustainable growth. Our
                  goal is to make energy management more efficient and
                  effective.
                </p>
              
            </div>
            <div className={styles.column}>
             
                <div className={styles.InnovationTit}>
                  <h1>AI Anomaly Detection & Analyse</h1>
                </div>
                <p className={styles.InnovationDes}>
                  Our AI algorithms help detect and analyze anomalies in
                  electricity data, such as unusual spikes, outliers, and sudden
                  drops in energy consumption. This helps us make more informed
                  decisions and improve our energy management systems.
                </p>
             
            </div>
            <div className={styles.column}>
         
                <div className={styles.InnovationTit}>
                  <h1>Digitisation of manual processes</h1>
                </div>

                <p className={styles.InnovationDes}>
                  We digitise manual processes, such as energy meters, power
                  plants, and control systems, making them more efficient,
                  reliable, and accessible to all. This helps us improve our
                  energy management systems and reduce costs.
                </p>
              </div>
         
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
                    <h3>Monitoring of energy consumption
                    </h3>
                    <p className={styles.contentP} >Monitor energy consumption on-site or remotely to optimize resource usage and identify anomalies.

</p>

                </div>
            </div>
            
            <div className={`${styles.item} ${styles.item2}`}>
                <div className={styles.number}>2</div>
                <div className={styles.content}>
                    <h3>Guidance for energy managers
                    </h3>
                    <p className={styles.contentP} >Provide actionable insights for energy and electricity managers through intelligent machines to enhance decision-making.</p>

                </div>
            </div>
            
            <div className={`${styles.item} ${styles.item3}`}>
                <div className={styles.number}>3</div>
                <div className={styles.content}>
                    <h3>Monitoring Machine Behavior and Predicting Failures</h3>
                    <p className={styles.contentP} >Analyze machine behavior to predict future energy consumption and detect potential faults before they escalate.</p>
                </div>
            </div>
            
            <div className={`${styles.item} ${styles.item4}`}>
                <div className={styles.number}>4</div>
                <div className={styles.content}>
                    <h3>Reducing Maintenance Costs</h3>
                    <p className={styles.contentP} >Lower maintenance costs, reduce energy bills, and mitigate the effects of harmonics for improved operational efficiency.</p>

                </div>
            </div>
        </div>
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
                    <Image
                      className={styles.TeamImage}
                      src={item.img}
                      alt="team"
                      fill
                      style={{ objectFit: "cover" }}
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

export default About;
