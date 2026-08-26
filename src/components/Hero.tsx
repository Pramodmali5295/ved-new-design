import { useRef } from 'react';
import { gsap, useGSAP } from '@/utils/gsapConfig';

interface HeroProps {
  onNavigate?: (pageId: string) => void;
}

export default function Hero({ onNavigate: _onNavigate }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoBgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Video smooth ambient scale entrance
      if (videoBgRef.current) {
        tl.fromTo(
          videoBgRef.current,
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
          0
        );
      }

      // Eyebrow badge pop-in
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -24, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
          0.3
        );
      }

      // Title reveal
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.95, ease: 'power3.out' },
          0.5
        );
      }

      // Subtitle reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
          0.7
        );
      }

      // Credential Pills staggered slide-up
      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 22, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
          0.85
        );
      }

      // Metrics items staggered entrance
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
          1.0
        );
      }
    },
    { scope: heroRef }
  );

  const handleScrollDown = () => {
    const summaryEl = document.getElementById('overview-summary');
    if (summaryEl) {
      summaryEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#140e08] flex flex-col justify-between items-center pt-16 pb-6 sm:pt-20 sm:pb-8"
    >
      {/* FULL-WIDTH & FULL-FRAME BANNER VIDEO IN BACKGROUND - Click anywhere to scroll */}
      <div
        ref={videoBgRef}
        onClick={handleScrollDown}
        className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
        title="Click to scroll down"
      >
        <video
          src="/assets/video-4.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-fill pointer-events-none"
        />

        {/* Subtle, crystal-clear gradient overlays for maximum video visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#19140e]/95 via-black/20 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* TOP / UPPER CONTENT ON VIDEO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-2 sm:mt-0">
        {/* Eyebrow Badge - Floating Breathe Animation with Pulsing Indicator */}
        <div
          ref={badgeRef}
          className="animate-breathe inline-flex items-center gap-2 rounded-full border border-[#f0c775]/70 bg-black/80 px-3 sm:px-4 py-1.5 backdrop-blur-md shadow-[0_4px_25px_rgba(240,199,117,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#f0c775]"
        >
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#f0c775] animate-pulse shrink-0" />
          <span className="font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#f8ebd2] font-bold">
            Eventing &middot; Team India Athlete
          </span>
        </div>

        {/* Main Name Heading - Continuous Luxury Gold Shimmer Sweep Animation */}
        <h1
          ref={titleRef}
          className="mt-3 sm:mt-6 font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-normal animate-text-shimmer tracking-tight drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)] leading-tight select-none"
        >
          Ved Sarma Sarkar
        </h1>

        {/* Subtitle - Crisp Ivory with Radiant Amber Pathway Accent */}
        <p
          ref={subtitleRef}
          className="mt-2 sm:mt-5 max-w-2xl font-serif text-base sm:text-xl md:text-2xl italic text-[#f8f5ee] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed px-2 transition-all duration-500"
        >
          Pursuing excellence on the world stage.
          <span className="text-[#f0c775] sm:ml-2 not-italic font-sans text-xs sm:text-base font-semibold block sm:inline mt-1 sm:mt-0 transition-colors hover:text-[#ffe4a0]">
            &mdash; Pathway to the Asian Games &amp; Olympics
          </span>
        </p>
      </div>

      {/* BOTTOM ROW (CREDENTIALS & METRICS) DIRECTLY IN THE BOTTOM ROW ON VIDEO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-4 sm:mt-8 pb-1">
        {/* Credentials Pill Strip - Interactive Hover Lift & Gold Glow Animation */}
        <div
          ref={pillsRef}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#fcefd2]"
        >
          <span className="bg-[#18120b]/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] hover:text-white transition-all duration-300 cursor-default">
            International Podium Achiever
          </span>
          <span className="bg-[#18120b]/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] hover:text-white transition-all duration-300 cursor-default">
            National Medallist
          </span>
          <span className="bg-[#18120b]/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] hover:text-white transition-all duration-300 cursor-default">
            FEI Athlete
          </span>
        </div>

        {/* Key Metrics Strip - Radiant Gold Glow & Subtle Card Lift */}
        <div
          ref={metricsRef}
          className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-[#f0c775]/30 grid grid-cols-3 gap-2 sm:gap-8 md:gap-12 w-full max-w-xl"
        >
          <div className="group/metric transition-transform duration-300 hover:scale-105">
            <div className="font-display text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
              Team India
            </div>
            <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
              Equestrian Eventing
            </div>
          </div>
          <div className="group/metric transition-transform duration-300 hover:scale-105">
            <div className="font-display text-lg sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
              FEI Elite
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
              International Circuit
            </div>
          </div>
          <div className="group/metric transition-transform duration-300 hover:scale-105">
            <div className="font-display text-lg sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
              39 Items
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
              Videos &amp; Photos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
