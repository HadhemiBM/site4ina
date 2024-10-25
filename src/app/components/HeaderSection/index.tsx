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
      <h1  className={styles.HeaderTitle}>Leading the Way in Energy Management</h1>
      <p className={styles.HeaderDesc}>Impowering businesses to achieve sustainability and efficiency through Smart energy management solutions & services</p>
      </div>
    <div className={styles.Imagecontainer}>
      <Image className={styles.HeadImage} src = {dme} alt="IA" />
    </div>
    </div>
  );
};

export default Header;