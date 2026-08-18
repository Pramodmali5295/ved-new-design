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

        {/* Visual Timeline with 100% Full Uncropped Milestone Photos */}
        <div className="reveal mt-16 lg:mt-24" style={{ transitionDelay: '0.1s' }}>
          <div className="timeline-scroll overflow-x-auto pb-6">
            <div className="flex min-w-max gap-8 px-2">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.phase}
                  className="group relative flex w-80 flex-col rounded-sm bg-[#f5f1ea] border border-[#a8895c]/20 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden"
                >
                  {/* Photo thumbnail - 100% full view with object-contain */}
                  {item.image && (
                    <div className="relative h-56 w-full overflow-hidden bg-[#16110b] flex items-center justify-center p-2">
                      <img
                        src={item.image}
                        alt={`${item.title} - ${item.year}`}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-102"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-full bg-black/75 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#d9cdb8] backdrop-blur-sm">
                        {item.phase}
                      </span>
                      {item.tag && (
                        <span className="absolute bottom-2.5 left-2.5 font-sans text-[10px] font-medium tracking-wide text-white bg-black/75 px-2 py-0.5 rounded-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-2xl text-[#a8895c]">{item.year}</span>
                      <span className="font-sans text-[10px] text-[#5c4f3d]/60 uppercase tracking-wider">
                        Milestone {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg font-medium italic text-[#2d2418]">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-xs leading-[1.7] text-[#5c4f3d]/85">
                      {item.text}
                    </p>
                  </div>
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
              className="reveal border-l border-[#a8895c]/30 pl-6"
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

        {/* Action band - 100% Uncropped Full Action Image */}
        <div className="reveal mt-24 relative overflow-hidden rounded-sm bg-[#16110b] border border-[#a8895c]/30 p-2 shadow-2xl flex flex-col items-center">
          <div className="w-full flex items-center justify-center max-h-[600px] overflow-hidden">
            <img
              src={IMAGES.makingJump}
              alt="Ved Sarma Sarkar galloping across cross-country course"
              className="h-auto max-h-[580px] w-full object-contain"
            />
          </div>
          <div className="w-full bg-[#251e16] p-4 flex flex-col sm:flex-row sm:items-center justify-between text-white gap-2 border-t border-white/10">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#a8895c]">
                Cross-Country Mastery &middot; 100% Full View
              </p>
              <p className="font-display text-xl sm:text-2xl">Precision, Pace &amp; Zero Penalties</p>
            </div>
            <p className="font-serif italic text-sm text-[#d9cdb8]/90">
              100% Competition Completion Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
