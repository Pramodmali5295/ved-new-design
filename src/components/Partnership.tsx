
import { useGsapReveal } from '@/hooks/useGsapAnimations';

export default function Partnership() {
  const sectionRef = useGsapReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="partnership" className="bg-[#1f1912] py-16 sm:py-24 lg:py-36 text-[#ebe4d8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="reveal text-center">
          <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            The Horse &middot; The Partnership
          </p>
          <h2 className="mt-4 sm:mt-6 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            Eventing isn&rsquo;t won by the rider alone.
          </h2>
          <p className="mx-auto mt-4 sm:mt-8 max-w-2xl font-serif text-base sm:text-xl italic leading-relaxed text-[#d9cdb8] lg:text-2xl px-2">
            It is a partnership between athlete and horse &mdash; built through trust, training
            and thousands of small decisions.
          </p>
        </div>

        {/* 100% Full Panoramic image of Ved + Horse */}
        <div className="reveal mt-12 sm:mt-16 overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#140e08] shadow-2xl p-1.5 sm:p-2" style={{ transitionDelay: '0.1s' }}>
          <div className="w-full overflow-hidden bg-[#120d08] rounded-sm">
            <img
              src="/assets/ved-10.jpeg"
              alt="Ved with his horse in the open pasture"
              className="w-full h-auto aspect-[16/9] sm:aspect-[21/9] object-cover object-center rounded-sm transition-transform duration-700 hover:scale-102"
              loading="lazy"
            />
          </div>
          <div className="bg-[#251e16] p-3 sm:p-4 text-center border-t border-white/10 mt-1.5 sm:mt-2 rounded-sm">
            <p className="font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#d9cdb8]">
              Daily Trust &amp; Connection &middot; Ocala, Florida
            </p>
          </div>
        </div>

        {/* Horse Cards - Perfectly Proportioned Landscape Action Photos */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-14">
          {/* Card 1: Matteo */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-6 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '0.15s' }}>
            <div>
              <div className="w-full overflow-hidden rounded-sm bg-[#120d08]">
                <img
                  src="/assets/ved-20.jpeg"
                  alt="Matteo and Ved clearing high international competition obstacle"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center rounded-sm transition-transform duration-700 hover:scale-104"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 sm:mt-7 font-display text-2xl sm:text-3xl text-white">Matteo</h3>
              <p className="mt-1.5 sm:mt-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c]">
                10yo &middot; CCI 2★ Irish Sport Horse &middot; Bay &middot; Gelding
              </p>
              <p className="mt-3 sm:mt-4 font-serif text-sm sm:text-base italic text-[#d9cdb8]/90 leading-relaxed">
                De Baune De Laudette — The powerhouse partner carrying Ved into the international 2-star eventing circuit.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              <span>International Partner</span>
              <span className="text-[#e6c994]">CCI 2★ Eventer</span>
            </div>
          </div>

          {/* Card 2: Cuba */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-4 sm:p-6 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '0.25s' }}>
            <div>
              <div className="w-full overflow-hidden rounded-sm bg-[#120d08]">
                <img
                  src="/assets/ved-24.jpeg"
                  alt="Cuba and Ved in training conditioning"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center rounded-sm transition-transform duration-700 hover:scale-104"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 sm:mt-7 font-display text-2xl sm:text-3xl text-white">Cuba</h3>
              <p className="mt-1.5 sm:mt-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c]">
                Partner horse &middot; Trail &amp; Arena Specialist
              </p>
              <p className="mt-3 sm:mt-4 font-serif text-sm sm:text-base italic text-[#d9cdb8]/90 leading-relaxed">
                A trusted companion in training conditioning, building rider endurance and refining cross-country rhythm.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              <span>Conditioning Partner</span>
              <span className="text-[#e6c994]">Trail &amp; Arena</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
