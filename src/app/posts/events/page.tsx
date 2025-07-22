// "use client";
// import styles from "./index.module.css";
// import React, { useEffect, useState } from "react";
// import { useRef } from "react";
// import PageTransition from "../../components/PageTransition";
// import parti from "../../Assests/svg/parti.svg";
// import foire from "../../Assests/foire.png";
// import foire2 from "../../Assests/foire2.png";
// import Image from "next/image";
// import Video from "./video";
// import Video2 from "./video2";
// import Modal from "./Modal";
// import { Lens } from "@/components/ui/lens";
// import Swal from "sweetalert2";

// interface Event {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   thumbnail_url: string;
//   createAt: Date;
// }

// const Events: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hovering, setHovering] = useState(false);
//   const [events, setEvents] = useState<Event[]>([]);

//   const handleImageClick = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);
//   const fetchEvents = async () => {
//     try {
//       const response = await fetch(
//         "https://site4ina-back.onrender.com/events/getAll",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         const errData = await response.json();
//         console.error("Error from server:", errData);
//         throw new Error(errData.message || "Failed to fetch blogs");
//       }

//       const data = await response.json();
//       setEvents(data); // Met à jour l'état avec les blogs récupérés
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       // alert("Something went wrong. Please try again.");
//       Swal.fire({
//         icon: "warning",
//         title: "Oops!",
//         text: "We couldn't load the event articles at the moment. Please try again later.",
//         confirmButtonColor: "#0003da",
//       });
//     }
//   };
//   useEffect(() => {
//     fetchEvents();
//   }, []);
//   return (
//     <PageTransition>
//       <div className={styles.container}>
//         <div className={styles.Header}>
//           <h1 className={styles.titleHead}>Events</h1>
//           <p className={styles.desc}>
//             Here, you can explore a diverse line up of events tailored for
//             enthusiasts, professionals, and curious minds alike. From hands-on
//             workshops and industry seminars to casual networking sessions, our
//             events offer a chance to learn, engage, and grow.
//           </p>
//         </div>
//         <div className={styles.AllEvents}>
//             {blogs.map((blog) => (
//           {/* eventsssss */}
//           <div data-aos="fade-up" className={styles.events1}>
//             <div
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className={styles.eventHeader}
//             >
//               <h2 className={styles.eventTitle}>
//                 Official Visit of the Democratic Republic of Congo Delegation to
//                 4InA Technologie
//               </h2>
//               <p className={styles.eventDesc}>
//                 `We had the honor of welcoming a high-level delegation from the
//                 Democratic Republic of Congo, led by H.E. Kibasa Maliba
//                 Augustin, Minister of Posts and Digital Telecommunications, to
//                 our offices at Manouba Technopark. The delegation included key
//                 digital leaders such as Dominique Migisha (ADN) and Marie
//                 Monzele Kalala, alongside Tunisian representatives.
//                 <br /> <strong>Purpose of the Visit:</strong>
//                 <br />
//                 - Explore collaboration between DRC’s digital vision and 4InA’s
//                 AI- and IoT-powered smart energy solutions.
//                 <br />
//                 - Address energy transition challenges and opportunities in
//                 Africa.
//                 <br />
//                 - Initiate future Tunisia–DRC technological partnerships.
//                 <br />
//                 This impactful exchange reinforced the role of innovation in
//                 shaping Africa’s sustainable energy future.`
//               </p>
//             </div>
//             <Lens hovering={hovering} setHovering={setHovering}>
//               <Image
//                 src={foire}
//                 height="300"
//                 width="700"
//                 alt="Official Visit of the Democratic Republic of Congo Delegation to 4InA Technologie"
//                 onClick={handleImageClick}
//                 style={{ cursor: "zoom-in" }}
//               />
//             </Lens>
//             {isOpen && (
//               <Modal onClose={closeModal}>
//                 <img
//                   src={parti.src}
//                   alt="Participation"
//                   style={{
//                     maxWidth: "90vw",
//                     maxHeight: "90vh",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Modal>
//             )}
//           </div>
//           {/* eventsssss */}
//           <div data-aos="fade-up" className={styles.events1}>
//             <div
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className={styles.eventHeader}
//             >
//               <h2 className={styles.eventTitle}>
//                 4InA Technologie at PetroAfrica 2025 - Powering Africa’s
//                 sustainable energy
//               </h2>
//               <p className={styles.eventDesc}>
//                 `We proudly participated in <strong>PetroAfrica 2025</strong>,
//                 held in Tunis, a landmark event bringing together energy
//                 professionals, innovators, and government representatives from
//                 across Africa and beyond. The event served as a powerful
//                 platform to highlight our{" "}
//                 <strong>cutting-edge energy management solutions</strong>,
//                 combining <strong>AI, IoT, and real-time monitoring</strong> to
//                 drive sustainable transformation in the energy sector. During
//                 the event, our team presented the latest version of our{" "}
//                 <strong>smart hardware and software systems</strong>, tailored
//                 for industrial energy optimization and predictive maintenance.`
//               </p>
//             </div>
//             <Lens hovering={hovering} setHovering={setHovering}>
//               <Image
//                 src={foire2}
//                 height="300"
//                 width="500"
//                 alt="4InA Technologie at PetroAfrica 2025 - Powering Africa’s sustainable energy "
//                 onClick={handleImageClick}
//                 style={{ cursor: "zoom-in" }}
//               />
//             </Lens>
//             {isOpen && (
//               <Modal onClose={closeModal}>
//                 <img
//                   src={parti.src}
//                   alt="Participation"
//                   style={{
//                     maxWidth: "90vw",
//                     maxHeight: "90vh",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Modal>
//             )}
//           </div>
//           <div data-aos="fade-up" className={styles.events1}>
//             <div
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className={styles.eventHeader}
//             >
//               <h2 className={styles.eventTitle}>
//                 Join Our Co-Founder "Sabri Mhimdi" on Express FM
//               </h2>
//               <p className={styles.eventDesc}>
//                 Tune in as our co-founder, "Sabri Mhimdi", shares valuable
//                 insights on AI and embedded systems on Express FM. With his
//                 expertise and forward-thinking perspective, Sabri explores the
//                 latest trends, challenges, and the evolving landscape of our
//                 startup. Whether you're a professional, enthusiast, or simply
//                 curious, this interview provides a compelling glimpse into the
//                 innovations and ideas shaping the future of technologie. Don’t
//                 miss it!
//               </p>
//             </div>
//             <Video />
//           </div>
//           <div data-aos="fade-up" className={styles.events1}>
//             <div
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className={styles.eventHeader2}
//             >
//               <h2 className={styles.eventTitle}>
//                 4INA TECHNOLOGIE’s Participation in the Agritech Program
//               </h2>
//               <p className={styles.eventDesc}>
//                 We’re excited to share our involvement in the Agritech program,
//                 where 4INA TECHNOLOGIE showcased its innovative solutions for
//                 the agricultural sector in Tunisia. Sabri Mhimdi, our CTO and
//                 founder, reflects on the experience: “It was an excellent and
//                 successful experience, where we met many new people and learned
//                 so much.” With support from Innov'i-EU4Innovation, funded by the
//                 European Union and implemented by Expertise France, 4INA
//                 TECHNOLOGIE continues its commitment to developing technological
//                 solutions that strengthen and enhance Tunisia's innovation
//                 ecosystem. Discover how our startup is contributing to the
//                 transformation of agriculture!
//               </p>
//             </div>
//             <Video2 />
//           </div>
//           <div data-aos="fade-up" className={styles.events1}>
//             <div
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className={styles.eventHeader}
//             >
//               <h2 className={styles.eventTitle}>
//                 4InA Technologie Shines in the Digital Energy Challenge
//               </h2>
//               <p className={styles.eventDesc}>
//                 We are proud to announce 4InA Technologie’s remarkable
//                 achievement in the Digital Energy Challenge, organized by the
//                 French Development Agency (AFD) in partnership with ADEME and
//                 the European Union. Selected from 168 applicants, 4InA
//                 Technologie stood out as one of only nine winners from Africa,
//                 including five innovative startups and four energy operators.
//                 This experience has not only enriched our journey but also
//                 strengthened our dedication to excellence and innovation in the
//                 energy sector. Being part of this esteemed program is both a
//                 milestone and a motivation to continue driving impactful
//                 solutions for a sustainable energy future in Africa.
//               </p>
//             </div>
//             <Lens hovering={hovering} setHovering={setHovering}>
//               <Image
//                 src={parti}
//                 height="300"
//                 width="700"
//                 alt="4InA Technologie Shines in the Digital Energy Challenge"
//                 onClick={handleImageClick}
//                 style={{ cursor: "zoom-in" }}
//               />
//             </Lens>
//             {isOpen && (
//               <Modal onClose={closeModal}>
//                 <img
//                   src={parti.src}
//                   alt="Participation"
//                   style={{
//                     maxWidth: "90vw",
//                     maxHeight: "90vh",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Modal>
//             )}
//           </div>
//         </div>
//       </div>
//     </PageTransition>
//   );
// };

// export default Events;
"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import PageTransition from "../../components/PageTransition";
import parti from "../../Assests/svg/parti.svg";
import foire from "../../Assests/foire.png";
import foire2 from "../../Assests/foire2.png";
import Image from "next/image";
import Video from "./video";
import Video2 from "./video2";
import Modal from "./Modal";
import { Lens } from "@/components/ui/lens";

import Swal from "sweetalert2";
import spinner from "../../Assests/svg/Spinne.svg";
import Empty from "../../Assests/gif/Empty.gif";
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  thumbnail_url: string;
  createAt: Date;
}

const Events: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
 const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const handleImageClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://site4ina-back.onrender.com/events/getAll",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        console.error("Error from server:", errData);
        throw new Error(errData.message || "Failed to fetch blogs");
      }

      const data = await response.json();
      setEvents(data); // Met à jour l'état avec les blogs récupérés
    } catch (error) {
      setError(true);
      console.error("Error fetching blogs:", error);
      // alert("Something went wrong. Please try again.");
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "We couldn't load the event articles at the moment. Please try again later.",
        confirmButtonColor: "#0003da",
      });
    }
    finally {
        setLoading(false);
      }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <PageTransition>
      <div className={styles.container}>
        <div className={styles.Header}>
          <h1 className={styles.titleHead}>Events</h1>
          <p className={styles.desc}>
            Here, you can explore a diverse line up of events tailored for
            enthusiasts, professionals, and curious minds alike. From hands-on
            workshops and industry seminars to casual networking sessions, our
            events offer a chance to learn, engage, and grow.
          </p>
        </div>
        <div className={styles.AllEvents}>
          {/* {events.map((event) => (
            
            <div data-aos="fade-up" className={styles.events1}>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className={styles.eventHeader2}
              >
                <h2 className={styles.eventTitle}>
                                   {event.title}

                </h2>
                <p className={styles.eventDesc}>
                                  {event.description}

                </p>
              </div>
            
              <Image
                width={419}
                height={100}
                className={styles.BlogImage}
                src={event.thumbnail_url}
                alt={event.title}
              />
            </div>
          ))} */}
          {loading ? (
                  <div  className={styles.noevents}>

        {/* <p>Loading events...</p> */}
        <Image
            src={spinner}
            alt="Loading events"
            width={400}
            height={400}
            />
            </div>
      ) : error || events.length === 0 ? (
        <div  className={styles.noevents}>
          <Image
            src={Empty}
            alt="No events"
            width={500}
            height={500}
          />
         
           {/* <p className={styles.noEventsText}>
            {error
              ? "Failed to load events. Please try again later."
              : "No events available at the moment."}
          </p> */}
        </div>
      ) : (
          events.reverse().map((event) => {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(event.thumbnail_url); // Simple extension check

  return (
    <div key={event.id} data-aos="fade-up" className={styles.events1}>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className={styles.eventHeader2}
      >
        <h2 className={styles.eventTitle}>{event.title}</h2>
        <p className={styles.eventDesc}
          dangerouslySetInnerHTML={{ __html: event.description }}
 
         />
      </div>

      {isVideo ? (
        
        <video
          width={550}
          controls
          className={styles.BlogImage}
          src={event.thumbnail_url}
        />
      ) : (
        <>
        <Lens hovering={hovering} setHovering={setHovering}>
        <Image
        width={550}
        height={100}
        className={styles.BlogImage}
        src={event.thumbnail_url}
        alt={event.title}
        />
            </Lens>
        </>

      )}
    </div>
  );
}))}

        </div>
      </div>
    </PageTransition>
  );
};

export default Events;
