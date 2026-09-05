import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { PILLARS } from '../data';
import { useGsapReveal } from '@/hooks/useGsapAnimations';
import LazyVideo from '@/components/LazyVideo';

export default function About() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'video' | 'image';
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedMedia) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedMedia(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedMedia]);

  return (
    <section ref={sectionRef} id="about" className="bg-[#1c1610] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-1/4 right-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none animate-ambient-glow" style={{ animationDelay: '9s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Main Biography Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Dual Image Presentation */}
          <div className="gsap-reveal-left relative lg:col-span-6 flex flex-col items-center">
            {/* Main Picture: Ved with Horse Landscape Portrait (ved-14.jpeg) */}
            <div className="w-full overflow-hidden rounded-sm bg-[#120d08] shadow-2xl border border-[#a8895c]/40 p-1 sm:p-1.5">
              <img
                src="/assets/ved-14.jpeg"
                alt="Ved Sarma Sarkar with horse"
                className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center rounded-sm transition-transform duration-700 hover:scale-102"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Inset Secondary Image - High Clearance Show Jumping Action Photo (ved-20.jpeg) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 w-full sm:w-56 lg:w-60 overflow-hidden rounded-sm border-2 border-[#a8895c] bg-[#1a140e] shadow-2xl p-1 z-20">
              <div className="relative overflow-hidden bg-[#120d08] rounded-[1px]">
                <img
                  src="/assets/ved-20.jpeg"
                  alt="Ved competing in show jumping over high fences"
                  className="w-full h-auto aspect-[16/10] object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -top-4 -left-4 -z-10 h-28 w-28 border border-[#a8895c]/30 hidden sm:block" />
          </div>

          {/* Text */}
          <div className="gsap-reveal-right lg:col-span-6">
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
                <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">Competition Base</p>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden xs:block" />
              <div>
                <p className="font-display text-xl sm:text-2xl text-white">2030 &amp; 2032</p>
                <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-[#a8895c]">Asian and Olympic Games Vision</p>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden xs:block" />
              <div className="flex items-center gap-2 text-[#e6c994] font-sans text-xs">
                <Sparkles size={16} className="text-[#a8895c]" />
                <span>FEI Athlete</span>
              </div>
            </div>
          </div>
        </div>

        {/* CORE VALUES & THE PILLARS OF CHARACTER SECTION - Centered */}
        <div className="gsap-reveal mt-20 sm:mt-28 border-t border-white/10 pt-12 sm:pt-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            Core Values &bull; Philosophical Foundations
            <span className="h-[1px] w-6 bg-[#a8895c]" />
          </div>
          <h2 className="mt-3 font-display text-2xl xs:text-3xl sm:text-4xl text-white lg:text-5xl">
            The Pillars of Character
          </h2>
          <p className="mt-3 font-serif text-base sm:text-lg italic text-[#d9cdb8]/85 text-center">
            The enduring principles of discipline, patience, and humility that guide every ride and competition.
          </p>
        </div>

        {/* Pillars Alternating Horizontal Rows with Full Width Media */}
        <div className="gsap-stagger-container mt-12 sm:mt-16 space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Pillar 1: Discipline (Image/Video on Left, Content on Right) */}
          <div className="gsap-stagger-item rounded-sm border border-white/10 bg-[#251e16] shadow-xl overflow-hidden hover:border-[#a8895c]/70 transition-all duration-500 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Media on Left - Full Width Stretched, Same Height */}
              <div 
                onClick={() => setSelectedMedia({
                  type: 'video',
                  src: '/assets/video-6.mp4',
                  title: 'Discipline — Fitness & Conditioning',
                  caption: 'Relentless preparation and conditioning through every phase of training.'
                })}
                className="w-full lg:w-1/2 h-60 sm:h-72 lg:h-80 overflow-hidden rounded-sm bg-[#100b07] border border-white/10 flex items-center justify-center cursor-pointer group relative"
              >
                <LazyVideo
                  src="/assets/video-6.mp4"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-sm">
                  01 &bull; Fitness &amp; Conditioning
                </div>
                <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 p-1.5 text-[#e6c994] opacity-0 group-hover:opacity-100 transition-opacity border border-[#a8895c]/40">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Content on Right */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#a8895c]">
                  <span className="h-[1px] w-6 bg-[#a8895c]" />
                  Pillar 01
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e6c994]">01</span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                    Discipline
                  </h3>
                </div>
                <p className="mt-4 font-sans text-xs sm:text-sm lg:text-base leading-[1.85] text-[#d9cdb8]/85">
                  Training has never been defined only by the days Ved rides. He has maintained the same commitment to fitness, conditioning and preparation through periods with no competition on the calendar and no horse to ride. Being ready was part of being an athlete — not something that began when a competition appeared.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Adaptability (Content on Left, Image on Right - Full Width, Same Height) */}
          <div className="gsap-stagger-item rounded-sm border border-white/10 bg-[#251e16] shadow-xl overflow-hidden hover:border-[#a8895c]/70 transition-all duration-500 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Media on Right */}
              <div 
                onClick={() => setSelectedMedia({
                  type: 'image',
                  src: '/assets/ved-33.jpeg',
                  title: 'Adaptability — Trust & Partnership',
                  caption: 'Finding sync, patience, and mutual connection with each horse.'
                })}
                className="w-full lg:w-1/2 h-60 sm:h-72 lg:h-80 overflow-hidden rounded-sm bg-[#100b07] border border-white/10 flex items-center justify-center cursor-pointer group relative"
              >
                <img
                  src="/assets/ved-33.jpeg"
                  alt="Ved and horse in mutual bond and adaptability"
                  className="h-full w-full object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-104"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-sm">
                  02 &bull; Trust &amp; Partnership
                </div>
                <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 p-1.5 text-[#e6c994] opacity-0 group-hover:opacity-100 transition-opacity border border-[#a8895c]/40">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Content on Left */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#a8895c]">
                  <span className="h-[1px] w-6 bg-[#a8895c]" />
                  Pillar 02
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e6c994]">02</span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                    Adaptability
                  </h3>
                </div>
                <p className="mt-4 font-sans text-xs sm:text-sm lg:text-base leading-[1.85] text-[#d9cdb8]/85">
                  Eventing rarely gives you everything you want. Ved has learned to work with leased horses, understand what each one needs, and trust it. Different horses, environments and challenges have taught him to stay observant, composed, humble and willing to learn. For him, adaptability is not about changing direction — it is about finding a sync.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Grit (Image on Left, Content on Right - Full Width, Same Height) */}
          <div className="gsap-stagger-item rounded-sm border border-white/10 bg-[#251e16] shadow-xl overflow-hidden hover:border-[#a8895c]/70 transition-all duration-500 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Media on Left */}
              <div 
                onClick={() => setSelectedMedia({
                  type: 'image',
                  src: '/assets/ved-13.jpeg',
                  title: 'Grit — Focus & Determination',
                  caption: 'Relentless dedication and perseverance through challenging competition courses.'
                })}
                className="w-full lg:w-1/2 h-60 sm:h-72 lg:h-80 overflow-hidden rounded-sm bg-[#100b07] border border-white/10 flex items-center justify-center cursor-pointer group relative"
              >
                <img
                  src="/assets/ved-13.jpeg"
                  alt="Ved focused and determined over obstacle"
                  className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-sm">
                  03 &bull; Focus &amp; Determination
                </div>
                <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 p-1.5 text-[#e6c994] opacity-0 group-hover:opacity-100 transition-opacity border border-[#a8895c]/40">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Content on Right */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#a8895c]">
                  <span className="h-[1px] w-6 bg-[#a8895c]" />
                  Pillar 03
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e6c994]">03</span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                    Grit
                  </h3>
                </div>
                <p className="mt-4 font-sans text-xs sm:text-sm lg:text-base leading-[1.85] text-[#d9cdb8]/85">
                  Ved’s journey has not always moved in a straight line. There have been periods of uncertainty, changing horses, interrupted plans and long stretches of preparation without knowing when the next opportunity would come. What has remained constant is his willingness to keep working. He keeps learning, keeps preparing and keeps moving forward.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 4: Coachability (Content on Left, Image on Right - Full Width, Same Height) */}
          <div className="gsap-stagger-item rounded-sm border border-white/10 bg-[#251e16] shadow-xl overflow-hidden hover:border-[#a8895c]/70 transition-all duration-500 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Media on Right */}
              <div 
                onClick={() => setSelectedMedia({
                  type: 'video',
                  src: '/assets/video-11.mp4',
                  title: 'Coachability — Receptive Excellence',
                  caption: 'Absorbing and applying elite international coaching techniques into winning performances.'
                })}
                className="w-full lg:w-1/2 h-60 sm:h-72 lg:h-80 overflow-hidden rounded-sm bg-[#100b07] border border-white/10 flex items-center justify-center cursor-pointer group relative"
              >
                <LazyVideo
                  src="/assets/video-11.mp4"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#e6c994] border border-[#a8895c]/40 backdrop-blur-sm">
                  04 &bull; Receptive Excellence
                </div>
                <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 p-1.5 text-[#e6c994] opacity-0 group-hover:opacity-100 transition-opacity border border-[#a8895c]/40">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Content on Left */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#a8895c]">
                  <span className="h-[1px] w-6 bg-[#a8895c]" />
                  Pillar 04
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e6c994]">04</span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                    Coachability
                  </h3>
                </div>
                <p className="mt-4 font-sans text-xs sm:text-sm lg:text-base leading-[1.85] text-[#d9cdb8]/85">
                  At this stage of an athlete’s journey, talent is only part of the equation. The ability to listen, absorb and apply is what allows talent to develop. Ved actively seeks feedback and is willing to change his approach when it makes him a better rider. Working with different coaches and horses has taught him to remain curious, receptive and focused on learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 100% Fullscreen Lightbox Modal for Pillars */}
      {selectedMedia && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#a8895c] hover:text-[#2d2418] transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-4xl w-full flex flex-col items-center justify-center bg-[#140e08] rounded-sm border border-[#a8895c]/40 p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-h-[70vh] w-full object-contain rounded-sm"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-h-[70vh] w-full object-contain rounded-sm"
              />
            )}
            <div className="w-full mt-3 p-3 bg-[#1c1610] rounded-sm border border-white/10 text-center">
              <h4 className="font-display text-lg sm:text-xl text-[#e6c994]">{selectedMedia.title}</h4>
              <p className="mt-1 font-sans text-xs text-[#d9cdb8]/80">{selectedMedia.caption}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
