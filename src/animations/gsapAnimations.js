import { gsap } from 'gsap';

export const fadeIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  );
};
