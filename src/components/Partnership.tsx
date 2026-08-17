import { IMAGES } from '@/data';

export default function Partnership() {
  return (
    <section id="partnership" className="bg-[#2d2418] py-24 text-[#ebe4d8] lg:py-40">
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

        {/* Large image of Ved + Matteo */}
        <div className="reveal mt-16 overflow-hidden" style={{ transitionDelay: '0.1s' }}>
          <img
            src={IMAGES.matteo}
            alt="Ved with Matteo"
            className="h-[50vh] min-h-[380px] w-full object-cover"
          />
        </div>

        {/* Horse cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Matteo */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="overflow-hidden">
              <img
                src={IMAGES.matteoDetail}
                alt="Matteo"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
            </div>
            <h3 className="mt-8 font-display text-4xl text-white">Matteo</h3>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-[#a8895c]">
              10yo &middot; CC2&#9733; Irish Sport Horse &middot; Bay &middot; Gelding
            </p>
            <p className="mt-4 font-serif text-lg italic text-[#d9cdb8]">De Baune De Laudette</p>
          </div>

          {/* Cuba */}
          <div className="reveal" style={{ transitionDelay: '0.25s' }}>
            <div className="overflow-hidden">
              <img
                src={IMAGES.cuba}
                alt="Cuba"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
            </div>
            <h3 className="mt-8 font-display text-4xl text-white">Cuba</h3>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-[#a8895c]">
              Partner horse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
