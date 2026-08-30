import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap, useGSAP } from '@/utils/gsapConfig';

interface HeroProps {
  onNavigate?: (pageId: string) => void;
}

// Featured competition action video for the hero
const HERO_VIDEO = {
  src: '/assets/video-7.mp4',
  title: 'Championship Course Execution',
};

export default function Hero({ onNavigate }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);

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

      // Video Card cinematic scale & 3D entrance
      if (videoCardRef.current) {
        tl.fromTo(
          videoCardRef.current,
          { opacity: 0, scale: 0.92, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power3.out' },
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
      className="relative min-h-[92vh] sm:min-h-[96vh] lg:min-h-[100dvh] w-full overflow-hidden bg-[#140e08] flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 select-none"
    >
      {/* AMBIENT ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Soft blurred video backdrop spreading arena light and color */}
        <video
          src={HERO_VIDEO.src}
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-125 pointer-events-none"
        />
        {/* Dark radial and linear gradients for luxury aesthetics and contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e08]/90 via-[#140e08]/80 to-[#140e08] z-[1]" />
        <div
          className="absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-[#f0c775]/12 blur-[110px] z-[1] pointer-events-none animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-[#a8895c]/12 blur-[110px] z-[1] pointer-events-none animate-pulse"
          style={{ animationDuration: '6s' }}
        />
      </div>

      {/* TWO-COLUMN CONTENT GRID: CENTERED TEXT ONE SIDE, VIDEO ONE SIDE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: ATHLETE BRANDING - CENTERED ON MOBILE / LEFT-ALIGNED ON DESKTOP */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left justify-center w-full">
            {/* Eyebrow Badge */}
            <div
              ref={badgeRef}
              className="animate-breathe inline-flex items-center gap-2 rounded-full border border-[#f0c775]/80 bg-black/85 px-4 py-1.5 backdrop-blur-md shadow-[0_4px_25px_rgba(240,199,117,0.35)] transition-all duration-500 hover:scale-105 hover:border-[#f0c775] self-center lg:self-start"
            >
              <span className="h-2 w-2 rounded-full bg-[#f0c775] animate-pulse shrink-0 shadow-[0_0_8px_#f0c775]" />
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#fcefd2] font-bold">
                Eventing &middot; Team India Athlete
              </span>
            </div>

            {/* Main Name Heading - Centered on Mobile / Left on Desktop */}
            <h1
              ref={titleRef}
              className="mt-3 sm:mt-5 font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-normal animate-text-shimmer tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.98)] leading-[1.06] text-center lg:text-left"
            >
              Ved Sarma Sarkar
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="mt-3 sm:mt-5 max-w-xl font-serif text-base sm:text-xl md:text-2xl italic text-[#f8f5ee] drop-shadow-md leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
            >
              Pursuing excellence on the world stage.
              <span className="text-[#f0c775] not-italic font-sans text-xs sm:text-base font-semibold block mt-1.5 transition-colors hover:text-[#ffe4a0]">
                &mdash; Pathway to the Asian Games &amp; Olympics
              </span>
            </p>

            {/* Credentials Pill Strip */}
            <div
              ref={pillsRef}
              className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-2 font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.14em] text-[#fcefd2]"
            >
              <span className="bg-[#18120b]/95 px-3.5 py-1.5 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_15px_rgba(240,199,117,0.3)] transition-all duration-300 cursor-default">
                International Podium Achiever
              </span>
              <span className="bg-[#18120b]/95 px-3.5 py-1.5 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_15px_rgba(240,199,117,0.3)] transition-all duration-300 cursor-default">
                National Medallist
              </span>
              <span className="bg-[#18120b]/95 px-3.5 py-1.5 rounded-full border border-[#f0c775]/50 backdrop-blur-md shadow-md hover:-translate-y-1 hover:border-[#f0c775] hover:shadow-[0_0_15px_rgba(240,199,117,0.3)] transition-all duration-300 cursor-default">
                FEI Athlete
              </span>
            </div>

            {/* Quick Action Navigation Buttons - Centered */}
            <div ref={ctaRef} className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full">
              <button
                onClick={() => onNavigate?.('about')}
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-[#a8895c] hover:bg-[#c2a372] px-6 py-3 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer min-h-[42px]"
              >
                <span>About Ved</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate?.('record')}
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 hover:border-[#f0c775] hover:text-[#f0c775] px-6 py-3 font-sans text-xs uppercase tracking-wider text-[#d9cdb8] transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer min-h-[42px]"
              >
                <span>Official Record</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div
              ref={metricsRef}
              className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#f0c775]/30 grid grid-cols-3 gap-2 sm:gap-6 w-full max-w-xl mx-auto text-center"
            >
              <div className="group/metric transition-transform duration-300 hover:scale-105">
                <div className="font-display text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
                  Team India
                </div>
                <div className="text-[7.5px] xs:text-[9px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
                  Equestrian Eventing
                </div>
              </div>
              <div className="group/metric transition-transform duration-300 hover:scale-105">
                <div className="font-display text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
                  FEI Elite
                </div>
                <div className="text-[7.5px] xs:text-[9px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
                  International Circuit
                </div>
              </div>
              <div className="group/metric transition-transform duration-300 hover:scale-105">
                <div className="font-display text-sm xs:text-base sm:text-2xl text-[#f0c775] drop-shadow-md font-medium group-hover/metric:text-[#ffe4a0] transition-colors">
                  Silver &amp; Bronze
                </div>
                <div className="text-[7.5px] xs:text-[9px] sm:text-[11px] uppercase tracking-wider text-[#e8ded0] mt-0.5 font-medium">
                  World &amp; National Podiums
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LUXURY OLYMPIC CHAMPIONSHIP VIDEO FRAME */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end w-full">
            <div
              ref={videoCardRef}
              className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[550px] h-[440px] xs:h-[500px] sm:h-[580px] lg:h-[640px] xl:h-[670px] max-h-[85vh] rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#2d2418]/90 via-[#18120b]/95 to-[#120d08] border border-[#f0c775]/60 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_45px_rgba(240,199,117,0.22)] backdrop-blur-md group hover:-translate-y-2 hover:scale-[1.015] hover:border-[#f0c775] hover:shadow-[0_35px_100px_rgba(240,199,117,0.32)] transition-all duration-700 cursor-default"
            >
              {/* Four Precision Corner Gold Accents */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#f0c775] rounded-tl pointer-events-none z-30 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:border-[#ffe4a0]" />
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#f0c775] rounded-tr pointer-events-none z-30 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:border-[#ffe4a0]" />
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#f0c775] rounded-bl pointer-events-none z-30 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:border-[#ffe4a0]" />
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#f0c775] rounded-br pointer-events-none z-30 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:border-[#ffe4a0]" />

              {/* Inner Fine Gold Hairline Rim - Dual Gold Border */}
              <div className="relative w-full h-full rounded-xl overflow-hidden p-[1.5px] bg-gradient-to-b from-[#f0c775]/60 via-white/15 to-[#f0c775]/50 shadow-inner">
                {/* Inner Video Container */}
                <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={HERO_VIDEO.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-102 drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
