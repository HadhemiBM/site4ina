
import softSol from "../Assests/softSol.png";
import hardSol from "../Assests/hard.png";
import { StaticImageData } from "next/image";

export interface Solution {
  title: string;
  description: string;
  image: StaticImageData;
}

export const solutions: Solution[] = [
 
  {
    title: 'Software',
    description: "The 4InA Dashboard is available on web, desktop, and mobile platforms. You get real-time energy data, enabling intelligent automation and remote access. Gain actionable insights, minimize energy waste, and boost operational efficiency anytime, anywhere.",
    image: softSol,
  },
  {
    title: 'Hardware',
    description: 'The smart sensors capture real-time energy usage with high precision and feed data directly into our platform. This enables accurate monitoring, behavior prediction, and a clear view of consumption trends.',
    image: hardSol,
  },
  
];