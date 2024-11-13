import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".l-horizontal-content", {
  scrollTrigger: {
    trigger: ".l-horizontal",
    pin: true,
    anticipatePin: 1,
    scrub: true,
    // end: "+=3000",
    markers: false,
  },
  x: "-85%",
  ease: "none",
});
