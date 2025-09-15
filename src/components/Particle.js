import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <>
      {/* Minimal right-moving background particles */}
      <Particles
        id="tsparticles-bg"
        params={{
          particles: {
            number: { value: 100, density: { enable: true, value_area: 1500 } },
            color: { value: "#f5f7fa" },
            shape: { type: ["circle"] },
            line_linked: { enable: false },
            move: {
              direction: "right",
              speed: 0.05,
              random: true,
              straight: false,
              out_mode: "out",
            },
            size: { value: 1 },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              push: { particles_nb: 1 },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -2,
        }}
      />

      {/* Colorful, interactive, bubble particles with lines */}
      <Particles
        id="tsparticles-fg"
        params={{
          particles: {
            number: { value: 70, density: { enable: true, value_area: 1200 } },
            color: { value: ["#b2d8f7", "#e0c3fc", "#f5f7fa", "#cfd9df"] },
            shape: { type: ["circle"] },
            line_linked: {
              enable: true,
              distance: 170,
              color: "#b2d8f7",
              opacity: 0.09,
              width: 1,
            },
            move: {
              direction: "none",
              speed: 0.13,
              random: true,
              straight: false,
              out_mode: "out",
            },
            size: { value: { min: 1, max: 2.5 }, random: true },
            opacity: { value: 0.28, random: true },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: ["bubble", "grab"] },
              onclick: { enable: false },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 120,
                size: 6,
                duration: 2,
                opacity: 0.7,
                speed: 2,
              },
              grab: {
                distance: 180,
                line_linked: { opacity: 0.45 },
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      />
    </>
  );
}

export default Particle;
