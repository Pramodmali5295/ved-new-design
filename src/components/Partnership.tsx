import { IMAGES } from '@/data';

export default function Partnership() {
  return (
    <section id="partnership" className="bg-[#1f1912] py-24 text-[#ebe4d8] lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
            The Horse &middot; The Partnership
          </p>
          <h2 className="mt-6 font-display text-4xl text-white lg:text-6xl">
            Eventing isn&rsquo;t won by the rider alone.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-[#d9cdb8] lg:text-2xl">
            It is a partnership between athlete and horse &mdash; built through trust, training
            and thousands of small decisions.
          </p>
        </div>

        {/* 100% Full Panoramic image of Ved + Horse */}
        <div className="reveal mt-16 overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#140e08] shadow-2xl p-2" style={{ transitionDelay: '0.1s' }}>
          <div className="w-full flex items-center justify-center max-h-[620px] overflow-hidden">
            <img
              src={IMAGES.matteo}
              alt="Ved with his horse in the open pasture"
              className="h-auto max-h-[600px] w-full object-contain"
            />
          </div>
          <div className="bg-[#251e16] p-4 text-center border-t border-white/10 mt-2 rounded-sm">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#d9cdb8]">
              Daily Trust &amp; Connection &middot; Ocala, Florida &middot; 100% Full Uncropped Frame
            </p>
          </div>
        </div>

        {/* Horse Cards - 100% Uncropped with object-contain */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Card 1 */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-6 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '0.15s' }}>
            <div>
              <div className="overflow-hidden rounded-sm bg-[#140e08] p-2 flex items-center justify-center h-80">
                <img
                  src={IMAGES.matteoDetail}
                  alt="Matteo and Ved"
                  className="h-full w-full object-contain transition-transform duration-700 hover:scale-102"
                />
              </div>
              <h3 className="mt-8 font-display text-3xl text-white">Matteo</h3>
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-[#a8895c]">
                10yo &middot; CCI 2★ Irish Sport Horse &middot; Bay &middot; Gelding
              </p>
              <p className="mt-4 font-serif text-base italic text-[#d9cdb8]/90">
                De Baune De Laudette — The powerhouse partner carrying Ved into the international 2-star eventing circuit.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              100% Full Rosette &amp; Partner Connection View
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-6 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '0.25s' }}>
            <div>
              <div className="overflow-hidden rounded-sm bg-[#140e08] p-2 flex items-center justify-center h-80">
                <img
                  src={IMAGES.cuba}
                  alt="Cuba and Ved on trail"
                  className="h-full w-full object-contain transition-transform duration-700 hover:scale-102"
                />
              </div>
              <h3 className="mt-8 font-display text-3xl text-white">Cuba</h3>
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-[#a8895c]">
                Partner horse &middot; Trail &amp; Arena Specialist
              </p>
              <p className="mt-4 font-serif text-base italic text-[#d9cdb8]/90">
                A trusted companion in training conditioning, building rider endurance and refining cross-country rhythm.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-sans uppercase tracking-wider text-[#a8895c]">
              100% Full Trail Portrait View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
