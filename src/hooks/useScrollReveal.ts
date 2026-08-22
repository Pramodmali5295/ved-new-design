import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they scroll into view. Returns a ref to attach to a container.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(dependency?: unknown) {
  const ref = useRef<T>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const container = ref.current ?? document;
      const elements = container.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px 100px 0px' }
      );

      elements.forEach((el) => {
        // If element is already in viewport or at top of page, make it visible immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer?.observe(el);
        }
      });
    };

    // Run setup
    setupObserver();

    // Small delay to ensure all nested components finished rendering
    const timer = setTimeout(setupObserver, 60);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [dependency]);

  return ref;
}

/**
 * Tracks the currently-active section id based on scroll position,
 * for highlighting the nav link.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
