
export default function Partnership() {
  return (
    <section id="partnership" className="bg-[#1f1912] py-16 sm:py-24 lg:py-36 text-[#ebe4d8]">
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
        <div className="reveal mt-12 sm:mt-16 overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#140e08] shadow-2xl p-2" style={{ transitionDelay: '0.1s' }}>
          <div className="w-full flex items-center justify-center max-h-[620px] overflow-hidden">
            <img
              src="/assets/ved-10.jpeg"
              alt="Ved with his horse in the open pasture"
              className="h-auto max-h-[480px] sm:max-h-[600px] w-full object-contain"
            />
          </div>
          <div className="bg-[#251e16] p-3 sm:p-4 text-center border-t border-white/10 mt-2 rounded-sm">
            <p className="font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#d9cdb8]">
              Daily Trust &amp; Connection &middot; Ocala, Florida &middot; 100% Full Uncropped Frame
            </p>
          </div>
        </div>

        {/* Horse Cards - 100% Uncropped with object-contain */}
        <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 lg:gap-16">
          {/* Card 1 */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-6 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '0.15s' }}>
            <div>
              <div className="overflow-hidden rounded-sm bg-[#120d08] p-2 flex items-center justify-center h-64 sm:h-72 lg:h-80">
                <img
                  src="/assets/ved-4.jpeg"
                  alt="Matteo and Ved"
                  className="h-full w-full object-contain transition-transform duration-700 hover:scale-102"
                />
              </div>
              <h3 className="mt-6 sm:mt-8 font-display text-2xl sm:text-3xl text-white">Matteo</h3>
              <p className="mt-1.5 sm:mt-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c]">
                10yo &middot; CCI 2★ Irish Sport Horse &middot; Bay &middot; Gelding
              </p>
              <p className="mt-3 sm:mt-4 font-serif text-sm sm:text-base italic text-[#d9cdb8]/90">
                De Baune De Laudette — The powerhouse partner carrying Ved into the international 2-star eventing circuit.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              100% Full Rosette &amp; Partner Connection View
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-6 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '0.25s' }}>
            <div>
              <div className="overflow-hidden rounded-sm bg-[#120d08] p-2 flex items-center justify-center h-64 sm:h-72 lg:h-80">
                <img
                  src="/assets/ved-6.jpeg"
                  alt="Cuba and Ved on trail"
                  className="h-full w-full object-contain transition-transform duration-700 hover:scale-102"
                />
              </div>
              <h3 className="mt-6 sm:mt-8 font-display text-2xl sm:text-3xl text-white">Cuba</h3>
              <p className="mt-1.5 sm:mt-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c]">
                Partner horse &middot; Trail &amp; Arena Specialist
              </p>
              <p className="mt-3 sm:mt-4 font-serif text-sm sm:text-base italic text-[#d9cdb8]/90">
                A trusted companion in training conditioning, building rider endurance and refining cross-country rhythm.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              100% Full Trail Portrait View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
