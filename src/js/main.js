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

gsap.to(".floating-img", {
  yPercent: -40,
  scrollTrigger: {
    trigger: ".container",
    scrub: 1,
    // anticipatePin: 1,
  },
  ease: "none",
}); //parallaxe subtile sur images détourées

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
    end: "+=1000",
  },
  x: "-50%",
  ease: "ease-in-out",
});

// Function to create the animation with different triggers and targets

function slideInLeft(target) {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "center 99%",
      // end: "center 10%",
    },
    x: -300,
    opacity: 0,
    duration: 1,
    ease: "ease-in-out",
  });
}

slideInLeft(".background-leaves");
slideInLeft(".background-praying");
slideInLeft(".background-ground");
slideInLeft(".floating-butterfly");
slideInLeft(".floating-graves");
slideInLeft(".floating-fainting");

function slideInRight(target) {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "center 97%",
      // end: "center 10%",
    },
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "ease-in-out",
  });
}

slideInRight(".background-sky");
slideInRight(".background-cemetery");
slideInRight(".background-earthquake");
slideInRight(".floating-temple");
slideInRight(".floating-praying");
slideInRight(".floating-unconscious");
slideInRight(".floating-hands");

function textAppear(target) {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "center 90%",
      // end: "center 10%",
    },
    opacity: 0,
    transform: "scale(0.95)",
    duration: 2,
    ease: "ease-in-out",
  });
}

textAppear(".monologue-college");
textAppear(".monologue-temple");
textAppear(".monologue-tombe");
textAppear(".monologue-maman");

// Call the function for each element you want to animate

textAppear();
