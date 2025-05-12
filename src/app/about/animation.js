"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import styles from './index.module.css';

const AnimationAbout = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 20,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 10, duration: 15 },
          grab: { distance: 250 },
        },
      },
      particles: {
        color: { value: ["#104090", "#00c8ff", "#0e0559", "#FFAF51"] },
        links: {
          color: "random",
          distance: 20,
          enable: true,
          opacity: 0.5,
          width: 1.2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 150,
        },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className={styles.particleContainer}>
      <Particles
        id={props.id}
        init={particlesLoaded}
        options={options}
        className={styles.particles}
      />
    </div>
  );
};

export default AnimationAbout;
