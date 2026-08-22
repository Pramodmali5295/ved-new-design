import { Sparkles } from 'lucide-react';
import { PILLARS } from '../data';

export default function About() {
  return (
    <section id="about" className="bg-[#1c1610] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-1/4 right-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none animate-ambient-glow" style={{ animationDelay: '9s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Main Biography Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Dual Image Presentation */}
          <div className="reveal relative lg:col-span-6 flex flex-col items-center">
            {/* Main Picture: FEI Podium Finish - 100% Uncropped with object-contain */}
            <div className="relative w-full overflow-hidden rounded-sm bg-[#120d08] shadow-2xl border border-[#a8895c]/40 p-2.5 flex flex-col items-center">
              <div className="w-full flex items-center justify-center min-h-[320px] max-h-[540px] overflow-hidden bg-black/60 rounded-sm">
                <img
                  src="/assets/ved-5.jpeg"
                  alt="Ved Sarma Sarkar on the FEI World Challenge Podium holding the Indian flag"
                  className="h-auto max-h-[500px] w-full object-contain transition-transform duration-700 hover:scale-102"
                />
              </div>
              
              {/* Caption Banner Below Image (no blocking) */}
              <div className="mt-2.5 w-full bg-[#251e16] px-3.5 sm:px-4 py-2.5 rounded-sm flex items-center justify-between text-white border border-white/10">
                <div className="min-w-0 pr-2">
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c] block truncate">
                    FEI World Challenge Podium
                  </span>
                  <p className="font-display text-xs sm:text-sm text-white truncate">Team India Athlete &middot; New Delhi</p>
                </div>
                <span className="shrink-0 rounded bg-[#a8895c]/20 px-2.5 py-1 font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#e6c994] border border-[#a8895c]/40 font-semibold">
                  Podium 2023
                </span>
              </div>
            </div>

            {/* Inset Secondary Image - High Clearance Show Jumping */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 w-full sm:w-52 lg:w-56 overflow-hidden rounded-sm border-2 border-[#a8895c] bg-[#1a140e] shadow-2xl p-1.5 z-20">
              <div className="relative overflow-hidden bg-[#120d08] rounded-[1px] flex items-center justify-center h-40 sm:h-36 lg:h-40">
                <img
                  src="/assets/ved-8.jpeg"
                  alt="Ved competing in show jumping over high fences"
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent py-1 px-2 text-center">
                  <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-[#e6c994] font-medium block truncate">
                    Show Jumping Mastery
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -top-4 -left-4 -z-10 h-28 w-28 border border-[#a8895c]/30 hidden sm:block" />
          </div>

          {/* Text */}
          <div className="reveal lg:col-span-6" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
                <span className="h-[1px] w-6 bg-[#a8895c]" />
                Who is Ved
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c]" />
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#e6c994]">Team India Athlete</span>
            </div>
            
            <h1 className="mt-4 sm:mt-5 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-tight">
              The Journey to the World&rsquo;s Biggest Stages
            </h1>

            <blockquote className="mt-5 sm:mt-6 border-l-2 border-[#a8895c] pl-4 sm:pl-6 font-serif text-lg sm:text-xl italic leading-relaxed text-[#d9cdb8] lg:text-2xl">
              &ldquo;To me, riding is freedom of my soul. I ride for the love of horses, the sport
              and most importantly to win. While I pursue Eventing as a discipline, I make sure
              that my horse and I are a team, and we work towards mastering the basics, for high
              performance.&rdquo;
            </blockquote>

            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 font-sans text-xs sm:text-sm leading-[1.8] text-[#d9cdb8]/80">
              <p>
                At just 16 years of age, Ved achieved a landmark milestone by becoming one of India&rsquo;s
                youngest riders to secure an FEI international podium finish at the 2023 FEI Eventing
                World Challenge in New Delhi. Combining raw dedication with technical precision, he
                has consistently excelled across Junior National Championships and international arenas.
              </p>
              <p>
                Trained under Indian Olympian Imtiaz Anees and currently advancing on the prestigious
                international equestrian circuit in Ocala, Florida, Ved is fiercely dedicated to representing
                Team India at the 2030 Asian Games and the 2032 Olympic Games &mdash; establishing India
                as a commanding force in world equestrian sport.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <p className="font-display text-xl sm:text-2xl text-white">Ocala, FL</p>
                <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">Training Circuit</p>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden xs:block" />
              <div>
                <p className="font-display text-xl sm:text-2xl text-white">2030 &amp; 2032</p>
                <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">Asian &amp; Olympic Vision</p>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden xs:block" />
              <div className="flex items-center gap-2 text-[#e6c994] font-sans text-xs">
                <Sparkles size={16} className="text-[#a8895c]" />
                <span>FEI Athlete</span>
              </div>
            </div>
          </div>
        </div>

        {/* CORE VALUES & THE PILLARS OF CHARACTER SECTION */}
        <div className="reveal mt-20 sm:mt-28 border-t border-white/10 pt-12 sm:pt-16">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            Core Values
          </div>
          <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl">
            The Pillars of Character
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-x-10 sm:gap-y-10 lg:gap-x-12 grid-cols-1 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal border-l-2 border-[#a8895c]/50 pl-4 sm:pl-6 bg-[#251e16]/50 p-4 sm:p-6 rounded-r-sm border-y border-r border-white/5"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-baseline gap-3 sm:gap-4">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#e6c994]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white lg:text-3xl">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm leading-[1.8] text-[#d9cdb8]/80">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
