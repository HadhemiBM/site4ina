
// import Head from "next/head";

// import AOS from 'aos';
// import Splash from "./home/page";
// import HomePage from "./accueil/page";

// export default function Home() {
//   return (
//     <div className="page">
//    <Head>
//         <meta name="google-site-verification" content="5qRlOQNaJ771i6hFI2xzZQ15dkBy2MUUDkqrzTzYq6A" />
//       </Head>
//       <Splash />
//     </div>
//   );
// }
// app/page.tsx
import Splash from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "4InA Technologie – AI-Powered Energy Monitoring & Predictive Maintenance",
  description:
    "Explore how 4ina Technologie boosts energy efficiency and productivity using AI-driven EMS platforms.",
  keywords: [
    "Energy Monitoring",
    "EMS",
    "4ina Technology",
    "Smart Solutions",
    "IoT",
    "AI",
    "Tunisia",
  ],
  openGraph: {
    title: "4ina Technology | Smart Energy Management",
    description:
      "Discover how 4ina Technologie revolutionizes energy usage with smart monitoring and predictive systems.",
    url: "https://4inatechnologie.com",
    siteName: "4ina Technology",
    images: [
      {
        url: "https://4inatechnologie.com/logo-social-preview.jpg", // remplace par un visuel correct
        width: 1200,
        height: 630,
        alt: "4ina Smart Energy Platform",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return <Splash />;
}
