
import Head from "next/head";

import AOS from 'aos';
import Homee from "./home/page";
export default function Home() {
  return (
    <div className="page">
   <Head>
        <meta name="google-site-verification" content="5qRlOQNaJ771i6hFI2xzZQ15dkBy2MUUDkqrzTzYq6A" />
      </Head>
      <Homee />
    </div>
  );
}
