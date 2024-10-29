"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";


import styles from "./index.module.css";
import Image from "next/image";

import dme from '../../Assests/dme.gif'
const Header: React.FC = () => {
  

  return (
    <div className={styles.container}>
    <div className={styles.HeaderText}>
    {/* <h1  className={styles.HeaderTitle}>4InA Technologie</h1> */}

      <h1  className={styles.HeaderTitle}>Redefining Energy Management with AI and IoT Excellence</h1>
      <p className={styles.HeaderDesc}>Elevating energy management by integrating AI and IoT, enabling proactive monitoring, real-time analytics, and smarter decision-making to enhance your operational efficiency</p>
      </div>
    <div className={styles.Imagecontainer}>
      <Image className={styles.HeadImage} src = {dme} alt="IA" />
    </div>
    </div>
  );
};

export default Header;