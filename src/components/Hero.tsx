import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap, useGSAP } from '@/utils/gsapConfig';

interface HeroProps {
  onNavigate?: (pageId: string) => void;
}

const HERO_VIDEO_SRC = '/assets/hero video.mp4';

export default function Hero({ onNavigate }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Set video start time to 20 seconds and ensure looping starts from 20 seconds
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setStartTime = () => {
      if (video.currentTime < 20) {
        video.currentTime = 20;
      }
      video.play().catch(() => {});
    };

    if (video.readyState >= 1) {
      setStartTime();
    } else {
      video.addEventListener('loadedmetadata', setStartTime);
    }

    const handleTimeUpdate = () => {
      // If video looped back to start (< 20s), seek back to 20s
      if (video.currentTime < 19.5 && !video.seeking) {
        video.currentTime = 20;
      }
    };

    const handleEnded = () => {
      video.currentTime = 20;
      video.play().catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', setStartTime);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Eyebrow badge entrance with spring bounce
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -25, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(2)' },
          0
        );
      }

      // Title reveal with upward slide & smooth reveal
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 28, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power3.out' },
          0.1
        );
      }

      // Subtitle reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          0.35
        );
      }

      // Credential Pills staggered slide-up with spring
      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.5)' },
          0.45
        );
      }

      // CTA Buttons pop-in
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 18, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.09, ease: 'back.out(1.4)' },
          0.55
        );
      }

      // Metrics items staggered entrance
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 24, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out' },
          0.6
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] min-h-[100dvh] w-full overflow-hidden bg-[#140e08] flex items-center justify-center pt-20 xxs:pt-22 xs:pt-24 sm:pt-28 lg:pt-32 pb-10 xxs:pb-12 sm:pb-16 lg:pb-20 select-none"
    >
      {/* CINEMATIC FULL-BLEED ORIGINAL QUALITY BACKGROUND HERO VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* NATURAL LIGHTWEIGHT VIGNETTE FOR CLEAN TEXT READABILITY WITHOUT DIMMING VIDEO */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e08]/60 via-black/20 to-[#140e08]/70 z-[1]" />
      </div>

      {/* CENTERED HERO CONTENT OVER VIDEO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 xxs:px-4 sm:px-6 lg:px-10 py-2 xxs:py-4 sm:py-6 lg:py-8 flex flex-col items-center text-center justify-center">
        {/* Eyebrow Badge & Supported by Bajaj Auto Tag */}
        <div ref={badgeRef} className="flex flex-wrap items-center justify-center gap-1.5 xxs:gap-2 sm:gap-2.5 max-w-full">
          <div className="animate-breathe inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#f0c775]/80 bg-black/85 px-2.5 xxs:px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-md shadow-[0_4px_25px_rgba(240,199,117,0.35)] transition-all duration-500 hover:scale-105 hover:border-[#f0c775]">
            <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-[#f0c775] animate-pulse shrink-0 shadow-[0_0_8px_#f0c775]" />
            <span className="font-sans text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#fcefd2] font-bold whitespace-nowrap">
              Indian Equestrian Athlete
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#f0c775]/40 bg-black/80 px-2.5 xxs:px-3 sm:px-3.5 py-1 sm:py-1.5 backdrop-blur-md shadow-md hover:border-[#f0c775]/70 hover:scale-105 transition-all">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0c775]" />
            <span className="font-sans text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.10em] sm:tracking-[0.16em] text-[#e6c994] whitespace-nowrap">
              Supported by <span className="font-bold text-white">Bajaj Auto Ltd.</span>
            </span>
          </div>
        </div>

        {/* Main Name Heading - Fluid Typography Across Devices */}
        <h1
          ref={titleRef}
          className="mt-2.5 xxs:mt-3.5 sm:mt-5 font-display text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-normal animate-text-shimmer tracking-tight drop-shadow-[0_8px_35px_rgba(0,0,0,1)] leading-[1.08] sm:leading-[1.06] text-center"
        >
          Ved Sarma Sarkar
        </h1>

        {/* Subtitle - Responsive Sizing */}
        <p
          ref={subtitleRef}
          className="mt-2 xxs:mt-2.5 sm:mt-5 max-w-2xl font-serif text-xs xxs:text-sm xs:text-base sm:text-xl md:text-2xl italic text-[#f8f5ee] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-relaxed text-center mx-auto px-1.5 sm:px-2"
        >
          Pursuing excellence on the world stage.
          <span className="text-[#f0c775] not-italic font-sans text-[10px] xxs:text-[11px] xs:text-xs sm:text-base font-semibold block mt-0.5 sm:mt-2 transition-colors hover:text-[#ffe4a0] drop-shadow-md">
            &mdash; Pathway to the Asian Games &amp; Olympics
          </span>
        </p>

        {/* Credentials Pill Strip - Fluid Wrapping */}
        <div
          ref={pillsRef}
          className="mt-3.5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 font-sans text-[7.5px] xxs:text-[8.5px] xs:text-[9.5px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#fcefd2]"
        >
          <span className="bg-black/85 px-2 xxs:px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-lg hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] transition-all duration-300 cursor-default">
            International Podium Achiever
          </span>
          <span className="bg-black/85 px-2 xxs:px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-lg hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] transition-all duration-300 cursor-default">
            National Medallist
          </span>
          <span className="bg-black/85 px-2 xxs:px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-lg hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_20px_rgba(240,199,117,0.35)] transition-all duration-300 cursor-default">
            FEI Athlete
          </span>
        </div>

        {/* Quick Action Navigation Buttons - Fully Touch-Friendly & Responsive */}
        <div ref={ctaRef} className="mt-4 sm:mt-7 flex flex-col xxs:flex-row flex-wrap items-center justify-center gap-2 xxs:gap-2.5 sm:gap-4 w-full px-2">
          <button
            onClick={() => onNavigate?.('about')}
            className="btn-shimmer group w-full xxs:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#a8895c] hover:bg-[#c2a372] px-4 xxs:px-5 sm:px-7 py-2 xxs:py-2.5 sm:py-3 font-sans text-[10px] xxs:text-[11px] sm:text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 cursor-pointer min-h-[38px] xxs:min-h-[42px] sm:min-h-[44px]"
          >
            <span>About Ved</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate?.('making')}
            className="btn-shimmer group w-full xxs:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/65 hover:border-[#f0c775] hover:text-[#f0c775] px-4 xxs:px-5 sm:px-7 py-2 xxs:py-2.5 sm:py-3 font-sans text-[10px] xxs:text-[11px] sm:text-xs uppercase tracking-wider text-[#d9cdb8] transition-all shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer min-h-[38px] xxs:min-h-[42px] sm:min-h-[44px]"
          >
            <span>The Journey &amp; Record</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Key Metrics Strip - Responsive Grid Across Mobile & Desktop */}
        <div
          ref={metricsRef}
          className="mt-5 sm:mt-9 pt-3.5 sm:pt-6 border-t border-[#f0c775]/30 grid grid-cols-3 gap-1 xxs:gap-1.5 xs:gap-2.5 sm:gap-6 w-full max-w-2xl mx-auto text-center"
        >
          <div className="group/metric transition-transform duration-300 hover:scale-105 bg-black/40 backdrop-blur-sm p-1 xxs:p-1.5 sm:p-3 rounded-lg border border-white/5">
            <div className="font-display text-xs xxs:text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors truncate">
              Team India
            </div>
            <div className="text-[6.5px] xxs:text-[7.5px] xs:text-[8.5px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium leading-tight truncate">
              Equestrian Eventing
            </div>
          </div>
          <div className="group/metric transition-transform duration-300 hover:scale-105 bg-black/40 backdrop-blur-sm p-1 xxs:p-1.5 sm:p-3 rounded-lg border border-white/5">
            <div className="font-display text-xs xxs:text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors truncate">
              FEI Elite
            </div>
            <div className="text-[6.5px] xxs:text-[7.5px] xs:text-[8.5px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium leading-tight truncate">
              International Circuit
            </div>
          </div>
          <div className="group/metric transition-transform duration-300 hover:scale-105 bg-black/40 backdrop-blur-sm p-1 xxs:p-1.5 sm:p-3 rounded-lg border border-white/5">
            <div className="font-display text-xs xxs:text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors truncate">
              Silver &amp; Bronze
            </div>
            <div className="text-[6.5px] xxs:text-[7.5px] xs:text-[8.5px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium leading-tight truncate">
              Podiums &amp; Medals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
