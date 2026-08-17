import { STATS, KPI, NATIONAL_RESULTS, INTERNATIONAL_RESULTS } from '@/data';

const medalColor: Record<string, string> = {
  gold: 'bg-[#a8895c]',
  silver: 'bg-[#8a7a63]/70',
  bronze: 'bg-[#8a6a4a]/60',
  none: 'bg-[#d9cdb8]',
};

export default function Record() {
  return (
    <section id="record" className="bg-[#2d2418] py-24 text-[#ebe4d8] lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-[#a8895c]">
            The Record
          </p>
          <h2 className="mt-6 font-display text-4xl text-white lg:text-6xl">Big numbers.</h2>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal bg-[#2d2418] p-8 lg:p-10"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <p className="font-display text-5xl text-white lg:text-6xl">{stat.number}</p>
              <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.15em] text-[#d9cdb8]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* National */}
          <div className="reveal">
            <h3 className="font-display text-2xl text-white lg:text-3xl">
              National Level Performance
            </h3>
            <div className="mt-8 flex flex-col">
              {NATIONAL_RESULTS.map((r) => (
                <div
                  key={r.event}
                  className="flex items-baseline justify-between gap-6 border-b border-white/10 py-6"
                >
                  <div>
                    <p className="font-serif text-xl italic text-[#d9cdb8]">{r.result}</p>
                    <p className="mt-1 font-sans text-xs text-[#d9cdb8]/60">{r.event}</p>
                  </div>
                  <span className="font-display text-2xl text-[#a8895c]">{r.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="font-display text-2xl text-white lg:text-3xl">
              International Performance
            </h3>
            <div className="mt-8 flex flex-col">
              {INTERNATIONAL_RESULTS.map((r) => (
                <div
                  key={r.event}
                  className="flex items-center justify-between gap-6 border-b border-white/10 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className={`h-2.5 w-2.5 rounded-full ${medalColor[r.medal]}`} />
                    <div>
                      <p className="font-serif text-lg italic text-[#d9cdb8]">{r.result}</p>
                      <p className="mt-0.5 font-sans text-xs text-[#d9cdb8]/60">{r.event}</p>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#a8895c]">
                    {r.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KPI table */}
        <div className="reveal mt-20">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-2xl text-white lg:text-3xl">
              March &ndash; June 2026 KPI
            </h3>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#a8895c]">
              Season Snapshot
            </p>
          </div>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {KPI.map((kpi) => (
              <div
                key={kpi.metric}
                className="flex items-baseline justify-between bg-[#2d2418] px-6 py-5"
              >
                <span className="font-sans text-xs text-[#d9cdb8]/70">{kpi.metric}</span>
                <span className="font-display text-2xl text-white">{kpi.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
