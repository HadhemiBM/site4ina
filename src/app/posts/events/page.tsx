
"use client";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
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
    useEffect(() => {
    fetchEvents();
  }, []);
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
      setEvents(data); 
    } catch (error) {
      setError(true);
      console.error("Error fetching blogs:", error);
     
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
        
          {loading ? (
                  <div  className={styles.noevents}>

     
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
         
          
        </div>
      ) : (
          [...events].reverse().map((event) => {

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
         key={event.id}
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
