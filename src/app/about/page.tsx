"use client";
import styles from "./index.module.css";
import React from "react";
import PageTransition from "../components/PageTransition";
import Link from "next/link";
import Image from "next/image";
const About: React.FC = () => {
  const founder = [
    {
      name: "Hinda Zribi",
      linkedin: "https://www.linkedin.com/in/hinda-zribi-258555140/",
      facebook: "https://www.facebook.com/nour.essafa.73",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730448418/henda_fmfzae.webp",
      post: "Co-Founder",
    },
    {
      name: "Sabri Mhimdi",
      linkedin: "https://www.linkedin.com/in/sabri-mhimdi-aa636260/",
      facebook: "https://www.facebook.com/nour.essafa.73",
      img: "https://res.cloudinary.com/ddngbriyu/image/upload/v1730885413/Capture_d_%C3%A9cran_2024-11-06_102522_efj596.png",
      post: "Co-Founder",
    },
  ];
  return (
    <PageTransition>
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
      <div className={styles.container}>
        <div className={styles.CibleSection}>
          <div className={styles.column}>
            <h1 className={styles.CibleTitle}>Who We Are ?</h1>
            <div className={styles.loader_line}></div>
          </div>
          <div className={styles.row}>
            {/* <div className={styles.circle}>
              <div className={styles.loader}>
                <div className={styles.loader}>
                  <div className={styles.loader}>
                    <div className={styles.loader}></div>
                  </div>
                </div>
              </div>
            </div> */}
            <p className={styles.CibleDesc}>
              4InA Technologie is a Tunisian startup, founded in November 2020
              and labeled by Startup Act.
            </p>
          </div>
          <div className={styles.row}>
            {/* <div className={styles.circle}>
              <div className={styles.loader}>
                <div className={styles.loader}>
                  <div className={styles.loader}>
                    <div className={styles.loader}></div>
                  </div>
                </div>
              </div>
            </div> */}
            <p className={styles.CibleDesc}>
              4InA operates in the field of energy management and artificial
              intelligence. Our primary focus is the development and design of
              energy management systems.
            </p>
          </div>
        </div>
        <div className={styles.InnovationSection}>
          <h1 className={styles.InnovationTitle}>Our Mission</h1>
          <p className={styles.InnovationDes}>
            We use real-time electricity data to optimize energy consumption,
            reduce costs, and drive sustainable growth. Our goal is to make
            energy management more efficient and effective.
          </p>
          <h1 className={styles.InnovationTitle}>Our Vision</h1>
          <p className={styles.InnovationDes}>
            We envision 4InA Technologie as a catalyst reshaping the future of
            energy management through digitalization and transformative
            AI-driven solutions. We are paving the way for a carbon-free future
            where sustainability and profitability go hand in hand.
          </p>
        </div>
        <div className={styles.DemoSection}>
          <p className={styles.SolutionsDesc}>
            Want to learn more about our innovative approach?
          </p>
          <p className={styles.SolutionsDesc}>
            Request a demo to see our solutions in action
          </p>
          <Link href="/solutions/demo" passHref>
            <button className={styles.buttonDemo}>Book a Demo</button>
          </Link>
        </div>
        <div className={styles.TeamSection}>
          <div className={styles.SolutionTitle}>
            <h1 className={styles.SolutionTitle1}>Our</h1>
            <h1 className={styles.SolutionTitle2}>Team</h1>
          </div>
          <p className={styles.SolutionsDesc1}>
            Driven by a shared commitment to excellence, our team combines
            diverse talents and perspectives to tackle challenges, foster
            innovation, and achieve outstanding results together
          </p>
          <div className={styles.AllTeam1}>
            {founder.map((item, index) => (
              <div key={index} className={styles.Team1}>
                <div className={styles.TeamIcon}>
                  <div className={styles.TeamImageWrapper}>
                    <Image
                      className={styles.TeamImage}
                      src={item.img}
                      alt="team-founder"
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
          <div className={styles.AllTeam2}>
            <div className={styles.Advanages}>
              <div className={styles.Advanage}>Electrical Department</div>
              <div className={styles.Advanage}>IT Department</div>
              <div className={styles.Advanage}>Marketing & HR Department</div>
            </div>
            <div className={styles.Advanages2}>
              {/* //1 */}
              <div className={styles.Advanage2}>Embedded Systems</div>
              {/* //2 */}
              <div className={styles.Advanage2}>Web & Mobile Development</div>
              {/* //3 */}
              <div className={styles.Advanage2}>Artificial Intelligence </div>
              {/* //4 */}
              <div className={styles.Advanage2}>Human Resources (HR)</div>
              {/* //5 */}
              <div className={styles.Advanage2}>Digital Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
export default About;
