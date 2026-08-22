import { Trophy, CheckCircle2, ShieldCheck, Medal, ArrowRight, Play, Maximize2, Sparkles, Flag, HeartHandshake, Users } from 'lucide-react';
import { VIDEOS, GALLERY_ITEMS } from './ActionGallery';
import { NATIONAL_RESULTS } from './Record';
import Hero from '@/components/Hero';

interface HomeOverviewProps {
  onNavigate: (pageId: string) => void;
}

export default function HomeOverview({ onNavigate }: HomeOverviewProps) {
  const featuredVideos = VIDEOS.slice(0, 2);
  const featuredPhotos = GALLERY_ITEMS.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 1. EXECUTIVE SNAPSHOT & KEY METRICS */}
      <section id="overview-summary" className="bg-[#1c1610] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Bio teaser */}
            <div className="reveal lg:col-span-6">
              <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Executive Summary
              </div>
              <h2 className="mt-3 sm:mt-4 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl">
                A 16-Year-Old on the World Equestrian Podium
              </h2>
              <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-[#d9cdb8]/85">
                Ved Sarma Sarkar is one of India&rsquo;s most promising equestrian athletes. At age 16, he became the youngest rider on the podium at the FEI World Eventing Challenge. Today, he is training and competing in Ocala, Florida &mdash; the epicenter of world equestrian sport &mdash; targeting the 2030 Asian Games and 2032 Olympics.
              </p>
              <div className="mt-6 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#a8895c] px-5 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-md hover:scale-105 active:scale-95 min-h-[42px]"
                >
                  <span>About Ved</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('record')}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 font-sans text-xs uppercase tracking-wider text-[#d9cdb8] transition-all hover:border-[#a8895c] hover:text-[#e6c994] min-h-[42px]"
                >
                  <span>Official Record</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Key Highlights 4 Cards */}
            <div className="reveal lg:col-span-6 grid gap-3 sm:gap-4 grid-cols-2">
              <div className="rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold">16</span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
                    <Trophy size={16} />
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

              <div className="rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold">100%</span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
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

              <div className="rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold">0</span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
                    <ShieldCheck size={16} />
                  </div>
                </div>
                <div>
                  <p className="mt-2.5 sm:mt-3 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                    XC Jump Penalties
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70">
                    Zero jump penalties across courses
                  </p>
                </div>
              </div>

              <div className="rounded-sm bg-[#251e16] border border-white/10 p-3.5 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#e6c994] font-bold">2</span>
                  <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
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
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Career Trajectory
              </div>
              <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl">
                The Journey &amp; Milestones
              </h2>
              <p className="mt-3 max-w-xl font-serif text-sm sm:text-base italic text-[#d9cdb8]/80">
                From learning under Indian Olympian Imtiaz Anees to competing in world-class 2★ and FEI circuits in Ocala, FL and Tryon, NC.
              </p>
            </div>

            <button
              onClick={() => onNavigate('making')}
              className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 sm:px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-lg self-start md:self-auto hover:scale-105 active:scale-95 min-h-[42px]"
            >
              <span>Explore All 7 Milestones</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Milestone Teaser Cards */}
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div
              onClick={() => onNavigate('making')}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-[#120d08] p-2 flex items-center justify-center">
                <img
                  src="/assets/ved-3.jpeg"
                  alt="Seahorse Equestrian 2021"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] border border-white/10">
                  Early Years
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-display text-xl font-bold text-[#e6c994]">2021</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-white group-hover:text-[#e6c994] transition-colors">
                The Beginning &bull; Seahorse
              </h3>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70 line-clamp-2">
                Discovered riding under Indian Olympian Imtiaz Anees, building fundamental trust and grit.
              </p>
            </div>

            <div
              onClick={() => onNavigate('making')}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-[#120d08] p-2 flex items-center justify-center">
                <img
                  src="/assets/ved-5.jpeg"
                  alt="FEI World Challenge 2023"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] border border-white/10">
                  FEI Podium
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-display text-xl font-bold text-[#e6c994]">2023</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-white group-hover:text-[#e6c994] transition-colors">
                Youngest Rider on Podium
              </h3>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70 line-clamp-2">
                At age 16, stood on the international podium at FEI World Eventing Challenge in New Delhi.
              </p>
            </div>

            <div
              onClick={() => onNavigate('making')}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-[#a8895c]/60 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-sm bg-[#120d08] p-2 flex items-center justify-center">
                <img
                  src="/assets/ved-1.jpeg"
                  alt="US Circuit & Tryon 2026"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] border border-white/10">
                  US Circuit
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-display text-xl font-bold text-[#e6c994]">2026</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-white group-hover:text-[#e6c994] transition-colors">
                Ocala Circuit &bull; Tryon CCI 1★
              </h3>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70 line-clamp-2">
                Placed #9th at Tryon International Three-Day Event alongside the world&rsquo;s top riders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEDIA SPOTLIGHT PREVIEW */}
      <section className="bg-[#1c1610] py-14 sm:py-20 lg:py-28 text-[#ebe4d8] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                In Action &amp; Gallery Preview
              </div>
              <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl">
                Visual Track Record
              </h2>
              <p className="mt-3 max-w-xl font-serif text-sm sm:text-base italic text-[#d9cdb8]/80">
                A preview of authentic competition video reels and high-resolution photographs.
              </p>
            </div>

            <button
              onClick={() => onNavigate('media')}
              className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 sm:px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-lg self-start md:self-auto hover:scale-105 active:scale-95 min-h-[42px]"
            >
              <span>View All Media (16 Items)</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 2 Featured Videos */}
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {featuredVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => onNavigate('media')}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#251e16] p-3.5 sm:p-4 transition-all hover:border-[#a8895c]/60 shadow-lg"
              >
                <div className="relative aspect-[16/9] w-full bg-black rounded overflow-hidden flex items-center justify-center">
                  <video
                    src={vid.src}
                    poster={vid.poster}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#a8895c] text-[#2d2418] shadow-lg transition-transform group-hover:scale-110">
                      <Play size={18} className="fill-[#2d2418] ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-black/75 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8]">
                    {vid.category}
                  </span>
                </div>
                <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl text-white group-hover:text-[#e6c994] transition-colors">
                  {vid.title}
                </h3>
                <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70">
                  {vid.description}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Featured Photos */}
          <div className="mt-6 sm:mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPhotos.map((photo, pIdx) => (
              <div
                key={photo.id}
                onClick={() => onNavigate('media')}
                className={`group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#251e16] p-2 transition-all hover:border-[#a8895c]/60 shadow-lg ${
                  pIdx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative h-48 sm:h-52 w-full bg-black rounded overflow-hidden flex items-center justify-center p-1">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-black/70 p-1.5 text-white">
                    <Maximize2 size={12} />
                  </div>
                </div>
                <div className="p-2.5">
                  <h4 className="font-display text-sm text-white group-hover:text-[#e6c994] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="mt-0.5 font-sans text-[11px] text-[#d9cdb8]/70 line-clamp-1">
                    {photo.caption}
                  </p>
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
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Athlete &amp; Horse Connection
              </div>
              <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl">
                The Partnership
              </h2>
              <blockquote className="mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/90 border-l border-[#a8895c] pl-4 leading-relaxed">
                &ldquo;Eventing isn&rsquo;t won by the rider alone. It is a partnership built through trust, training and thousands of small decisions.&rdquo;
              </blockquote>
              <div className="mt-6">
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
                className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 shadow-xl transition-all hover:border-[#a8895c]/60 hover:-translate-y-1"
              >
                <div className="h-44 sm:h-48 w-full bg-[#120d08] rounded-sm p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/ved-4.jpeg"
                    alt="Matteo"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="mt-3 font-display text-xl text-white group-hover:text-[#e6c994] transition-colors">Matteo</h4>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#a8895c]">10yo &bull; CCI 2★ Irish Sport Horse</p>
                <p className="mt-1 font-sans text-xs text-[#d9cdb8]/70">The powerhouse partner for international star eventing.</p>
              </div>

              <div
                onClick={() => onNavigate('partnership')}
                className="group cursor-pointer rounded-sm border border-white/10 bg-[#251e16] p-4 shadow-xl transition-all hover:border-[#a8895c]/60 hover:-translate-y-1"
              >
                <div className="h-44 sm:h-48 w-full bg-[#120d08] rounded-sm p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/ved-6.jpeg"
                    alt="Cuba"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
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
                  onClick={() => onNavigate('record')}
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
                  <p className="font-display text-base sm:text-lg text-[#e6c994] font-bold">0</p>
                  <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-[#d9cdb8]/70">Penalties</p>
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

      {/* 6. OLYMPIC ROADMAP BANNER */}
      <section className="bg-[#19140e] text-[#ebe4d8] py-14 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="reveal rounded-sm border border-[#a8895c]/40 bg-[#251e16] text-[#ebe4d8] p-5 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-5 gap-4">
              <div className="flex items-center gap-2.5">
                <Sparkles size={20} className="text-[#a8895c] shrink-0" />
                <div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-white">The Road Ahead &bull; Strategic Vision</h3>
                  <p className="font-sans text-xs text-[#d9cdb8]/70 mt-0.5">2026 &ndash; 2032 Pathway to Global Glory</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('road')}
                className="group inline-flex items-center gap-2 rounded-full bg-[#a8895c] px-5 sm:px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-[#2d2418] font-bold transition-all hover:bg-[#c2a372] shadow-lg self-start md:self-auto hover:scale-105 active:scale-95 min-h-[42px]"
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
