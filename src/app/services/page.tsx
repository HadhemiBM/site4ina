"use client";
import styles from "./index.module.css";
import React from "react";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";

import service from "../Assests/svg/IaService.svg";

import Image from "next/image";
import Data from "../Assests/svg/DataService.svg";
import web from "../Assests/svg/webService.svg";
import mobile from "../Assests/svg/mobileService.svg";
import assistance from "../Assests/svg/AssistanceService.svg";

const Service: React.FC = () => {
  
  const SmartSectionRef = useRef<HTMLDivElement | null>(null);
  const DataSectionRef = useRef<HTMLDivElement | null>(null);
  const MobileSectionRef = useRef<HTMLDivElement | null>(null);
  const WebSectionRef = useRef<HTMLDivElement | null>(null);
  const AssistSectionRef = useRef<HTMLDivElement | null>(null);
  const SmartSection = () => {
    SmartSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const DataSection = () => {
    DataSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const WebSection = () => {
    WebSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const MobileSection = () => {
    MobileSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const AssistanceSection = () => {
    AssistSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <div className={styles.Left}>
            <h1 className={styles.title}>Services</h1>
            <p className={styles.desc}>
            
            4InA Technology delivers cutting-edge solutions designed to enhance efficiency and optimize operations. Our Smart Device offerings, powered by advanced AI, help reduce energy consumption and automate processes, driving sustainability and intelligent management. We also specialize in Web and Mobile Development, providing robust monitoring and dashboard solutions that offer real-time insights and data visualization. In addition, our Data Analytics services turn complex information into actionable strategies, while our dedicated support ensures that all solutions perform optimally after installation. Discover how we can empower your business with technology-driven innovation.
            </p>
          </div>
          <div className={styles.Right}>
            <div className={styles.content}>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={SmartSection}>Smart Device Based on IA</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>

                <p onClick={DataSection}>Data Analytics</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={WebSection}>Web Development</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={MobileSection}>Mobile Development</p>
              </div>
              <div className={styles.RightDesc}>
                <div className={styles.loader}></div>
                <p onClick={AssistanceSection}>Assistance after installation</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.AllService}>
          <div ref={SmartSectionRef} className={styles.service}>
            <div className={styles.serviceIconLeft}>
              <Image src={service} alt="service" />
            </div>
            <div className={styles.serviceContentLeft}>
              <div className={styles.row}>
                {/* <i className="fa-solid fa-circle"></i> */}
                <h6> • Smart Device Based on IA</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                Lörem ipsum antev håhesk och sen i plasavis reism plasm. Pebel
                presk kaktig alltså dide säsam tills spess. Suserade reang
                tetraheska. Besk ambimeter alternativa fakta och dehälogi bilig.
                Disk ov stenosade selfie för häd. Speska milig i maling uväd
                måpanade såd. Sede tårat sorad. Perade sel viren om tålig multir
                då biomal ar.
              </p>
            </div>
          </div>

          <div  ref={DataSectionRef} className={styles.serviceRight}>
            <div className={styles.serviceContentRight}>
              <div className={styles.row}>
                <h6> • Data Analytics</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                Lörem ipsum antev håhesk och sen i plasavis reism plasm. Pebel
                presk kaktig alltså dide säsam tills spess. Suserade reang
                tetraheska. Besk ambimeter alternativa fakta och dehälogi bilig.
                Disk ov stenosade selfie för häd. Speska milig i maling uväd
                måpanade såd. Sede tårat sorad. Perade sel viren om tålig multir
                då biomal ar.
              </p>
            </div>
            <div className={styles.serviceIcon}>
              <Image src={Data} alt="service" />
            </div>
          </div>
          <div ref={WebSectionRef} className={styles.service}>
            <div className={styles.serviceIconLeft}>
              <Image src={web} alt="service" />
            </div>
            <div className={styles.serviceContentLeft}>
              <div className={styles.row}>
                {/* <i className="fa-solid fa-circle"></i> */}
                <h6> • Web Development</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                Lörem ipsum antev håhesk och sen i plasavis reism plasm. Pebel
                presk kaktig alltså dide säsam tills spess. Suserade reang
                tetraheska. Besk ambimeter alternativa fakta och dehälogi bilig.
                Disk ov stenosade selfie för häd. Speska milig i maling uväd
                måpanade såd. Sede tårat sorad. Perade sel viren om tålig multir
                då biomal ar.
              </p>
            </div>
          </div>

          <div  ref={MobileSectionRef} className={styles.serviceRight}>
            <div className={styles.serviceContentRight}>
              <div className={styles.row}>
                <h6> • Mobile Development</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                Lörem ipsum antev håhesk och sen i plasavis reism plasm. Pebel
                presk kaktig alltså dide säsam tills spess. Suserade reang
                tetraheska. Besk ambimeter alternativa fakta och dehälogi bilig.
                Disk ov stenosade selfie för häd. Speska milig i maling uväd
                måpanade såd. Sede tårat sorad. Perade sel viren om tålig multir
                då biomal ar.
              </p>
            </div>
            <div className={styles.serviceIcon}>
              <Image src={mobile} alt="service" />
            </div>
          </div>
          <div ref={AssistSectionRef} className={styles.service}>
            <div className={styles.serviceIconLeft}>
              <Image src={assistance} alt="service" />
            </div>
            <div className={styles.serviceContentLeft}>
              <div className={styles.row}>
                {/* <i className="fa-solid fa-circle"></i> */}
                <h6> • Assistance after installation</h6>
              </div>

              <p className={styles.serviceContent_desc}>
                Lörem ipsum antev håhesk och sen i plasavis reism plasm. Pebel
                presk kaktig alltså dide säsam tills spess. Suserade reang
                tetraheska. Besk ambimeter alternativa fakta och dehälogi bilig.
                Disk ov stenosade selfie för häd. Speska milig i maling uväd
                måpanade såd. Sede tårat sorad. Perade sel viren om tålig multir
                då biomal ar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Service;
