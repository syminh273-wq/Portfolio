import React from "react";
import Particles from "react-tsparticles";

function Particle({ isDarkMode = true }) {
  return (
    <Particles
      id="tsparticles"
      key={isDarkMode ? "dark" : "light"}
      params={{
        particles: {
          number: {
            value: isDarkMode ? 160 : 110,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: isDarkMode ? "#5b8def" : "#3d63c9",
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: isDarkMode ? 1 : 1.3,
          },
          opacity: {
            value: isDarkMode ? 0.4 : 0.55,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: isDarkMode ? 0.05 : 0.2,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
