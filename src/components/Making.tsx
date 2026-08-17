import { IMAGES, TIMELINE, PILLARS } from '@/data';

export default function Making() {
  return (
    <section id="making" className="bg-[#ebe4d8] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
            The Making of an Athlete
          </p>
          <h2 className="mt-6 font-display text-4xl text-[#2d2418] lg:text-6xl">
            From a shy 14-year-old in Pune
            <br className="hidden sm:block" /> to the international stage.
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="reveal mt-20" style={{ transitionDelay: '0.1s' }}>
          <div className="timeline-scroll overflow-x-auto pb-6">
            <div className="flex min-w-max gap-0">
              {TIMELINE.map((item, i) => (
                <div key={item.phase} className="relative flex">
                  {/* Node + line */}
                  <div className="flex flex-col items-center pt-12">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#a8895c]/30" />
                    <div className="absolute top-[-5px] h-[11px] w-[11px] rounded-full border border-[#a8895c] bg-[#ebe4d8]" />
                    <div className="w-64 px-6 text-center">
                      <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#a8895c]">
                        {item.phase}
                      </p>
                      <p className="mt-3 font-display text-3xl text-[#2d2418]">{item.year}</p>
                      <p className="mt-3 font-serif text-lg italic text-[#5c4f3d]">{item.title}</p>
                      <p className="mt-4 font-sans text-xs leading-[1.7] text-[#5c4f3d]/80">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  {/* connector spacer */}
                  {i < TIMELINE.length - 1 && <div className="w-12" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-28 grid gap-x-12 gap-y-16 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-[#a8895c]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl text-[#2d2418] lg:text-3xl">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-5 font-sans text-sm leading-[1.8] text-[#5c4f3d]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width image band */}
        <div className="reveal mt-24 overflow-hidden">
          <img
            src={IMAGES.makingJump}
            alt="Horse and rider navigating an obstacle"
            className="h-[42vh] min-h-[320px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
