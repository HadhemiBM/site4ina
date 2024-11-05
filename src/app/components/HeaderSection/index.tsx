import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import styles from "./index.module.css";
import Image from "next/image";
import dme from "../../Assests/dme.gif";
import reduction from "../../Assests/svg/reductionEnergy.svg";
import timeincrease from "../../Assests/svg/timeincrease.svg";
import moneySave from "../../Assests/svg/moneySave.svg";
import TimeReduce from "../../Assests/svg/TimeReduce.svg";
// import edge from "../../Assests/edge.webp";
import edge from "../../Assests/ms.gif";
import { BarChart, Card } from "@tremor/react";
const Header = () => {
  const settings = {
    showArrows: true,
    // autoPlay: true,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    interval: 5000,
  };

  return (
    <div className={styles.carr}>
      <Carousel {...settings}>
        {/* carousel 1  */}
        <div className={styles.container}>
          <div className={styles.HeaderText}>
            <h1 className={styles.HeaderTitle}>
              Redefining Energy Management with AI and IoT Excellence
            </h1>
            <p className={styles.HeaderDesc}>
              Elevating energy management by integrating AI and IoT, enabling
              proactive monitoring, real-time analytics, and smarter
              decision-making to enhance your operational efficiency
            </p>
          </div>
          <div className={styles.Imagecontainer}>
            <Image className={styles.HeadImage} src={dme} alt="IA" />
          </div>
        </div>
        {/* carousel 2  */}

        <div className={styles.container3}>
          <div className={styles.HeaderText2}>
           

            <h1 className={styles.HeaderTitle1}>
              IMPACT OF THE SYSTEM ENERGY CONTROL ON THE INDUSTRY
            </h1>
            < div className={styles.Headerim}>
            

            <div className={styles.col}>
              <h3 className={styles.HeaderTitle3}>
              
                20% Consumption Reduction
              </h3>
              <Image className={styles.HeadImagered} src={reduction} alt="IA" />
            </div>
            <div className={styles.col}>
              <h3 className={styles.HeaderTitle3}>
           
                80% Reduction in Lost Time Duties
              </h3>

              <Image
                className={styles.HeadImagered}
                src={timeincrease}
                alt="IA"
              />
            </div>
            </div>
            < div className={styles.Headerim}>

            <div className={styles.col}>
            <h3 className={styles.HeaderTitle3}> 50% Cost Reduction </h3>

              <Image className={styles.HeadImagered} src={moneySave} alt="IA" />
            </div>
            <div className={styles.col}>
            <h3 className={styles.HeaderTitle3}>
            
            80% Increased Productivity Time
          </h3>
              <Image className={styles.HeadImagered} src={TimeReduce} alt="IA" />
            </div>
            </div>
           
          </div>
        </div>
        {/* carousel 3  */}

        <div className={styles.container3}>
          <div className={styles.HeaderText}>
            {/* <h1  className={styles.HeaderTitle}>4InA Technologie</h1> */}

            <h1 className={styles.HeaderTitle}>
              Advantages of Installing Our Solution
            </h1>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.HeaderTitle4}>
                Monitoring of energy consumption
              </h3>
            </div>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.HeaderTitle4}>
                Guidance for energy managers
              </h3>
            </div>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.HeaderTitle4}>
                Monitoring Machine Behavior and Predicting Failures
              </h3>
            </div>
            <div className={styles.rowloa}>
              <div className={styles.loader}></div>
              <h3 className={styles.HeaderTitle4}>
                Reducing Maintenance Costs
              </h3>
            </div>

            {/* <p className={styles.HeaderDesc}>Elevating energy management by integrating AI and IoT, enabling proactive monitoring, real-time analytics, and smarter decision-making to enhance your operational efficiency</p> */}
          </div>
          <div className={styles.Imagecontainer3}>
            <Image className={styles.HeadImage3} src={edge} alt="IA" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
