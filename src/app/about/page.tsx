"use client"; // If you are using server components, this should be used carefully
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
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.CibleSection}>
       
            <h1 className={styles.CibleTitle}>
            Who We Are ?
            </h1>
            <p className={styles.CibleDesc}>
              4InA Technologie is a Tunisian startup, founded in November 2020
              and labeled by Startup Act. 
            </p>
            <p className={styles.CibleDesc}>
              !4InA operates in the field of energy
              management and artificial intelligence. Our primary focus is the
              development and design of energy management systems.
            </p>
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
                    {/* <Link href={item.facebook}>
                      <i className="fa-brands fa-facebook fa-shake-facebook"></i>
                    </Link> */}
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
