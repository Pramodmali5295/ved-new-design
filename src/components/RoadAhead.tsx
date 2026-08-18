import { ROADMAP, IMAGES } from '@/data';

export default function RoadAhead() {
  return (
    <section id="road" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.roadAhead}
          alt="Ved and horse on the hillside under open skies"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1912] via-[#2d2418]/90 to-[#1f1912]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-40">
        <div className="reveal max-w-3xl">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
            The Road Ahead
          </p>
          <h2 className="mt-6 font-display text-4xl text-white lg:text-6xl">
            A great road ahead.
          </h2>
          <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-[#d9cdb8] lg:text-2xl">
            From international competition to FEI star progression, the U25 World Championship
            pathway, the Asian Games, and the Olympic Games.
          </p>
        </div>

        {/* Roadmap timeline */}
        <div className="reveal mt-20" style={{ transitionDelay: '0.1s' }}>
          <div className="timeline-scroll overflow-x-auto pb-8">
            <div className="flex min-w-max gap-0">
              {ROADMAP.map((step, i) => (
                <div key={step.year} className="relative flex">
                  <div className="flex flex-col items-center pt-12">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#a8895c]/40" />
                    <div className="absolute top-[-6px] h-3 w-3 rounded-full border border-[#a8895c] bg-[#2d2418]" />
                    <div className="w-64 px-6 text-center">
                      <p className="font-display text-4xl text-white">{step.year}</p>
                      <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.25em] text-[#a8895c]">
                        {step.title}
                      </p>
                      <p className="mt-4 font-sans text-xs leading-[1.7] text-[#d9cdb8]/80">
                        {step.text}
                      </p>
                    </div>
                  </div>
                  {i < ROADMAP.length - 1 && (
                    <div className="flex items-center pt-1">
                      <span className="text-[#a8895c]/40">&rarr;</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="reveal mt-24 max-w-3xl border-t border-white/10 pt-12">
          <p className="font-serif text-2xl italic leading-relaxed text-[#d9cdb8] lg:text-3xl">
            &ldquo;I am determined to represent India in the Asian Games in 2030 and the Olympics
            in 2032, and multiple times thereafter, making India a formidable name in the world of
            equestrian sport.&rdquo;
          </p>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.25em] text-[#a8895c]">
            Ved Sarma Sarkar
          </p>
        </div>
      </div>
    </section>
  );
}
