
import analytics from "../Assests/analytics.png";
import smart_devices from "../Assests/smart-devices.png";
import web from "../Assests/soft.png";
import mobile from "../Assests/mobile.png";
import assistance  from "../Assests/assistance.png";
import client  from "../Assests/client.png";
import Image from "next/image";
import Data from "../Assests/hard.jpg";
import service from "../Assests/tech.jpg";

import iso from "../Assests/iso.png";
import consult from "../Assests/consult.jpg";
import integration from "../Assests/integration.jpg";

import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

export const services: Service[] = [
  // {
  //   title: "Smart device of energy management based on IA",
  //   description: "Electrical device with an HMI screen with a local application based on HMI",
  //   image: analytics,
  // },
  // {
  //   title: "Data Analytics",
  //   description: "Control, monitoring of energy and consumption of each device / machine and prediction of anomalies with AI",
  //   image: smart_devices,
  // },
  // {
  //   title: "Web Development",
  //   description: "development of web platform to monitor your energy daily and predect futur consumption .",
  //   image: web,
  // },
  // {
  //   title: "Mobile Development",
  //   description: "Application isolated or linked to the device: monitoring of energy consumption, technical assistance by AI, prediction of future consumption, factory and workshop management.",
  //   image: mobile,
  // },
  // {
  //   title: "Assistance after installation",
  //   description:
  //     "We provide experts and engineers for energy audit and remote assistance",
  //   image: assistance ,
  // },
  // {
  //   title: "Call Us For details",
  //   description: "+216 23 507 648.",
  //   image: client,
  // },
  {
    title: 'Technical Support and Maintenance',
    description: `At 4InA Technologie, we understand the importance of effectively managing your energy operations by providing the right support at the right time.
                We provide prompt, expert assistance to resolve any technical issues, ensuring minimal downtime and uninterrupted operations. Our support and maintenance service include:
               
                • On-Demand 24/7 Availability
               • Certified Expertise Advanced
                • Tools and Methodology
              • Specialized Support Team
                `,
    image: service,
  },
  {
    title: 'Hardware Devolopment',
    description: `From concept to production, our hardware development service specialized in creating hardware that are customized to meet your unique energy management requirements.
     We develop robust, high-performance devices that seamlessly integrate with your existing systems :
     
     • Tailored design
      • Advanced technology AI and IOT`,
    image: Data,
  },
  {
    title: 'Software devolopment',
    description: ` 4InA Technologie work closely with you to develop intuitive, scalable, and tailored web and mobile easy to use dashboard that generates instantous insight and report to manage your energy with ease and with precision at the same time. Our offerings include:
   
    • Software built specifically for your energy management goals
     • Web and mobile applications designed to ensure accessibility from any device
     • Tools that enable you to monitor, analyze, and optimize energy usage on the go with real time data access.
     `,
    image: web,
  },
  {
    title: 'Consulting',
    description: `Your business can confidently address its energy challenges while building a path toward sustainable growth and greater ROI. We offer personalized recommendations aligned with your business goal after conducting in-depth assessments to uncover inefficiencies to enable targeted improvement and develop customized strategies.`,
    image: consult,
  },
  {
    title: 'Integration',
    description: `Our Integration services ensure that new updates and customized  features are seamlessly incorporated into your existing energy  management systems. We implement new updates and integrations  without disrupting your current operation.
     We offer as well post-integration service to verify compatibility and performance.`,
    image: integration,
  },
  {
    title: 'Accredited Certification',
    description: `ISO 50001 is an international standard that applies to organizations of any size and provides requirements for establishing, managing and improving their energy consumption and efficiency. It helps organizations establish, implement, and maintain practices for more efficient energy use.
     The Certification in ISO 50001 reflects your dedication to reducing energy consumption, enhancing operational efficiency, and minimizing environmental impact.
     We guide through each step of the ISO 50001 Certification process.
     `,
    image: iso,
  },
];