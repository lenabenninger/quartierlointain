import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".floating-img", {
  yPercent: -17,
  scrollTrigger: {
    trigger: ".container",
    scrub: 1,
  },
}); //parallaxe subtile sur images détourées

// const viewportWidth = window.screen.width;
// const sliderWidth = document.querySelector(
//   ".l-horizontal-content img"
// ).offsetWidth;

gsap.to(".l-horizontal-content", {
  scrollTrigger: {
    trigger: ".l-horizontal",
    pin: true,
    anticipatePin: 1,
    scrub: true,
    end: "+=3000",
  },
  x: "-85%",
  ease: "ease-in",
});
