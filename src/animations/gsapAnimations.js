// src/animations/gsapAnimations.js
import { gsap } from 'gsap';

export const fadeIn = (element, duration = 1) => {
  gsap.fromTo(element, 
    { opacity: 0 }, 
    { opacity: 1, duration }
  );
};

export const slideIn = (element, direction = 'left', distance = 100, duration = 1) => {
  const xValue = direction === 'left' ? -distance : distance;
  gsap.fromTo(element, 
    { x: xValue, opacity: 0 }, 
    { x: 0, opacity: 1, duration }
  );
};
