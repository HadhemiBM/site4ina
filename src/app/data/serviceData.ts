
import analytics from "../Assests/analytics.png";
import smart_devices from "../Assests/smart-devices.png";
import web from "../Assests/web.png";
import mobile from "../Assests/mobile.png";
import assistance  from "../Assests/assistance.png";
import client  from "../Assests/client.png";


import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

export const services: Service[] = [
  {
    title: "Smart device of energy management based on IA",
    description: "Electrical device with an HMI screen with a local application based on HMI",
    image: analytics,
  },
  {
    title: "Data Analytics",
    description: "Control, monitoring of energy and consumption of each device / machine and prediction of anomalies with AI",
    image: smart_devices,
  },
  {
    title: "Web Development",
    description: "development of web platform to monitor your energy daily and predect futur consumption .",
    image: web,
  },
  {
    title: "Mobile Development",
    description: "Application isolated or linked to the device: monitoring of energy consumption, technical assistance by AI, prediction of future consumption, factory and workshop management.",
    image: mobile,
  },
  {
    title: "Assistance after installation",
    description:
      "We provide experts and engineers for energy audit and remote assistance",
    image: assistance ,
  },
  {
    title: "Call Us For details",
    description: "+216 23 507 648.",
    image: client,
  },
];