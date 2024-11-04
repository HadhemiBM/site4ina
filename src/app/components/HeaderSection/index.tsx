import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import styles from './index.module.css';
import Image from 'next/image';
import dme from '../../Assests/dme.gif'
const Header = () => {
  const settings = {
    showArrows: true,
    autoPlay: true,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    interval: 3000
  };

  return (
    <div className={styles.carr}>
      <Carousel {...settings}>
      <div className={styles.container}>
      <div className={styles.HeaderText}>
    {/* <h1  className={styles.HeaderTitle}>4InA Technologie</h1> */}

      <h1  className={styles.HeaderTitle}>Redefining Energy Management with AI and IoT Excellence</h1>
      <p className={styles.HeaderDesc}>Elevating energy management by integrating AI and IoT, enabling proactive monitoring, real-time analytics, and smarter decision-making to enhance your operational efficiency</p>
      </div>
    <div className={styles.Imagecontainer}>
      <Image className={styles.HeadImage} src = {dme} alt="IA" />
    </div>
    </div>
    <div className={styles.container}>
      <div className={styles.HeaderText}>
    {/* <h1  className={styles.HeaderTitle}>4InA Technologie</h1> */}

      <h1  className={styles.HeaderTitle}>Redefining Energy Management with AI and IoT Excellence</h1>
      <p className={styles.HeaderDesc}>Elevating energy management by integrating AI and IoT, enabling proactive monitoring, real-time analytics, and smarter decision-making to enhance your operational efficiency</p>
      </div>
    <div className={styles.Imagecontainer}>
      <Image className={styles.HeadImage} src = {dme} alt="IA" />
    </div>
    </div>
    <div className={styles.container}>
      <div className={styles.HeaderText}>
    {/* <h1  className={styles.HeaderTitle}>4InA Technologie</h1> */}

      <h1  className={styles.HeaderTitle}>Redefining Energy Management with AI and IoT Excellence</h1>
      <p className={styles.HeaderDesc}>Elevating energy management by integrating AI and IoT, enabling proactive monitoring, real-time analytics, and smarter decision-making to enhance your operational efficiency</p>
      </div>
    <div className={styles.Imagecontainer}>
      <Image className={styles.HeadImage} src = {dme} alt="IA" />
    </div>
    </div>
      </Carousel>
    </div>
  );
};

export default Header;

// "use client";

// import Link from "next/link";
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import styles from "./index.module.css";
// import dme from "../../Assests/dme.gif";

// const Header: React.FC = () => {
//   // Slick carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
   
//       <Slider {...settings}>
//         {/* Slide 1 */}
//         <div className={styles.slide}>
//         <div className={styles.HeaderText}>
//           <h1 className={styles.HeaderTitle}>
//             1Redefining Energy Management with AI and IoT Excellence
//           </h1>
//           <p className={styles.HeaderDesc}>
//             Elevating energy management by integrating AI and IoT, enabling
//             proactive monitoring, real-time analytics, and smarter
//             decision-making to enhance your operational efficiency
//           </p>
//         </div>
//         <div className={styles.Imagecontainer}>
//           <Image className={styles.HeadImage} src={dme} alt="AI and IoT" />
//         </div>
//       </div>

//         {/* Slide 2 */}
//         <div className={styles.slide}>
//           <div className={styles.HeaderText}>
//             <h1 className={styles.HeaderTitle}>
//               Optimizing Resources with Advanced AI Solutions
//             </h1>
//             <p className={styles.HeaderDesc}>
//               Our technology maximizes energy use, reduces costs, and supports
//               sustainable growth through tailored AI-powered insights.
//             </p>
//           </div>
//           <div className={styles.Imagecontainer}>
//             <Image
//               className={styles.HeadImage}
//               src={dme}
//               alt="AI Optimization"
//             />
//           </div>
//         </div>

//         {/* Slide 3 */}
//         <div className={styles.slide}>
//           <div className={styles.HeaderText}>
//             <h1 className={styles.HeaderTitle}>
//               Unlocking the Potential of IoT in Modern Infrastructure
//             </h1>
//             <p className={styles.HeaderDesc}>
//               Enhance your operations by leveraging IoT for seamless
//               connectivity, real-time data collection, and improved asset
//               management.
//             </p>
//           </div>
//           <div className={styles.Imagecontainer}>
//             <Image
//               className={styles.HeadImage}
//               src={dme}
//               alt="IoT Infrastructure"
//             />
//           </div>
//         </div>
//       </Slider>

//   );
// };

// export default Header;
