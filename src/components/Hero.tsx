import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap, useGSAP } from '@/utils/gsapConfig';

interface HeroProps {
  onNavigate?: (pageId: string) => void;
}

// Curated HORIZONTAL (landscape) gallery images for full-width hero presentation
// Curated HORIZONTAL (landscape) gallery images for full-width hero presentation
// Excludes images 1, 2, 3, 5, 17, 21 as well as all vertical/portrait images
const HERO_GALLERY_SLIDES = [
  { id: 'g-10', src: '/assets/ved-10.jpeg', title: 'The American Circuit & Facilities', category: 'Landscapes' },
  { id: 'g-11', src: '/assets/ved-11.jpeg', title: 'Cross-Country Obstacle Execution', category: 'Competition' },
  { id: 'g-14', src: '/assets/ved-14.jpeg', title: 'Equestrian Focus & Equine Bond', category: 'The Bond' },
  { id: 'g-16', src: '/assets/ved-16.jpeg', title: 'Championship Jump Mastery', category: 'Milestones' },
  { id: 'g-18', src: '/assets/ved-18.jpeg', title: 'Equine Athlete Partnership', category: 'The Bond' },
  { id: 'g-20', src: '/assets/ved-20.jpeg', title: 'International Competition Arena', category: 'Competition' },
  { id: 'g-23', src: '/assets/ved-23.jpeg', title: 'Cross-Country Power & Rhythm', category: 'Competition' },
  { id: 'g-24', src: '/assets/ved-24.jpeg', title: 'Trust & Equine Harmony', category: 'The Bond' },
  { id: 'g-25', src: '/assets/ved-25.jpeg', title: 'Championship Stride Precision', category: 'Competition' },
  { id: 'g-26', src: '/assets/ved-26.jpeg', title: 'Athlete Focus & Discipline', category: 'Portraits' },
  { id: 'g-27', src: '/assets/ved-27.jpeg', title: 'Dedication & Horsemanship', category: 'The Bond' },
  { id: 'g-28', src: '/assets/ved-28.jpeg', title: 'Jump Clearance & Pacing', category: 'Competition' },
  { id: 'g-29', src: '/assets/ved-29.jpeg', title: 'Ocala Circuit Training Grounds', category: 'Landscapes' },
  { id: 'g-30', src: '/assets/ved-30.jpeg', title: 'Eventing Speed & Balance', category: 'Competition' },
  { id: 'g-31', src: '/assets/ved-31.jpeg', title: 'The Road to 2032 Olympics', category: 'Portraits' },
  { id: 'g-32', src: '/assets/ved-32.jpeg', title: 'World Stage Excellence', category: 'Competition' },
];

export default function Hero({ onNavigate: _onNavigate }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_GALLERY_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Eyebrow badge reveal immediately
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -12, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' },
          0
        );
      }

      // Title reveal immediately
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          0.05
        );
      }

      // Subtitle reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          0.1
        );
      }

      // Credential Pills staggered slide-up
      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 12, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
          0.15
        );
      }

      // Metrics items staggered entrance
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
          0.2
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#140e08] flex flex-col justify-between items-center pt-16 pb-6 sm:pt-20 sm:pb-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* GALLERY IMAGES BACKGROUND SHOWCASE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {HERO_GALLERY_SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`w-full h-full object-cover object-top transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Crystal-Clear Overlays: Preserves bright top of image while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e08] via-[#140e08]/40 to-black/30 z-[2] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#140e08]/85 z-[2] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/45 z-[2] pointer-events-none" />
      </div>

      {/* GALLERY NAVIGATION BUTTONS (LEFT & RIGHT) */}
      <button
        onClick={prevSlide}
        aria-label="Previous gallery image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-[#a8895c] border border-[#f0c775]/40 hover:border-[#f0c775] text-[#fcefd2] hover:text-[#18120b] flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 group"
      >
        <ChevronLeft size={22} className="transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next gallery image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-[#a8895c] border border-[#f0c775]/40 hover:border-[#f0c775] text-[#fcefd2] hover:text-[#18120b] flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 group"
      >
        <ChevronRight size={22} className="transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* TOP / UPPER CONTENT - PROPERLY FRAMED WITH HIGH CONTRAST & ANIMATIONS */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-3 sm:mt-2">
        {/* Eyebrow Badge - Floating Breathe Animation with Pulsing Indicator */}
        <div
          ref={badgeRef}
          className="animate-breathe inline-flex items-center gap-2 rounded-full border border-[#f0c775]/80 bg-black/85 px-3.5 sm:px-5 py-1.5 sm:py-2 backdrop-blur-md shadow-[0_4px_25px_rgba(240,199,117,0.3)] transition-all duration-500 hover:scale-105 hover:border-[#f0c775]"
        >
          <span className="h-2 w-2 rounded-full bg-[#f0c775] animate-pulse shrink-0 shadow-[0_0_8px_#f0c775]" />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#fcefd2] font-bold">
            Eventing &middot; Team India Athlete
          </span>
        </div>

        {/* Main Name Heading - Continuous Luxury Gold Shimmer Sweep Animation & Deep Shadow */}
        <h1
          ref={titleRef}
          className="mt-3 sm:mt-6 font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal animate-text-shimmer tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.98)] leading-tight select-none"
        >
          Ved Sarma Sarkar
        </h1>

        {/* Subtitle - Crisp Ivory with Radiant Amber Pathway Accent */}
        <p
          ref={subtitleRef}
          className="mt-2.5 sm:mt-5 max-w-2xl font-serif text-base sm:text-xl md:text-2xl italic text-[#f8f5ee] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-relaxed px-2 sm:px-3 transition-all duration-500"
        >
          Pursuing excellence on the world stage.
          <span className="text-[#f0c775] sm:ml-2 not-italic font-sans text-xs sm:text-base font-semibold block sm:inline mt-1 sm:mt-0 transition-colors hover:text-[#ffe4a0] drop-shadow-md">
            &mdash; Pathway to the Asian Games &amp; Olympics
          </span>
        </p>
      </div>

      {/* BOTTOM ROW (CREDENTIALS & METRICS) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-3 sm:mt-8 pb-1">
        {/* Credentials Pill Strip - Interactive Hover Lift & Gold Glow Animation */}
        <div
          ref={pillsRef}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 font-sans text-[8px] xs:text-[9px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#fcefd2]"
        >
          <span className="bg-[#18120b]/90 px-2.5 xs:px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] hover:text-white transition-all duration-300 cursor-default">
            International Podium Achiever
          </span>
          <span className="bg-[#18120b]/90 px-2.5 xs:px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] hover:text-white transition-all duration-300 cursor-default">
            National Medallist
          </span>
          <span className="bg-[#18120b]/90 px-2.5 xs:px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] hover:text-white transition-all duration-300 cursor-default">
            FEI Athlete
          </span>
        </div>

        {/* Key Metrics Strip - Radiant Gold Glow & Subtle Card Lift */}
        <div
          ref={metricsRef}
          className="mt-2.5 sm:mt-5 pt-2.5 sm:pt-4 border-t border-[#f0c775]/30 grid grid-cols-3 gap-1.5 xs:gap-3 sm:gap-8 md:gap-12 w-full max-w-xl"
        >
          <div className="group/metric transition-transform duration-300 hover:scale-105">
            <div className="font-display text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
              Team India
            </div>
            <div className="text-[8px] xs:text-[9px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
              Equestrian Eventing
            </div>
          </div>
          <div className="group/metric transition-transform duration-300 hover:scale-105">
            <div className="font-display text-sm xs:text-lg sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
              FEI Elite
            </div>
            <div className="text-[8px] xs:text-[10px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
              International Circuit
            </div>
          </div>
          <div className="group/metric transition-transform duration-300 hover:scale-105">
            <div className="font-display text-sm xs:text-lg sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
              39 Items
            </div>
            <div className="text-[8px] xs:text-[10px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
              Videos &amp; Photos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

