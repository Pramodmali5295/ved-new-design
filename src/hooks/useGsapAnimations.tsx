import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/utils/gsapConfig';

/**
 * Hook to automatically apply GSAP ScrollTrigger animations
 * to all matching child elements inside a container ref.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(dependencies: unknown[] = []) {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Ensure ScrollTrigger refreshes accurately after layout
      ScrollTrigger.refresh();

      // 1. Standard Upwards Reveal (.gsap-reveal, .gsap-reveal-up, .reveal)
      const upElements = containerRef.current.querySelectorAll(
        '.gsap-reveal, .gsap-reveal-up, .reveal:not(.reveal-left):not(.reveal-right):not(.reveal-scale)'
      );
      upElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 94%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Slide from Left (.gsap-reveal-left, .reveal-left)
      const leftElements = containerRef.current.querySelectorAll('.gsap-reveal-left, .reveal-left');
      leftElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -32 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 94%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Slide from Right (.gsap-reveal-right, .reveal-right)
      const rightElements = containerRef.current.querySelectorAll('.gsap-reveal-right, .reveal-right');
      rightElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 94%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Subtle Scale & Lift (.gsap-reveal-scale, .reveal-scale)
      const scaleElements = containerRef.current.querySelectorAll('.gsap-reveal-scale, .reveal-scale');
      scaleElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.94, y: 22 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 94%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 5. Staggered containers (.gsap-stagger-container)
      const staggerContainers = containerRef.current.querySelectorAll('.gsap-stagger-container');
      staggerContainers.forEach((parent) => {
        const items = parent.querySelectorAll('.gsap-stagger-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 26, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: parent,
                start: 'top 92%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // 6. Ambient Subtle Parallax (.gsap-parallax)
      const parallaxElements = containerRef.current.querySelectorAll('.gsap-parallax');
      parallaxElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: -20 },
          {
            y: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      });
    },
    { scope: containerRef, dependencies }
  );

  return containerRef;
}

/**
 * Animated number counter component
 */
export function GsapCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 0.7,
  className = '',
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!countRef.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: end,
      duration: duration ?? 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${prefix}${Math.floor(obj.val)}${suffix}`;
        }
      },
      onComplete: () => {
        if (countRef.current) {
          countRef.current.textContent = `${prefix}${end}${suffix}`;
        }
      },
    });
  }, [end, duration, prefix, suffix]);

  return <span ref={countRef} className={className}>{prefix}0{suffix}</span>;
}
