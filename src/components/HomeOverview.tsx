import { Trophy, CheckCircle2, Medal, ArrowRight, Maximize2, Sparkles, Users } from 'lucide-react';
import { GALLERY_ITEMS, NATIONAL_RESULTS } from '@/data';
import Hero from '@/components/Hero';
import Believers from '@/components/Believers';
import { useGsapReveal, GsapCounter } from '@/hooks/useGsapAnimations';

interface HomeOverviewProps {
  onNavigate: (pageId: string) => void;
}

export default function HomeOverview({ onNavigate }: HomeOverviewProps) {
  const containerRef = useGsapReveal<HTMLDivElement>();
  // Pick horizontal 3:2 action landscape photos that fit naturally
  const featuredPhotos = [
    GALLERY_ITEMS.find((g) => g.id === 'g-11') || GALLERY_ITEMS[10],
    GALLERY_ITEMS.find((g) => g.id === 'g-20') || GALLERY_ITEMS[19],
    GALLERY_ITEMS.find((g) => g.id === 'g-23') || GALLERY_ITEMS[22],
    GALLERY_ITEMS.find((g) => g.id === 'g-16') || GALLERY_ITEMS[15],
    GALLERY_ITEMS.find((g) => g.id === 'g-25') || GALLERY_ITEMS[24],
    GALLERY_ITEMS.find((g) => g.id === 'g-28') || GALLERY_ITEMS[27],
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 1. EXECUTIVE SNAPSHOT & KEY METRICS */}
      <section id="overview-summary" className="bg-[#1c1610] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Bio teaser - Centered on Mobile / Left on Desktop */}
            <div className="gsap-reveal-left lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Executive Summary
                <span className="h-[1px] w-6 bg-[#a8895c] lg:hidden" />
              </div>
              <h2 className="mt-3 sm:mt-4 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl text-center lg:text-left">
                16 yo. Youngest with Podium Finish.
              </h2>
              <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-[#d9cdb8]/85 text-center lg:text-left">
                Ved Sarma Sarkar is one of India&rsquo;s most promising equestrian athletes. At 16, he became the youngest rider on the podium at the FEI World Eventing Challenge. Today he is competing in one of the world&rsquo;s most competitive equestrian destinations &mdash; Ocala, Florida, home to legendary riders like Buck Davidson and Wil Coleman. Ocala is said to be the epicentre of equestrian sport, where Ved is carving his pathway to the Asian Games 2030 and Olympic Games 2032.
              </p>
              <div className="mt-6 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-[#a8895c] px-5 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-md hover:scale-105 active:scale-95 min-h-[42px]"
                >
                  <span>About Ved</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('making')}
                  className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 font-sans text-xs uppercase tracking-wider text-[#d9cdb8] transition-all hover:border-[#a8895c] hover:text-[#e6c994] min-h-[42px]"
                >
                  <span>The Journey &amp; Record</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Key Highlights 4 Cards with Luxury Micro-Interactions */}
            <div className="gsap-reveal-right lg:col-span-6 grid gap-2.5 xxs:gap-3 sm:gap-4 grid-cols-2">
              <div className="group/stat rounded-sm bg-[#251e16] border border-white/10 p-2.5 xxs:p-3.5 sm:p-5 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f0c775]/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl xxs:text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold group-hover/stat:text-[#f0c775] transition-colors">
                    <GsapCounter end={16} />
                  </span>
                  <div className="flex h-6 w-6 xxs:h-7 xxs:w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500 shrink-0">
                    <Trophy size={14} className="sm:hidden" />
                    <Trophy size={16} className="hidden sm:block" />
                  </div>
                </div>
                <div>
                  <p className="mt-2.5 sm:mt-3 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                    Youngest on Podium
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70">
                    FEI World Challenge &bull; Delhi
                  </p>
                </div>
              </div>

              <div className="group/stat rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f0c775]/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold group-hover/stat:text-[#f0c775] transition-colors">
                    <GsapCounter end={100} suffix="%" />
                  </span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
                <div>
                  <p className="mt-2.5 sm:mt-3 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                    Completion Rate
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70">
                    Flawless competition reliability
                  </p>
                </div>
              </div>

              <div className="group/stat rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f0c775]/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold group-hover/stat:text-[#f0c775] transition-colors">
                    <GsapCounter end={1} />
                  </span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500">
                    <Medal size={16} />
                  </div>
                </div>
                <div>
                  <p className="mt-2.5 sm:mt-3 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                    International Podium
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70">
                    FEI World Challenge &bull; Delhi
                  </p>
                </div>
              </div>

              <div className="group/stat rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f0c775]/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold group-hover/stat:text-[#f0c775] transition-colors">
                    <GsapCounter end={2} />
                  </span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500">
                    <Medal size={16} />
                  </div>
                </div>
                <div>
                  <p className="mt-2.5 sm:mt-3 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                    National Medals
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70">
                    Silver (2023) &amp; Bronze (2024)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE JOURNEY HIGHLIGHT (3 Major Milestones + 4 Character Pillars) */}
      <section className="bg-[#19140e] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-6">
            <div>
              <div className="inline-flex items-center justify-center md:justify-start gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Career Trajectory
                <span className="h-[1px] w-6 bg-[#a8895c] md:hidden" />
              </div>
              <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl text-center md:text-left">
                The Journey &amp; Milestones
              </h2>
              <p className="mt-3 max-w-xl font-serif text-sm sm:text-base italic text-[#d9cdb8]/80 text-center md:text-left mx-auto md:mx-0">
                From learning under Indian Olympian Imtiaz Anees to competing in world-class 2★ and FEI circuits in Ocala, FL and Tryon, NC.
              </p>
            </div>

            <button
              onClick={() => onNavigate('making')}
              className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 sm:px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-lg self-center md:self-auto hover:scale-105 active:scale-95 min-h-[42px]"
            >
              <span>Explore All 7 Milestones</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Milestone Teaser Cards - Landscape Gallery Images that Fit Edge-to-Edge */}
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div
              onClick={() => onNavigate('making')}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-500 hover:border-[#f0c775]/70 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(240,199,117,0.18)]"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-[#120d08] flex items-center justify-center">
                <img
                  src="/assets/ved-14.jpeg"
                  alt="Seahorse Equestrian 2021 Foundations"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-black/85 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] border border-white/10 shadow-md">
                  Early Years
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-display text-xl font-bold text-[#e6c994] drop-shadow-md">2021</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-white group-hover:text-[#e6c994] transition-colors text-center sm:text-left">
                The Beginning &bull; Seahorse
              </h3>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70 line-clamp-2 text-center sm:text-left">
                Discovered riding under Indian Olympian Imtiaz Anees, building fundamental trust and grit.
              </p>
            </div>

            <div
              onClick={() => onNavigate('making')}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-500 hover:border-[#f0c775]/70 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(240,199,117,0.18)]"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-[#120d08] flex items-center justify-center">
                <img
                  src="/assets/ved-16.jpeg"
                  alt="FEI World Challenge 2023 Podium"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-black/85 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] border border-white/10 shadow-md">
                  FEI Podium
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-display text-xl font-bold text-[#e6c994] drop-shadow-md">2023</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-white group-hover:text-[#e6c994] transition-colors text-center sm:text-left">
                Youngest Rider on Podium
              </h3>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70 line-clamp-2 text-center sm:text-left">
                At age 16, stood on the international podium at FEI World Eventing Challenge in New Delhi.
              </p>
            </div>

            <div
              onClick={() => onNavigate('making')}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-500 hover:border-[#f0c775]/70 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(240,199,117,0.18)] sm:col-span-2 lg:col-span-1"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-[#120d08] flex items-center justify-center">
                <img
                  src="/assets/ved-20.jpeg"
                  alt="US Circuit & Tryon 2026"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-black/85 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] border border-white/10 shadow-md">
                  US Circuit
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-display text-xl font-bold text-[#e6c994] drop-shadow-md">2026</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-white group-hover:text-[#e6c994] transition-colors text-center sm:text-left">
                Ocala Circuit &bull; Tryon CCI 1★
              </h3>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70 line-clamp-2 text-center sm:text-left">
                Placed #9th at Tryon International Three-Day Event alongside the world&rsquo;s top riders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEDIA SPOTLIGHT PREVIEW */}
      <section className="bg-[#1c1610] py-14 sm:py-20 lg:py-28 text-[#ebe4d8] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-6">
            <div>
              <div className="inline-flex items-center justify-center md:justify-start gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                In Action &amp; Gallery Preview
                <span className="h-[1px] w-6 bg-[#a8895c] md:hidden" />
              </div>
              <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl text-center md:text-left">
                Visual Track Record
              </h2>
              <p className="mt-3 max-w-xl font-serif text-sm sm:text-base italic text-[#d9cdb8]/80 text-center md:text-left mx-auto md:mx-0">
                A preview of authentic competition moments and high-resolution photographs.
              </p>
            </div>

            <button
              onClick={() => onNavigate('media')}
              className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 sm:px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-lg self-center md:self-auto hover:scale-105 active:scale-95 min-h-[42px]"
            >
              <span>View Full Media (39 Items)</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Featured Photos - High Resolution Horizontal Action Photos */}
          <div className="mt-6 sm:mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPhotos.map((photo, pIdx) => (
              <div
                key={photo.id}
                onClick={() => onNavigate('media')}
                className={`relative group cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#120d08] transition-all duration-500 hover:border-[#a8895c]/70 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
                  pIdx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center rounded-sm transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="rounded-full bg-black/70 p-2.5 text-[#d9cdb8] border border-[#a8895c]/50">
                    <Maximize2 size={16} className="text-[#a8895c]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PARTNERSHIP TEASER (Equine Partners Matteo & Cuba) */}
      <section className="bg-[#19140e] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Athlete &amp; Horse Connection
                <span className="h-[1px] w-6 bg-[#a8895c] lg:hidden" />
              </div>
              <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl text-center lg:text-left">
                The Partnership
              </h2>
              <blockquote className="mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/90 border-t border-b py-3 px-2 border-[#a8895c]/30 lg:border-t-0 lg:border-b-0 lg:border-l lg:border-[#a8895c] lg:pl-4 lg:py-0 leading-relaxed text-center lg:text-left">
                &ldquo;Eventing isn&rsquo;t won by the rider alone. It is a partnership built through trust, training and thousands of small decisions.&rdquo;
              </blockquote>
              <div className="mt-6 flex justify-center lg:justify-start w-full">
                <button
                  onClick={() => onNavigate('partnership')}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-md hover:scale-105 active:scale-95 min-h-[42px]"
                >
                  <span>Explore Partner Horses</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div
                onClick={() => onNavigate('partnership')}
                className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-500 hover:border-[#f0c775]/70 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(240,199,117,0.18)]"
              >
                <div className="h-44 sm:h-48 w-full bg-[#120d08] rounded-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/ved-20.jpeg"
                    alt="Matteo"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                </div>
                <h4 className="mt-3 font-display text-xl text-white group-hover:text-[#e6c994] transition-colors">Matteo</h4>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#a8895c]">10yo &bull; CCI 2★ Irish Sport Horse</p>
                <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70">The powerhouse partner for international star eventing.</p>
              </div>

              <div
                onClick={() => onNavigate('partnership')}
                className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-500 hover:border-[#f0c775]/70 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(240,199,117,0.18)]"
              >
                <div className="h-44 sm:h-48 w-full bg-[#120d08] rounded-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/ved-24.jpeg"
                    alt="Cuba"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                </div>
                <h4 className="mt-3 font-display text-xl text-white group-hover:text-[#e6c994] transition-colors">Cuba</h4>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#a8895c]">Partner &bull; Trail &amp; Arena Specialist</p>
                <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70">Endurance conditioning and rhythm training companion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED RESULTS & MENTORS PREVIEW */}
      <section className="bg-[#1c1610] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start">
            {/* Results Snapshot */}
            <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-2">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-[#a8895c]" />
                  <h3 className="font-display text-xl sm:text-2xl text-white">National &amp; FEI Results</h3>
                </div>
                <button
                  onClick={() => onNavigate('making')}
                  className="font-sans text-xs uppercase tracking-wider text-[#e6c994] font-semibold hover:underline"
                >
                  Full Record &rarr;
                </button>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#19140e] rounded-sm border border-white/10">
                  <div className="pr-2">
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c] font-bold">FEI World Challenge</span>
                    <p className="font-serif text-sm sm:text-base text-white font-medium">Podium Finish (Age 16)</p>
                  </div>
                  <span className="font-display text-lg sm:text-xl text-[#e6c994] font-semibold shrink-0">2023</span>
                </div>
                {NATIONAL_RESULTS.map((r) => (
                  <div key={r.event} className="flex items-center justify-between p-3 sm:p-3.5 bg-[#19140e] rounded-sm border border-white/10">
                    <div className="pr-2">
                      <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c] font-bold">{r.result}</span>
                      <p className="font-serif text-sm sm:text-base text-white font-medium">{r.event}</p>
                    </div>
                    <span className="font-display text-lg sm:text-xl text-[#e6c994] font-semibold shrink-0">{r.year}</span>
                  </div>
                ))}
              </div>

              {/* 3 Quick Performance Metric Badges */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#19140e] p-2 sm:p-2.5 rounded-sm border border-white/5">
                  <p className="font-display text-base sm:text-lg text-[#e6c994] font-bold">7</p>
                  <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#d9cdb8]/70">Events</p>
                </div>
                <div className="bg-[#19140e] p-2 sm:p-2.5 rounded-sm border border-white/5">
                  <p className="font-display text-base sm:text-lg text-[#e6c994] font-bold">100%</p>
                  <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#d9cdb8]/70">Completion</p>
                </div>
                <div className="bg-[#19140e] p-2 sm:p-2.5 rounded-sm border border-white/5">
                  <p className="font-display text-base sm:text-lg text-[#e6c994] font-bold">1</p>
                  <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#d9cdb8]/70">Intl Podium</p>
                </div>
              </div>
            </div>

            {/* Mentors & Believers Snapshot */}
            <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-2">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-[#a8895c]" />
                  <h3 className="font-display text-xl sm:text-2xl text-white">Mentors &amp; Early Believers</h3>
                </div>
                <button
                  onClick={() => onNavigate('coaches')}
                  className="font-sans text-xs uppercase tracking-wider text-[#e6c994] font-semibold hover:underline"
                >
                  View All &rarr;
                </button>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#19140e] rounded-sm border border-white/10 gap-2">
                  <div>
                    <p className="font-display text-sm sm:text-base text-white">Bruce Davidson Jr. (Buck)</p>
                    <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">5★ Eventer &bull; Ocala, FL</p>
                  </div>
                  <span className="rounded bg-black/60 border border-[#a8895c]/30 px-2 py-1 text-[9px] sm:text-[10px] font-sans text-[#e6c994] shrink-0">
                    Coach
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#19140e] rounded-sm border border-white/10 gap-2">
                  <div>
                    <p className="font-display text-sm sm:text-base text-white">Mr. Imtiaz Anees</p>
                    <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">Indian Olympian &bull; Sydney 2000</p>
                  </div>
                  <span className="rounded bg-black/60 border border-[#a8895c]/30 px-2 py-1 text-[9px] sm:text-[10px] font-sans text-[#e6c994] shrink-0">
                    Mentor
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#19140e] rounded-sm border border-white/10 gap-2">
                  <div>
                    <p className="font-display text-sm sm:text-base text-white">Dr. Cyrus Poonawalla &bull; Bajaj Auto</p>
                    <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">Visionary Patrons &bull; CSR Support</p>
                  </div>
                  <span className="rounded bg-black/60 border border-[#a8895c]/30 px-2 py-1 text-[9px] sm:text-[10px] font-sans text-[#e6c994] shrink-0">
                    Believers
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                <span className="font-sans text-xs text-[#d9cdb8]/70">5 International Coaches &bull; 3 Supporting Patrons</span>
                <button
                  onClick={() => onNavigate('coaches')}
                  className="rounded-full bg-[#a8895c] px-4 py-1.5 text-xs font-sans uppercase font-bold text-[#2d2418] hover:bg-[#c2a372] self-start xs:self-auto min-h-[36px]"
                >
                  Meet Mentors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDATIONAL SUPPORT & EARLY BELIEVERS */}
      <Believers />

      {/* 7. OLYMPIC ROADMAP BANNER */}
      <section className="bg-[#1c1610] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 relative overflow-hidden border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal rounded-sm border border-[#a8895c]/40 bg-[#251e16] text-[#ebe4d8] p-5 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left border-b border-white/10 pb-5 gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
                <Sparkles size={20} className="text-[#a8895c] shrink-0" />
                <div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-white text-center sm:text-left">The Road Ahead &bull; Strategic Vision</h3>
                  <p className="font-sans text-xs text-[#d9cdb8]/70 mt-0.5 text-center sm:text-left">2026 &ndash; 2032 Pathway to Global Glory</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('road')}
                className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 sm:px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-lg self-center md:self-auto hover:scale-105 active:scale-95 min-h-[42px]"
              >
                <span>Explore Pathway (5 Phases)</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* 5-Phase Mini Stepper - Responsive Grid */}
            <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center">
              <div className="bg-[#19140e] p-3 sm:p-3.5 rounded-sm border border-white/10">
                <span className="font-display text-base sm:text-lg font-bold text-[#e6c994]">2026</span>
                <p className="font-sans text-xs text-white font-medium mt-1">Ocala Circuit</p>
                <p className="font-sans text-[10px] text-[#d9cdb8]/60 mt-0.5">USEA / FEI 1★</p>
              </div>
              <div className="bg-[#19140e] p-3 sm:p-3.5 rounded-sm border border-white/10">
                <span className="font-display text-base sm:text-lg font-bold text-[#e6c994]">2027</span>
                <p className="font-sans text-xs text-white font-medium mt-1">FEI Star Levels</p>
                <p className="font-sans text-[10px] text-[#d9cdb8]/60 mt-0.5">2★ / 3★ Progression</p>
              </div>
              <div className="bg-[#19140e] p-3 sm:p-3.5 rounded-sm border border-white/10">
                <span className="font-display text-base sm:text-lg font-bold text-[#e6c994]">2028</span>
                <p className="font-sans text-xs text-white font-medium mt-1">U25 Pathway</p>
                <p className="font-sans text-[10px] text-[#d9cdb8]/60 mt-0.5">World Championship</p>
              </div>
              <div className="bg-[#19140e] p-3 sm:p-3.5 rounded-sm border border-white/10">
                <span className="font-display text-base sm:text-lg font-bold text-[#e6c994]">2030</span>
                <p className="font-sans text-xs text-white font-medium mt-1">Asian Games</p>
                <p className="font-sans text-[10px] text-[#d9cdb8]/60 mt-0.5">Team India</p>
              </div>
              <div className="bg-[#19140e] p-3 sm:p-3.5 rounded-sm border border-[#a8895c]/50 bg-gradient-to-b from-[#a8895c]/10 to-transparent col-span-2 sm:col-span-1">
                <span className="font-display text-base sm:text-lg font-bold text-[#e6c994]">2032</span>
                <p className="font-sans text-xs text-[#e6c994] font-bold mt-1">Olympic Games</p>
                <p className="font-sans text-[10px] text-[#d9cdb8]/80 mt-0.5">Olympic Vision</p>
              </div>
            </div>

            <blockquote className="mt-8 font-serif text-lg sm:text-xl md:text-2xl italic leading-relaxed text-white text-center px-2">
              &ldquo;I am determined to represent India in the Asian Games in 2030 and the Olympics in 2032, and multiple times thereafter &mdash; making India a formidable name in equestrian sport.&rdquo;
            </blockquote>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#d9cdb8]/70 gap-2 text-center sm:text-left">
              <span className="font-display text-sm sm:text-base text-[#e6c994]">Ved Sarma Sarkar &bull; Team India Athlete</span>
              <span className="uppercase tracking-wider text-[10px] sm:text-xs text-[#a8895c]">Target: Asian Games 2030 &bull; Olympics 2032</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
