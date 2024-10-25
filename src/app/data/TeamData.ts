
import analytics from "../Assests/analytics.png";
import smart_devices from "../Assests/smart-devices.png";
import web from "../Assests/web.png";
import mobile from "../Assests/mobile.png";
import team1 from "../Assests/team1.png";
import team2 from "../Assests/team2.jpg";
import assistance  from "../Assests/assistance.png";



import { StaticImageData } from "next/image";

export interface Team {
  name: string;
  post: string;
  image: StaticImageData;
}

export const teams: Team[] = [
  {
    name: "Hina Zribi",
    post: "Co-Founder",
    image: team1,
  },
  {
    name: "Sabri Mhimdi",
    post: "Project Manager",
    image: team2,
  },
  {
    name: "Mariem Zouaoui",
    post: "Embedded System Engineer",
    image: team1,
  },
  {
    name: "Nour Essafa Chaabani",
    post: "Data Science Engineer",
    image: team2,
  },
  {
    name: "Hadhemi Ben Mansour",
    post: "FullStack Engineer",
    image: team1,
  },
  {
    name: "Oumaima Ben Aziza",
    post:
      "Marketing & Communication Assistant",
    image: team2 ,
  },
  
];