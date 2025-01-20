import { gsap } from "gsap";

export const fadeIn = (target, duration = 1) => {
  gsap.fromTo(
    target,
    { opacity: 0 },
    { opacity: 1, duration, ease: "power3.out" }
  );
};

export const slideUp = (target, duration = 1) => {
  gsap.fromTo(
    target,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration, ease: "power3.out" }
  );
};
