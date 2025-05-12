
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
    description: ` Our cloud-based software analyzes data from each device and offers intelligent automation that adapts to your energy needs, providing easy, remote access ( Web & Mobile) to insights while optimizing consumption and minimizing waste`,
    image: softSol,
  },
  {
    title: 'Hardware',
    description: 'Our precision sensors collect real-time energy usage data continuously , seamlessly connecting with our platform to provide a clear, data-driven view of your consumption patterns.',
    image: hardSol,
  },
  
];