import { gsap } from "gsap";

export const fadeIn = (element) => {
  gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1 });
};
