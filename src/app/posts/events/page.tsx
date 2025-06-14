"use client";
import styles from "./index.module.css";
import React, { useState } from "react";
import { useRef } from "react";
import PageTransition from "../../components/PageTransition";
import parti from "../../Assests/svg/parti.svg";
import foire from '../../Assests/foire.png'
import foire2 from '../../Assests/foire2.png'
import Image from "next/image";
import Video from "./video";
import Video2 from "./video2";
import Modal from "./Modal";
import { Lens } from "@/components/ui/lens";
const Events: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const handleImageClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <h1 className={styles.titleHead}>Events</h1>
          <p className={styles.desc}>
            Here, you can explore a diverse line up of events tailored for
            enthusiasts, professionals, and curious minds alike. From hands-on
            workshops and industry seminars to casual networking sessions, our
            events offer a chance to learn, engage, and grow.
          </p>
        </div>
        <div className={styles.AllEvents}>
       {/* eventsssss */}
              <div data-aos="fade-up" className={styles.events1}>
      <div data-aos="fade-up" data-aos-delay="200" className={styles.eventHeader}>
        <h2 className={styles.eventTitle}>
        Official Visit of the Democratic Republic of Congo Delegation to 4InA Technologie
        </h2>
       <p className={styles.eventDesc}>

 `We had the honor of welcoming a high-level delegation from the Democratic Republic of Congo, led by H.E. Kibasa Maliba Augustin, Minister of Posts and Digital Telecommunications, to our offices at Manouba Technopark. The delegation included key digital leaders such as Dominique Migisha (ADN) and Marie Monzele Kalala, alongside Tunisian representatives.
<br/> <strong>Purpose of the Visit:</strong><br/>
- Explore collaboration between DRC’s digital vision and 4InA’s AI- and IoT-powered smart energy solutions.<br/>
- Address energy transition challenges and opportunities in Africa.<br/>
- Initiate future Tunisia–DRC technological partnerships.<br/>
This impactful exchange reinforced the role of innovation in shaping Africa’s sustainable energy future.`
</p>
      </div>
      <Lens hovering={hovering} setHovering={setHovering}>
      <Image
        src={foire}
        height="300"
        width="700"
        alt="Official Visit of the Democratic Republic of Congo Delegation to 4InA Technologie"
        onClick={handleImageClick}
        style={{ cursor: 'zoom-in' }}
      />
      </Lens>
{isOpen && (
  <Modal onClose={closeModal}>
    <img
      src={parti.src}
      alt="Participation"
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        objectFit: "contain",    
      }}
    />
  </Modal>
)}
    </div>
            {/* eventsssss */}
              <div data-aos="fade-up" className={styles.events1}>
      <div data-aos="fade-up" data-aos-delay="200" className={styles.eventHeader}>
        <h2 className={styles.eventTitle}>
         4InA Technologie at PetroAfrica 2025 - Powering Africa’s sustainable energy 
        </h2>
        <p className={styles.eventDesc}>
        `We proudly participated in <strong>PetroAfrica 2025</strong>, held in Tunis, a landmark event bringing together energy professionals, innovators, and government representatives from across Africa and beyond. 
The event served as a powerful platform to highlight our <strong>cutting-edge energy management solutions</strong>, combining <strong>AI, IoT, and real-time monitoring</strong> to drive sustainable transformation in the energy sector.
During the event, our team presented the latest version of our <strong>smart hardware and software systems</strong>, tailored for industrial energy optimization and predictive maintenance.`
        </p>
      </div>
      <Lens hovering={hovering} setHovering={setHovering}>
      <Image
        src={foire2}
        height="300"
        width="500"
        alt="4InA Technologie at PetroAfrica 2025 - Powering Africa’s sustainable energy "
        onClick={handleImageClick}
        style={{ cursor: 'zoom-in' }}
      />
      </Lens>
{isOpen && (
  <Modal onClose={closeModal}>
    <img
      src={parti.src}
      alt="Participation"
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        objectFit: "contain",    
      }}
    />
  </Modal>
)}
    </div>
          <div data-aos="fade-up" className={styles.events1}>
            <div data-aos="fade-up"data-aos-delay="200" className={styles.eventHeader}>
              <h2 className={styles.eventTitle}>
                Join Our Co-Founder "Sabri Mhimdi" on Express FM
              </h2>
              <p className={styles.eventDesc}>
                Tune in as our co-founder, "Sabri Mhimdi", shares valuable
                insights on AI and embedded systems on Express FM. With his
                expertise and forward-thinking perspective, Sabri explores the
                latest trends, challenges, and the evolving landscape of our
                startup. Whether you're a professional, enthusiast, or simply
                curious, this interview provides a compelling glimpse into the
                innovations and ideas shaping the future of technologie. Don’t
                miss it!
              </p>
            </div>
            <Video />
          </div>
          <div data-aos="fade-up" className={styles.events1}>
            <div data-aos="fade-up" data-aos-delay="200"  className={styles.eventHeader2}>
              <h2 className={styles.eventTitle}>
                4INA TECHNOLOGIE’s Participation in the Agritech Program
              </h2>
              <p className={styles.eventDesc}>
                We’re excited to share our involvement in the Agritech program,
                where 4INA TECHNOLOGIE showcased its innovative solutions for
                the agricultural sector in Tunisia. Sabri Mhimdi, our CTO and
                founder, reflects on the experience: “It was an excellent and
                successful experience, where we met many new people and learned
                so much.” With support from Innov'i-EU4Innovation, funded by the
                European Union and implemented by Expertise France, 4INA
                TECHNOLOGIE continues its commitment to developing technological
                solutions that strengthen and enhance Tunisia's innovation
                ecosystem. Discover how our startup is contributing to the
                transformation of agriculture!
              </p>
            </div>
            <Video2 />
          </div>
          <div data-aos="fade-up" className={styles.events1}>
      <div data-aos="fade-up" data-aos-delay="200" className={styles.eventHeader}>
        <h2 className={styles.eventTitle}>
          4InA Technologie Shines in the Digital Energy Challenge
        </h2>
        <p className={styles.eventDesc}>
        We are proud to announce 4InA Technologie’s remarkable achievement in the Digital Energy Challenge, organized by the French Development Agency (AFD) in partnership with ADEME and the European Union. Selected from 168 applicants, 4InA Technologie stood out as one of only nine winners from Africa, including five innovative startups and four energy operators.
     This experience has not only enriched our journey but also strengthened our dedication to excellence and innovation in the energy sector. Being part of this esteemed program is both a milestone and a motivation to continue driving impactful solutions for a sustainable energy future in Africa.
        </p>
      </div>
      <Lens hovering={hovering} setHovering={setHovering}>
      <Image
        src={parti}
        height="300"
        width="700"
        alt="4InA Technologie Shines in the Digital Energy Challenge"
        onClick={handleImageClick}
        style={{ cursor: 'zoom-in' }}
      />
      </Lens>
{isOpen && (
  <Modal onClose={closeModal}>
    <img
      src={parti.src}
      alt="Participation"
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        objectFit: "contain",
      }}
    />
  </Modal>
)}
    </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Events;
