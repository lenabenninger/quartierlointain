import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.from(".background-leaves", {
//   scrollTrigger: {
//     trigger: ".background-leaves",
//     start: "center 90%",
//     // end: "center 10%",
//   },
//   x: -1800,
//   duration: 1.5,
// });

// function createScrollAnimation(target, trigger) {
//   gsap.from(target, {
//     scrollTrigger: {
//       trigger: trigger,
//       start: "center 90%",
//       // end: "center 10%",
//     },
//     x: -1800,
//     duration: 1.5,
//   });
// }

// Call the function for each element you want to animate
createScrollAnimation(".background-leaves", ".background-leaves");
createScrollAnimation(".another-element", ".another-trigger");

gsap.to(".floating-img", {
  yPercent: -17,
  scrollTrigger: {
    trigger: ".",
    scrub: 1,
  },
}); //parallaxe subtile sur images détourées

gsap.to(".l-horizontal-content", {
  scrollTrigger: {
    trigger: ".l-horizontal",
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    end: "+=5000",
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
    end: "+=5000",
  },
  x: "-50%",
  ease: "ease-in",
});
