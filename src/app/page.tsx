
import Head from "next/head";

import AOS from 'aos';
import Splash from "./home/page";
import HomePage from "./accueil/page";

export default function Home() {
  return (
    <div className="page">
   <Head>
        <meta name="google-site-verification" content="5qRlOQNaJ771i6hFI2xzZQ15dkBy2MUUDkqrzTzYq6A" />
      </Head>
      <HomePage />
    </div>
  );
}