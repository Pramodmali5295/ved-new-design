import { Sparkles, Flag, ArrowRight } from 'lucide-react';
import { useGsapReveal } from '@/hooks/useGsapAnimations';

const ROADMAP = [
  {
    year: '2026',
    title: 'International 2★ Foundation',
    text: 'Completing the Florida winter circuit and establishing baseline qualification scores at CCI 2★.',
    image: '/assets/ved-16.jpeg',
    tag: 'Ocala Circuit',
  },
  {
    year: '2027',
    title: 'FEI 2★ / 3★ Progression',
    text: 'Stepping up through the higher FEI international star levels with consistent podium results.',
    image: '/assets/ved-20.jpeg',
    tag: 'FEI Star Levels',
  },
  {
    year: '2028',
    title: 'U25 World Pathway',
    text: 'Qualifying for and competing on the global U25 World Championship pathway.',
    image: '/assets/ved-23.jpeg',
    tag: 'U25 Championship',
  },
  {
    year: '2030',
    title: 'Asian Games',
    text: 'Representing India at the 2030 Asian Games with a formidable national presence.',
    image: '/assets/ved-25.jpeg',
    tag: 'Team India',
  },
  {
    year: '2032',
    title: 'Olympic Games',
    text: 'Representing India at the 2032 Olympic Games — and multiple times thereafter on the global stage.',
    image: '/assets/ved-28.jpeg',
    tag: 'Olympic Vision',
  },
];

export default function RoadAhead() {
  const sectionRef = useGsapReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="road" className="bg-[#19140e] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -left-32 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            Long-Term Vision &bull; Road Ahead
            <span className="h-[1px] w-6 bg-[#a8895c]" />
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            The Olympic Vision
          </h2>
          <p className="mt-3 sm:mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/85">
            A methodical 8-year high-performance pathway engineered to peak at the 2030 Asian Games and 2032 Olympic Games.
          </p>
        </div>

        {/* Visual Roadmap Cards Grid (5 Milestone Stages with Photos) */}
        <div className="gsap-stagger-container mt-12 sm:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ROADMAP.map((step, i) => (
            <div
              key={step.year}
              className={`gsap-stagger-item group relative flex flex-col overflow-hidden rounded-sm border border-[#a8895c]/25 bg-[#251e16] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#a8895c] hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1' : ''
              }`}
            >
              {/* Photo Thumbnail - High Resolution Landscape Photo */}
              {step.image && (
                <div className="relative w-full overflow-hidden bg-[#120d08]">
                  <img
                    src={step.image}
                    alt={`${step.title} - ${step.year}`}
                    className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center rounded-sm transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  <span className="absolute top-2.5 left-2.5 z-30 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-md">
                    {step.tag}
                  </span>

                  <span className="absolute bottom-2 right-2.5 z-30 font-display text-2xl font-bold text-white drop-shadow-md">
                    {step.year}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c]" />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#a8895c] font-semibold">
                    Phase 0{i + 1}
                  </span>
                </div>
                
                <h3 className="mt-2 font-display text-base sm:text-lg text-white group-hover:text-[#e6c994] transition-colors">
                  {step.title}
                </h3>
                
                <p className="mt-2 font-sans text-xs leading-[1.65] text-[#d9cdb8]/80">
                  {step.text}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-white/5 flex items-center justify-between text-[10px] font-sans uppercase tracking-wider text-[#a8895c]/80">
                <span>Pathway</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 text-[#a8895c]" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Mission & Athlete Pledge Spotlight */}
        <div className="reveal mt-12 sm:mt-16 overflow-hidden rounded-sm border border-[#a8895c]/40 bg-[#251e16] shadow-2xl">
          <div className="grid lg:grid-cols-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[300px] bg-black flex items-center justify-center p-2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
              <img
                src="/assets/ved-7.jpeg"
                alt="Ved Sarma Sarkar in official Team India equestrian attire"
                className="h-full w-full object-contain"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 rounded-full bg-black/75 px-3 py-1 text-xs font-sans text-white backdrop-blur-md border border-white/10">
                <Flag size={14} className="text-[#a8895c]" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider">Team India Athlete</span>
              </div>
            </div>

            {/* Right Quote & Pledge */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#a8895c] font-semibold">
                The Athlete&rsquo;s Pledge
              </span>
              
              <blockquote className="mt-3 sm:mt-4 font-serif text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-white">
                &ldquo;I am determined to represent India in the Asian Games in 2030 and the Olympics in 2032, and multiple times thereafter &mdash; making India a formidable name in the world of equestrian sport.&rdquo;
              </blockquote>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between gap-2">
                <div>
                  <p className="font-display text-lg sm:text-xl text-[#e6c994]">Ved Sarma Sarkar</p>
                  <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#d9cdb8]/70">
                    FEI Eventing Athlete &bull; India
                  </p>
                </div>

                <span className="font-display text-2xl sm:text-3xl font-bold text-[#a8895c]/60">
                  2030 &middot; 2032
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
