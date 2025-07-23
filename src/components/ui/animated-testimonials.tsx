"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Swal from "sweetalert2";

interface Testimonial {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  thumbnail_url: string;
  createAt:Date;
}
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalTestimonial, setModalTestimonial] = useState<Testimonial | null>(
    null
  );
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const isActive = (index: number) => {
    return index === active;
  };
  useEffect(() => {
    if (autoplay && !showModal) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay, showModal]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto self-center max-w-sm px-0 py-0 font-sans antialiased md:max-w-full lg:max-w-8xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.thumbnail_url}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.thumbnail_url}
                    alt={testimonial.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-2xl "
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3
              className="text-2xl font-bold text-black dark:text-white"
              onClick={() => {
                setModalTestimonial(testimonials[active]);
                setShowModal(true);
              }}
            >
              {testimonials[active].title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].date} -   {testimonials[active].place}
            </p>
            {/* <p className="text-sm text-blue-500 da">See more</p> */}
            <p
              className="text-sm text-blue-500 cursor-pointer hover:underline"
              onClick={() => {
                setModalTestimonial(testimonials[active]);
                setShowModal(true);
              }}
            >
              See more
            </p>

            {modalTestimonial && (
              <div
                className={`fixed inset-0 z-50 items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                  showModal ? "flex opacity-100" : "hidden opacity-0"
                }`}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[1200px] max-w-full rounded-2xl bg-white p-6 shadow-2xl"
                >
                  <button
                    onClick={() => {
                      setShowModal(false);
                      // setModalTestimonial(null); // 👈 Ne réinitialise PAS immédiatement
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white"
                  >
                    ✕
                  </button>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={modalTestimonial.thumbnail_url}
                      alt={modalTestimonial.title}
                      className="h-full w-full md:w-1/2 object-cover rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                        {modalTestimonial.title}
                      </h3>
                      <p className="text-sm text-black  mb-4">
                        {modalTestimonial.date} -  {modalTestimonial.place}
                      </p>
                      <p className="text-base text-black ">
                        {modalTestimonial.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            <motion.p
              className="mt-8 text-lg text-gray-500 dark:text-neutral-300 line-clamp-3 overflow-hidden"
              onClick={() => {
                setModalTestimonial(testimonials[active]);
                setShowModal(true);
              }}
            >
              {testimonials[active].description.split(" ").map((word, index) => (
         
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
