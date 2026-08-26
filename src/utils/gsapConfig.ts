import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Set default ease
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.9,
  });
}

export { gsap, ScrollTrigger, useGSAP };

export const GSAP_EASE = {
  luxury: 'power3.out',
  smooth: 'power2.out',
  cinematic: 'expo.out',
  bounce: 'back.out(1.4)',
  gentle: 'sine.out',
};
