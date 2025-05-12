// "use client";

// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     id: number;
//     title: string;
//     date: string;
//     imageUrl: string;
//     description: string;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//     const router = useRouter();
  
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);
//   const handleGo = (id: number) => {
//     router.push(`/posts/blogDetails?id=${id}`);
//   };

//   const blogs = [
//     {
//       id: 1,
//       title:
//         "The Power of Artificial Intelligence in Transforming Energy Management Systems",
  
//       date: "Oct 10, 2024",
//       imageUrl:
//         "https://res.cloudinary.com/ddngbriyu/image/upload/v1730384624/blog1_trufpf.png",
//       description:
//         "With the rise of renewable energy sources and the urgent need to combat climate change, the traditional electrical grid is undergoing a rapid transformation. The integration of  <strong > AI-powered energy monitoring </strong> and <strong> predictive maintenance </strong> offers real-time insights and smart energy optimization solutions, paving the way for a more resilient and efficient <strong> energy management system  </strong> (EMS). <br> As <strong> Deloitte </strong> states, 44% of energy organizations consider AI indispensable for their future operations. AI empowers insights into climate information, supply and request variances, gear wellbeing, and more. With all this data, companies can disrupt how their businesses work and open modern openings for businesses and achieve greater ROI. <br> Let’s explore how AI is transforming <strong> energy management systems </strong> and the profound benefits it offers. <br> <br> <h5> Real Time Energy Monitoring with AI </h5> An IoT- and Artificial Intelligence-based <strong> energy management systems (EMS) </strong> enables real-time energy monitoring (RTM) to track consumption at distribution points across commercial, industrial, agricultural or residential settings. The smart sensors connected to this <strong> AI-powered energy monitoring system </strong>   provide real-time data, allowing visibility from the energy source to the point of usage. Additionally, the IoT-AI-based predictive maintenance benefits enable this smart energy solution to identify potential leakages or voltage drops at nodes, ensuring efficient energy use and early issue detection. <br> Such  <strong> energy management systems EMS </strong>, ensure the prevention of equipment breakdown thus ensures a continuous workflow of all operations and equipment. In fact, it helps in the detection of power quality violations and anomalies before they actually happen. This consumption transparency leads to more accurate decision-making. <br> <br> <h5> Optimizing Energy Usage with Smart Energy Management Solutions </h5> An Energy Management System (EMS) offers live tracking, data interpretation, measurement of key performance indicators (KPIs), and visualization of energy usage and efficiency gains. This allows for better decision-making, leading to improved efficiency, heightened sustainability, and optimized performance throughout the entire site. The three focus points are as follows:  <br> <strong> Energy Efficiency: </strong> Precise predictions facilitate optimal energy planning and use, diminishing waste and enhancing efficacy. Simply put, AI analyses the specific behavior of a building, infrastructure, or industry. If consumption deviates significantly from what is expected, an alert is triggered implementing predictive maintenance techniques. <br> <strong> Cost Reduction:  </strong> Industries can avoid high prices and benefit from cheaper energy prices during off-peak hours by projecting their energy consumption ahead of time. For example, companies with multiple assets can focus their investments where it really matters. AI pinpoints those assets with the most room for improvement and where to focus efforts. <br> <strong> Resource Optimization:  </strong> Load forecasting and real data monitoring make it possible to schedule high energy-consuming activities more effectively, making the best use of both machinery and resources. <br> <h5>  Discover How 4InA Technologie Can Help You Optimize Energy Management </h5> <br> Our specialty at 4InA Technologie is offering Energy Management Systems that enable your business to attain sustainability and energy efficiency. <br> Are you prepared to change the way you manage energy? <strong> Contact Us </strong> to book a demo ",
//     },
//     {
//       id: 2,
//       title:
//         "Smart Energy Solutions for Farming: Revolutionizing Energy Management in Agriculture",
  
//       date: "Sep 12, 2024",
//       imageUrl:
//         "https://res.cloudinary.com/ddngbriyu/image/upload/v1730385010/blog1_1_ncgmwr.png",
//       description:
//         "Modern agriculture requires much greater energy input than conventional agriculture, which heavily depends on fossil fuels for drying grain, manufacturing fertilizers, driving machinery, and generating electricity used for heating and lighting purposes. In the heart of this huge demand lies the need for <strong> smart energy solutions </strong> that have redefined our approach to energy usage to more sustainable practices. <br> The integration of smart EMSs and optimization strategies emerges as a promising solution, offering several advantages over traditional approaches. <br> The following outlines the various applications of  <strong> smart energy solutions </strong> management systems. <br> <h5> Smart energy management solutions in the greenhouses and vertical farms: </h5> AI's capacity to maximize demand-side management is one of its primary contributions to vertical farms and greenhouses. AI may find energy inefficiencies and recommend fixes by analyzing vast volumes of data from several sources. AI systems are able to forecast periods of peak and off-peak energy demand by carefully examining real-time data and past consumption trends. Because of this foresight, energy-intensive jobs may be carefully scheduled for off-peak hours, which effectively lowers overall energy expenditures and lessens the environmental impact of periods of high demand. <br> <h5> Real time Monitoring in Irrigation Systems: </h5> Agriculture sites can modify watering schedules in response to shifts in weather patterns or plant growth phases by utilizing an AI monitoring system. Intelligent algorithms can modify the irrigation system to provide plants extra water in the event of an unexpected heatwave. On the other hand, irrigation can be decreased in anticipation of a cold season to avoid overwatering and possible damage. <br> <h5> Adaptation of Lighting techniques </h5> Energy consumption from artificial lighting, which is essential for indoor farming, can be substantial. Depending on a number of variables, such as the time of day, the requirements of a particular crop, or even spectral analysis to modify the color, intensity, and duration of light exposure, AI can dynamically modify lighting settings. In addition to saving energy, these astute changes promote plant growth, increasing yields and improving the quality of produce. <br> <br> Ready to see the impact of energy management systems in action? <br> Visit our demo page today to explore how our solutions can transform your farming operations!",
//     },
//     {
//       id: 3,
//       title:
//         "The Future of Energy Management Systems: Paving the Way to a Carbon-Free World",
//       date: "Jul 12, 2024",
//       imageUrl:
//         "https://res.cloudinary.com/ddngbriyu/image/upload/v1730451409/blog1_2_acktaz.png",
//       description:
//         "EMS is an essential element that lowers expenses while preserving operational effectiveness. It is seen by environmentalists as a step toward sustainability and a less carbon footprint. An energy engineer, on the other hand, views EMS as a sophisticated system of sensors, controllers, and software that cooperate to optimize energy use. The two stands takes us to the optimal outcome that energy management systems are teh future the maintain a sustainable environnement. How this happens ? <br> <br> <h5> The Role of EMS in Reducing Carbon Emissions</h5> <br> An EMS model is a framework of policies, procedures and practices that helps organizations manage and reduce their impact on the environment.The reach  reduction in the carboon emission, a good understanding of the whole consumption must be done. In fact this is what energy management systems are doing. EMS provides accurate, real-time energy consumption data, identifying areas of energy waste and inefficiency, enabling data-driven decision-making for energy optimization, facilitating the integration of renewable energy sources, and supporting regulatory compliance and reporting. <br> <br> <h5> Why Energy Management Systems are Vital for Carbon-Free Operations:  </h5> <br> Ems systems are playing a vital role for Carbon-Free Operations. With the use of EMS's real-time energy usage data, businesses may find and cut down on inefficiencies that raise carbon emissions. The transition to carbon-neutral operations is facilitated by proactive management made possible by this visibility. <br> Added to that, in order to maximize efficiency and guarantee seamless transitions during variations in the renewable supply, EMS is essential to controlling and balancing these sources with current systems as businesses move to integrate renewables. This ease of integration is in fact encouraging businesses to adapt renewable energy and as a results a carbon-free operation. <br> <h5> Key Trends in EMS for a Greener Tomorrow: </h5> <br> As the domain of energy management is a dynamic and rapidly evolving sector that plays a crucial role in the global electronics industry. Wide range of trends are appearing along with new technologies to be adapted by EMS supplies. Here are some emerging trends: <br> <strong> Emphasis on Supply Chain Resilience and Risk Management </strong> <br> <strong> Digital Transformation and Industry 4.0 Integration </strong> <br> <strong> Increasing Demand for Customization and Personalization </strong> <br> <strong> Focus on Sustainability and Green Manufacturing </strong>  Ready to take the next step toward efficient, carbon-free operations? Contact us to learn how our innovative solutions can help you achieve your energy goals.",
//     },
//   ];
  
//   useEffect(() => {
//     addAnimation();
//   }, []);
//   const [start, setStart] = useState(false);
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }
//   type BlogCard = {
//     imageUrl: string;
//     date: string;
//     title: string;
//     description: string;
//     id: string;
//   };
  
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards",
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse",
//         );
//       }
//     }
//   };
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };
//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_70%,transparent)]",
//         className,
//       )}
//     >
//    <ul
//   ref={scrollerRef}
//   className={cn(
//     "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
//     start && "animate-scroll",
//     pauseOnHover && "hover:[animation-play-state:paused]"
//   )}
// >
//         {items.map((blog) => (
//   <li
//     key={blog.id}
//     className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-4 py-4 md:w-[450px] dark:border-zinc-700 dark:bg-zinc-900"
//   >
//     <div className="flex flex-col gap-4">
//       <div className="w-full h-48 overflow-hidden rounded-md">
//         <Image
//           src={blog.imageUrl}
//           alt="blog"
//           width={419}
//           height={400}
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
//         <i className="fa-solid fa-calendar-days"></i>
//         <p>{blog.date}</p>
//       </div>
//       <h6
//         onClick={() => handleGo(blog.id)}
//         className="text-base font-semibold cursor-pointer hover:underline text-neutral-800 dark:text-neutral-100"
//       >
//         {blog.title}
//       </h6>
//       <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
//         {blog.description}
//       </p>
//       <div className="flex justify-end">
//         <i
//           onClick={() => handleGo(blog.id)}
//           className="fa-solid fa-arrow-up text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer"
//         ></i>
//       </div>
//     </div>
//   </li>
// ))}

//       </ul>
//     </div>
//   );
// };
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../app/accueil/index.module.css";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow", // Tu peux le fixer à "normal"
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?:  "slow" ;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const router = useRouter();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const handleGo = (id: number) => {
    router.push(`/posts/blogDetails?id=${id}`);
  };

  const blogs = [
        {
          id: 1,
          title:
            "The Power of Artificial Intelligence in Transforming Energy Management Systems",
      
          date: "Oct 10, 2024",
          imageUrl:
            "https://res.cloudinary.com/ddngbriyu/image/upload/v1730384624/blog1_trufpf.png",
          description:
            "With the rise of renewable energy sources and the urgent need to combat climate change, the traditional electrical grid is undergoing a rapid transformation. The integration of  <strong > AI-powered energy monitoring </strong> and <strong> predictive maintenance </strong> offers real-time insights and smart energy optimization solutions, paving the way for a more resilient and efficient <strong> energy management system  </strong> (EMS). <br> As <strong> Deloitte </strong> states, 44% of energy organizations consider AI indispensable for their future operations. AI empowers insights into climate information, supply and request variances, gear wellbeing, and more. With all this data, companies can disrupt how their businesses work and open modern openings for businesses and achieve greater ROI. <br> Let’s explore how AI is transforming <strong> energy management systems </strong> and the profound benefits it offers. <br> <br> <h5> Real Time Energy Monitoring with AI </h5> An IoT- and Artificial Intelligence-based <strong> energy management systems (EMS) </strong> enables real-time energy monitoring (RTM) to track consumption at distribution points across commercial, industrial, agricultural or residential settings. The smart sensors connected to this <strong> AI-powered energy monitoring system </strong>   provide real-time data, allowing visibility from the energy source to the point of usage. Additionally, the IoT-AI-based predictive maintenance benefits enable this smart energy solution to identify potential leakages or voltage drops at nodes, ensuring efficient energy use and early issue detection. <br> Such  <strong> energy management systems EMS </strong>, ensure the prevention of equipment breakdown thus ensures a continuous workflow of all operations and equipment. In fact, it helps in the detection of power quality violations and anomalies before they actually happen. This consumption transparency leads to more accurate decision-making. <br> <br> <h5> Optimizing Energy Usage with Smart Energy Management Solutions </h5> An Energy Management System (EMS) offers live tracking, data interpretation, measurement of key performance indicators (KPIs), and visualization of energy usage and efficiency gains. This allows for better decision-making, leading to improved efficiency, heightened sustainability, and optimized performance throughout the entire site. The three focus points are as follows:  <br> <strong> Energy Efficiency: </strong> Precise predictions facilitate optimal energy planning and use, diminishing waste and enhancing efficacy. Simply put, AI analyses the specific behavior of a building, infrastructure, or industry. If consumption deviates significantly from what is expected, an alert is triggered implementing predictive maintenance techniques. <br> <strong> Cost Reduction:  </strong> Industries can avoid high prices and benefit from cheaper energy prices during off-peak hours by projecting their energy consumption ahead of time. For example, companies with multiple assets can focus their investments where it really matters. AI pinpoints those assets with the most room for improvement and where to focus efforts. <br> <strong> Resource Optimization:  </strong> Load forecasting and real data monitoring make it possible to schedule high energy-consuming activities more effectively, making the best use of both machinery and resources. <br> <h5>  Discover How 4InA Technologie Can Help You Optimize Energy Management </h5> <br> Our specialty at 4InA Technologie is offering Energy Management Systems that enable your business to attain sustainability and energy efficiency. <br> Are you prepared to change the way you manage energy? <strong> Contact Us </strong> to book a demo ",
        },
        {
          id: 2,
          title:
            "Smart Energy Solutions for Farming: Revolutionizing Energy Management in Agriculture",
      
          date: "Sep 12, 2024",
          imageUrl:
            "https://res.cloudinary.com/ddngbriyu/image/upload/v1730385010/blog1_1_ncgmwr.png",
          description:
            "Modern agriculture requires much greater energy input than conventional agriculture, which heavily depends on fossil fuels for drying grain, manufacturing fertilizers, driving machinery, and generating electricity used for heating and lighting purposes. In the heart of this huge demand lies the need for <strong> smart energy solutions </strong> that have redefined our approach to energy usage to more sustainable practices. <br> The integration of smart EMSs and optimization strategies emerges as a promising solution, offering several advantages over traditional approaches. <br> The following outlines the various applications of  <strong> smart energy solutions </strong> management systems. <br> <h5> Smart energy management solutions in the greenhouses and vertical farms: </h5> AI's capacity to maximize demand-side management is one of its primary contributions to vertical farms and greenhouses. AI may find energy inefficiencies and recommend fixes by analyzing vast volumes of data from several sources. AI systems are able to forecast periods of peak and off-peak energy demand by carefully examining real-time data and past consumption trends. Because of this foresight, energy-intensive jobs may be carefully scheduled for off-peak hours, which effectively lowers overall energy expenditures and lessens the environmental impact of periods of high demand. <br> <h5> Real time Monitoring in Irrigation Systems: </h5> Agriculture sites can modify watering schedules in response to shifts in weather patterns or plant growth phases by utilizing an AI monitoring system. Intelligent algorithms can modify the irrigation system to provide plants extra water in the event of an unexpected heatwave. On the other hand, irrigation can be decreased in anticipation of a cold season to avoid overwatering and possible damage. <br> <h5> Adaptation of Lighting techniques </h5> Energy consumption from artificial lighting, which is essential for indoor farming, can be substantial. Depending on a number of variables, such as the time of day, the requirements of a particular crop, or even spectral analysis to modify the color, intensity, and duration of light exposure, AI can dynamically modify lighting settings. In addition to saving energy, these astute changes promote plant growth, increasing yields and improving the quality of produce. <br> <br> Ready to see the impact of energy management systems in action? <br> Visit our demo page today to explore how our solutions can transform your farming operations!",
        },
        {
          id: 3,
          title:
            "The Future of Energy Management Systems: Paving the Way to a Carbon-Free World",
          date: "Jul 12, 2024",
          imageUrl:
            "https://res.cloudinary.com/ddngbriyu/image/upload/v1730451409/blog1_2_acktaz.png",
          description:
            "EMS is an essential element that lowers expenses while preserving operational effectiveness. It is seen by environmentalists as a step toward sustainability and a less carbon footprint. An energy engineer, on the other hand, views EMS as a sophisticated system of sensors, controllers, and software that cooperate to optimize energy use. The two stands takes us to the optimal outcome that energy management systems are teh future the maintain a sustainable environnement. How this happens ? <br> <br> <h5> The Role of EMS in Reducing Carbon Emissions</h5> <br> An EMS model is a framework of policies, procedures and practices that helps organizations manage and reduce their impact on the environment.The reach  reduction in the carboon emission, a good understanding of the whole consumption must be done. In fact this is what energy management systems are doing. EMS provides accurate, real-time energy consumption data, identifying areas of energy waste and inefficiency, enabling data-driven decision-making for energy optimization, facilitating the integration of renewable energy sources, and supporting regulatory compliance and reporting. <br> <br> <h5> Why Energy Management Systems are Vital for Carbon-Free Operations:  </h5> <br> Ems systems are playing a vital role for Carbon-Free Operations. With the use of EMS's real-time energy usage data, businesses may find and cut down on inefficiencies that raise carbon emissions. The transition to carbon-neutral operations is facilitated by proactive management made possible by this visibility. <br> Added to that, in order to maximize efficiency and guarantee seamless transitions during variations in the renewable supply, EMS is essential to controlling and balancing these sources with current systems as businesses move to integrate renewables. This ease of integration is in fact encouraging businesses to adapt renewable energy and as a results a carbon-free operation. <br> <h5> Key Trends in EMS for a Greener Tomorrow: </h5> <br> As the domain of energy management is a dynamic and rapidly evolving sector that plays a crucial role in the global electronics industry. Wide range of trends are appearing along with new technologies to be adapted by EMS supplies. Here are some emerging trends: <br> <strong> Emphasis on Supply Chain Resilience and Risk Management </strong> <br> <strong> Digital Transformation and Industry 4.0 Integration </strong> <br> <strong> Increasing Demand for Customization and Personalization </strong> <br> <strong> Focus on Sustainability and Green Manufacturing </strong>  Ready to take the next step toward efficient, carbon-free operations? Contact us to learn how our innovative solutions can help you achieve your energy goals.",
        },
      ];
  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  return (
    <div
    ref={containerRef}
    className={cn(
              "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)]",
              className,
            )}
  >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((blog) => (
          <li
            key={blog.id}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-4 py-4 md:w-[450px] dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-4">
              <div className="w-full h-48 overflow-hidden rounded-md">
                <Image
                  src={blog.imageUrl}
                  alt="blog"
                  width={419}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
  <i className="fa-solid fa-calendar-days text-base leading-none"></i>
  <p className={`leading-none ${styles.BlogDateText}`}>{blog.date}</p>
</div>

              <h6
                onClick={() => handleGo(blog.id)}
                className="text-base font-semibold cursor-pointer hover:underline text-neutral-800 dark:text-neutral-100"
              >
                {blog.title}
              </h6>
              <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
                {blog.description}
              </p>
              <div className="flex justify-end">
                {/* <i
                  onClick={() => handleGo(blog.id)}
                  className="fa-solid fa-arrow-up text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer"
                ></i> */}
                     <div className={styles.TeamSocial}>
      
      <i onClick={() => handleGo(blog.id)} className="fa-solid fa-arrow-up"></i>
    
  </div>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
