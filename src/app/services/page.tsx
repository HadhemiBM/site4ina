
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './index.module.css';
import Image from "next/image";

import { services } from '../data/serviceData';

export default function ServicePage() {
  const [index, setIndex] = useState(0);

  // const handleScroll = (e: WheelEvent) => {
  //   if (e.deltaY > 0 && index < services.length - 1) {
  //     setIndex((prev) => prev + 1);
  //   } else if (e.deltaY < 0 && index > 0) {
  //     setIndex((prev) => prev - 1);
  //   }
  // };
let scrollTimeout: NodeJS.Timeout | null = null;

const handleScroll = (e: WheelEvent) => {
  if (scrollTimeout) return;

  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
  }, 400); 

  setIndex((prev) => {
    if (e.deltaY > 0 && prev < services.length - 1) {
      return prev + 1;
    } else if (e.deltaY < 0 && prev > 0) {
      return prev - 1;
    }
    return prev;
  });
};

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  checkMobile(); 
  window.addEventListener("resize", checkMobile); 

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
  <div className={styles.wrapperMobile}>
    {isMobile ? (
      <div className={styles.mobileVersion}>
       <div className={styles.HeaderMObile}>
           
              <h1 className={styles.titleHeadMobile}>Services</h1>
              <p className={styles.descMobile}>
                Explore our comprehensive services that cover every aspect of
                energy management. We are committed to assisting your company in
                prospering in the context of sustainable energy.
              </p>
       
            </div>
        {services.map((service, i) => (
          <div key={i} className={styles.mobileCard}>
            <Image src={service.image} alt={service.title} loading="lazy" className={styles.imageMobile} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    ) : (
      <>
          <div className={styles.wrapper}>
       <div className={styles.Header}>
           
              <h1 className={styles.titleHead}>Services</h1>
              <p className={styles.desc}>
                Explore our comprehensive services that cover every aspect of
                energy management. We are committed to assisting your company in
                prospering in the context of sustainable energy.
              </p>
       
            </div>
     <div className={styles.wrapperCont}>
        
       <AnimatePresence mode="sync">
         <motion.div
           key={index}
           className={styles.content}
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -50 }}
           transition={{ duration: 0.2 }}
         >
           <Image
             src={services[index].image}
             alt={services[index].title}
              width={600}
      height={400}
             className={styles.image}
           />
           <div className={styles.text} >

           <h2 className={styles.title}>{services[index].title}</h2>
           <p className={styles.description}>{services[index].description}</p>
           </div>
         </motion.div>
         {index < 5 ? (
         <svg className={styles.arrows}>
         <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
   <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
   <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
	 					</svg>
         )
         :( <svg className={`${styles.arrows} ${styles.flipped}`}>
           <path className={styles.a1} d="M0 0 L30 32 L60 0" />
           <path className={styles.a2} d="M0 20 L30 52 L60 20" />
           <path className={styles.a3} d="M0 40 L30 72 L60 40" />
         </svg>)
        
         }
       </AnimatePresence>
     </div>
     </div>
      </>
    )}
  </div>
);

}
