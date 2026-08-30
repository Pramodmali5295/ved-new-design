
import { Sparkles } from 'lucide-react';
import { useGsapReveal } from '@/hooks/useGsapAnimations';

const TIMELINE = [
  {
    phase: 'Early Years',
    year: '2021',
    title: 'The Beginning',
    text: 'Ved began riding professionally in 2021, discovering Indian Olympian Mr. Imtiaz Anees at a show in Pune. A shy 14-year-old, he rose to the expectations and coaching of Mr. Anees.',
    image: '/assets/ved-26.jpeg',
    tag: 'Seahorse Equestrian',
  },
  {
    phase: 'National Level',
    year: '2023',
    title: 'National Medallist',
    text: 'Team Silver at the Junior National Equestrian Championship in Eventing. Ved established himself on the national stage.',
    image: '/assets/ved-2.jpeg',
    tag: 'Team Silver',
  },
  {
    phase: 'FEI Podium',
    year: '2023',
    title: 'Youngest Rider to Achieve Podium Finish',
    text: 'FEI World Eventing Challenge, New Delhi — at age 16, Ved was the youngest rider on the podium. World Eventing Challenge, is conducted throughout the world by the International body - FEI. Each zone has about 9-10 countries competing.',
    image: '/assets/ved-5.jpeg',
    tag: 'FEI 2023 Podium',
  },
  {
    phase: 'National Podium',
    year: '2024',
    title: 'National Medallist Again',
    text: 'Individual Bronze at Junior National Equestrian Championship, Delhi. Ved made a powerful statement by claiming Individual Bronze — a remarkable podium finish two years in a row.',
    image: '/assets/ved-21.jpeg',
    tag: 'Individual Bronze',
  },
  {
    phase: 'US Circuit',
    year: '2026',
    title: 'Ocala Circuit',
    text: 'Mecca of Equestrian world, Ocala, FL is one of the renowned competitive circuits in the world. Ved completed a commendable 6 competitions with 2 podium finishes!',
    image: '/assets/ved-16.jpeg',
    tag: '2 Podium Finishes',
  },
  {
    phase: 'FEI CCI-1★',
    year: '2026',
    title: 'India Representation in FEI CCI-1★',
    text: 'Tryon International, NC is one of the most prestigious circuits in the world, one that hosted World Equestrian Games in 2018. Ved’s entry into the arena, alongside professionals who claim world position #2, 11 and 23, was a major milestone for India. Placed #9th.',
    image: '/assets/ved-11.jpeg',
    tag: 'Placed #9th &bull; Tryon',
  },
  {
    phase: 'CSI 2★',
    year: '2026',
    title: 'CSI-2★ Accomplished',
    text: 'World Equestrian Centre, Ocala is host to the best show jumping events and riders, sponsored often by brands such as Longines and Rolex. Accomplishing a 6th position amongst 33 riders was hugely applauded.',
    image: '/assets/ved-30.jpeg',
    tag: '6th / 33 Riders &bull; WEC',
  },
];

export default function Making() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const milestones = TIMELINE.map((item, idx) => ({
    ...item,
    milestoneNum: String(idx + 1).padStart(2, '0'),
  }));

  return (
    <section ref={sectionRef} id="making" className="bg-[#1c1610] text-[#ebe4d8] py-16 sm:py-24 lg:py-36 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section header - Centered */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            The Journey &bull; The Making of an Athlete
            <span className="h-[1px] w-6 bg-[#a8895c]" />
          </div>
          <h1 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            From Pune to the World Stage
          </h1>
          <p className="mt-3 sm:mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/85 text-center">
            7 defining career milestones forged through dedication, elite international training, and unwavering resilience.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a8895c]/30 bg-black/40 px-4 py-1.5 text-xs text-[#a8895c]">
            <Sparkles size={14} className="text-[#f0c775]" />
            <span>7 Milestones &bull; 2021 &ndash; 2026</span>
          </div>
        </div>

        {/* All 7 Milestones in Open Grid Display */}
        <div className="gsap-stagger-container mt-10 sm:mt-14 lg:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {milestones.map((item) => (
            <div
              key={`${item.phase}-${item.title}`}
              className="gsap-stagger-item group relative flex flex-col rounded-sm bg-[#251e16] border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_30px_rgba(240,199,117,0.18)] hover:border-[#f0c775]/70 overflow-hidden"
            >
              {/* Photo thumbnail - Naturally Formatted Landscape Photo */}
              {item.image && (
                <div className="relative w-full overflow-hidden bg-[#120d08]">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.year}`}
                    className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center rounded-sm transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 z-20 rounded-full bg-black/80 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] backdrop-blur-sm border border-white/10">
                    {item.phase}
                  </span>
                  {item.tag && (
                    <span className="absolute bottom-2.5 left-2.5 z-20 font-sans text-[9px] font-medium tracking-wide text-[#e6c994] bg-black/85 px-2 py-0.5 rounded-sm border border-[#a8895c]/40">
                      {item.tag}
                    </span>
                  )}
                </div>
              )}

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between">
                <div>
                  <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                    <span className="font-display text-xl sm:text-2xl text-[#e6c994] font-semibold">{item.year}</span>
                    <span className="font-sans text-[9px] sm:text-[10px] text-[#a8895c] uppercase tracking-widest font-semibold bg-black/50 px-2 py-0.5 rounded-sm border border-[#a8895c]/30">
                      Milestone {item.milestoneNum}
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-base sm:text-lg font-medium italic text-white group-hover:text-[#e6c994] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-2 font-sans text-xs leading-[1.75] text-[#d9cdb8]/80">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action band - High Resolution Landscape Action Photo */}
        <div className="gsap-reveal mt-16 sm:mt-24 relative overflow-hidden rounded-sm bg-[#120d08] border border-[#a8895c]/40 p-1.5 sm:p-2 shadow-2xl flex flex-col items-center">
          <div className="w-full overflow-hidden bg-[#120d08] rounded-sm">
            <img
              src="/assets/ved-25.jpeg"
              alt="Ved Sarma Sarkar galloping across cross-country water jump"
              className="w-full h-auto aspect-[16/9] sm:aspect-[21/9] object-cover object-center rounded-sm transition-transform duration-700 hover:scale-102"
              loading="lazy"
            />
          </div>
          <div className="w-full bg-[#251e16] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between text-white gap-3 border-t border-white/10 mt-1.5 sm:mt-2 rounded-sm">
            <div>
              <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#a8895c]">
                Cross-Country Mastery &middot; Elite Performance
              </p>
              <p className="font-display text-lg sm:text-xl lg:text-2xl text-white">Precision, Pace &amp; Zero Jump Penalties</p>
            </div>
            <span className="rounded-full bg-black/60 border border-[#a8895c]/40 px-3.5 sm:px-4 py-1.5 font-sans text-[11px] sm:text-xs uppercase tracking-wider text-[#e6c994] self-start sm:self-auto shrink-0">
              100% Competition Completion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
