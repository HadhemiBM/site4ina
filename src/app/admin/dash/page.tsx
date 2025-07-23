"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { cookies } from "next/headers";
import UiverseCard from "@/app/components/uiverseCard";


const DashPage: React.FC = () => {
  const [email, setEmail] = useState("");



  return (
    <div className={styles.Container}>
      <UiverseCard text='Blogs'/>
            <UiverseCard text='Events'/>
            <UiverseCard text='Spotlights'/>

    </div>
  );
};

export default DashPage;
