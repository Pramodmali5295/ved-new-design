import { HeartHandshake } from 'lucide-react';

const BELIEVERS = [
  {
    name: 'Dr. Cyrus Poonawalla',
    role: 'Chairman, Poonawalla Group',
    text: 'His heartfelt support in 2026 helped Ved gain huge momentum in his journey.',
  },
  {
    name: 'Bajaj Auto Foundation',
    role: 'CSR — Bajaj Auto Group',
    text: 'The organization driving the Corporate Social Responsibility projects of the Bajaj Auto Group has seen the potential in Ved to take Indian equestrian to the global stages.',
  },
  {
    name: 'The Family',
    role: 'Parents, uncles and aunts',
    text: 'A middle-class family stands rock-solid behind Ved, to make a common man’s uncommon dream come true — to see him representing India at the highest global platforms.',
  },
];

export default function Believers() {
  return (
    <section id="believers" className="bg-[#19140e] text-[#ebe4d8] py-16 sm:py-20 lg:py-32 relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            Foundational Support
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            The Early Believers
          </h2>
          <p className="mt-3 sm:mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/85">
            Pillars of vision and support who saw the potential in Ved and empowered his journey to global equestrian arenas.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {BELIEVERS.map((b, i) => (
            <div
              key={b.name}
              className={`reveal rounded-sm border border-white/10 bg-[#251e16] p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#a8895c]/60 flex flex-col justify-between ${
                i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#e6c994]">
                    0{i + 1}
                  </span>
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994]">
                    <HeartHandshake size={18} />
                  </div>
                </div>

                <h3 className="mt-5 sm:mt-6 font-display text-xl sm:text-2xl text-white">{b.name}</h3>
                <p className="mt-1 font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c] font-semibold">
                  {b.role}
                </p>

                <p className="mt-4 sm:mt-5 font-sans text-xs sm:text-sm leading-[1.8] text-[#d9cdb8]/80">
                  {b.text}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] sm:text-[10px] font-sans uppercase tracking-wider text-[#a8895c]">
                <span className="h-1 w-1 rounded-full bg-[#a8895c]" />
                <span>Believer &middot; Patron</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
