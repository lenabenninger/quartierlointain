import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".background-leaves", {
//   scrollTrigger: {
//     trigger: ".background-leaves",
//     start: "center 90%",
//     // end: "center 10%",
//   },
//   x: -1800,
//   duration: 1.5,
// });

gsap.to(".l-horizontal-content", {
  scrollTrigger: {
    trigger: ".l-horizontal",
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    end: "+=6000",
  },
  x: "-82%",
  ease: "ease-in",
});

gsap.to(".l-end-content", {
  scrollTrigger: {
    trigger: ".l-end",
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    end: "+=2000",
  },
  x: "-50%",
  ease: "ease-in",
});

// Function to create the animation with different triggers and targets
function slideInLeft(target, trigger) {
  gsap.from(target, {
    scrollTrigger: {
      trigger: trigger,
      start: "center 90%",
      // end: "center 10%",
    },
    x: -1800,
    duration: 1.5,
  });
}

function slideInRight(target, trigger) {
  gsap.from(target, {
    scrollTrigger: {
      trigger: trigger,
      start: "center 90%",
      // end: "center 10%",
    },
    x: 1800,
    duration: 1.5,
  });
}

// Call the function for each element you want to animate
slideInLeft(".background-leaves", ".background-leaves");
slideInLeft(".background-praying", ".background-praying");
slideInLeft(".background-ground", ".background-ground");
slideInLeft(".floating-butterfly", ".floating-butterfly");

slideInRight(".background-sky", ".background-sky");
slideInRight(".background-cemetery", ".background-cemetery");
slideInRight(".background-earthquake", ".background-earthquake");
slideInRight(".floating-unconscious", ".floating-unconscious");
