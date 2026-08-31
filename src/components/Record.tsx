import { Trophy, Medal, CheckCircle2, Sparkles, Flag, Star } from 'lucide-react';
import { KPI, NATIONAL_RESULTS, INTERNATIONAL_RESULTS } from '@/data';
import { useGsapReveal, GsapCounter } from '@/hooks/useGsapAnimations';


const medalBadge: Record<string, { bg: string; text: string; label: string }> = {
  gold: { bg: 'bg-[#a8895c]/20 border-[#a8895c] text-[#e6c994]', text: 'text-[#e6c994]', label: 'Gold / 1st' },
  silver: { bg: 'bg-slate-300/20 border-slate-300 text-slate-200', text: 'text-slate-200', label: 'Silver / 2nd' },
  bronze: { bg: 'bg-[#c2844d]/20 border-[#c2844d] text-[#e3a876]', text: 'text-[#e3a876]', label: 'Bronze / 3rd' },
  none: { bg: 'bg-white/10 border-white/20 text-[#d9cdb8]', text: 'text-[#d9cdb8]', label: 'Top-10' },
};

export default function Record() {
  const sectionRef = useGsapReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="record" className="bg-[#1c1610] pt-6 sm:pt-8 lg:pt-12 pb-16 sm:py-24 lg:pb-36 text-[#ebe4d8] relative overflow-hidden border-t border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 -z-0 h-96 w-96 rounded-full bg-[#a8895c]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header - Centered */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#a8895c]">
            <span className="h-[1px] w-6 bg-[#a8895c]" />
            Official Track Record
            <span className="h-[1px] w-6 bg-[#a8895c]" />
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white">
            Proven Results &amp; Milestones
          </h2>
          <p className="mt-3 sm:mt-4 font-serif text-base sm:text-lg italic text-[#d9cdb8]/80 text-center">
            A track record of precision &mdash; multiple national medals, international podium finishes, and a 100% course completion record.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a8895c]/40 bg-[#251e16] px-4 py-1.5 text-xs font-sans text-[#e6c994] shadow-lg">
            <Sparkles size={14} className="text-[#a8895c]" />
            <span>FEI &bull; National &bull; US Circuit</span>
          </div>
        </div>

        {/* Top 4 Featured Key Stat Cards */}
        <div className="gsap-stagger-container mt-10 sm:mt-14 grid gap-2.5 xxs:gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="gsap-stagger-item group/stat relative overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#251e16] p-3 xxs:p-4 sm:p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#f0c775]/70 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl font-bold text-[#e6c994] group-hover/stat:text-[#f0c775] transition-colors">
                <GsapCounter end={16} />
              </span>
              <div className="flex h-7 w-7 xxs:h-8 xxs:w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#a8895c] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500 shrink-0">
                <Trophy size={16} className="sm:hidden" />
                <Trophy size={18} className="hidden sm:block" />
              </div>
            </div>
            <div>
              <p className="mt-3 sm:mt-4 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                Youngest on Podium
              </p>
              <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70 leading-relaxed">
                FEI World Challenge &middot; New Delhi 2023
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="gsap-stagger-item group/stat relative overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#251e16] p-4 sm:p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#f0c775]/70 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold text-[#e6c994] group-hover/stat:text-[#f0c775] transition-colors">
                <GsapCounter end={100} suffix="%" />
              </span>
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#a8895c] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500">
                <CheckCircle2 size={18} />
              </div>
            </div>
            <div>
              <p className="mt-3 sm:mt-4 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                Completion Rate
              </p>
              <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70 leading-relaxed">
                Zero cross-country eliminations across career
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="gsap-stagger-item group/stat relative overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#251e16] p-4 sm:p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#f0c775]/70 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold text-[#e6c994] group-hover/stat:text-[#f0c775] transition-colors">
                <GsapCounter end={1} />
              </span>
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#a8895c] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500">
                <Medal size={18} />
              </div>
            </div>
            <div>
              <p className="mt-3 sm:mt-4 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                International Podium
              </p>
              <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70 leading-relaxed">
                FEI World Challenge &middot; New Delhi 2023
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="gsap-stagger-item group/stat relative overflow-hidden rounded-sm border border-[#a8895c]/30 bg-[#251e16] p-4 sm:p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#f0c775]/70 hover:shadow-[0_24px_48px_rgba(0,0,0,0.85),0_0_25px_rgba(240,199,117,0.18)] flex flex-col justify-between cursor-default">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold text-[#e6c994] group-hover/stat:text-[#f0c775] transition-colors">
                <GsapCounter end={2} />
              </span>
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#a8895c] group-hover/stat:scale-110 group-hover/stat:bg-[#a8895c]/35 transition-all duration-500">
                <Medal size={18} />
              </div>
            </div>
            <div>
              <p className="mt-3 sm:mt-4 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
                National Medals
              </p>
              <p className="mt-0.5 sm:mt-1 font-sans text-[10px] sm:text-[11px] text-[#d9cdb8]/70 leading-relaxed">
                Team Silver (2023) &amp; Individual Bronze (2024)
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Results Grid */}
        <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          {/* National Championships Card */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 sm:pb-5">
              <Flag size={20} className="text-[#a8895c] shrink-0" />
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white">National Championship Medals</h3>
                <p className="font-sans text-xs text-[#d9cdb8]/70">Junior National Equestrian Championship (JNEC)</p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-col gap-3.5 sm:gap-4">
              {NATIONAL_RESULTS.map((r) => (
                <div
                  key={r.event}
                  className="flex items-center justify-between rounded-sm border border-white/10 bg-[#1c1610] p-3.5 sm:p-4.5 transition-colors hover:border-[#a8895c]/50 gap-2"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#a8895c]/20 text-[#e6c994] shrink-0">
                      <Medal size={18} />
                    </div>
                    <div>
                      <p className="font-serif text-base sm:text-lg font-medium text-white">{r.result}</p>
                      <p className="mt-0.5 font-sans text-xs text-[#d9cdb8]/70">{r.event}</p>
                    </div>
                  </div>
                  <span className="rounded bg-[#a8895c]/20 border border-[#a8895c]/40 px-2.5 sm:px-3 py-1 font-display text-base sm:text-lg text-[#e6c994] shrink-0">
                    {r.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* International Circuit Performances Card */}
          <div className="reveal rounded-sm border border-white/10 bg-[#251e16] p-5 sm:p-8 shadow-xl" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 sm:pb-5">
              <Star size={20} className="text-[#a8895c] shrink-0" />
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white">International &amp; US Circuit</h3>
                <p className="font-sans text-xs text-[#d9cdb8]/70">FEI, USEA &amp; WEC Ocala Competitions</p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-col gap-3 max-h-[380px] overflow-y-auto pr-1">
              {INTERNATIONAL_RESULTS.map((r) => {
                const badge = medalBadge[r.medal] || medalBadge.none;
                return (
                  <div
                    key={`${r.date}-${r.event}`}
                    className="flex items-center justify-between rounded-sm border border-white/10 bg-[#1c1610] px-3.5 sm:px-4 py-2.5 sm:py-3 transition-colors hover:border-[#a8895c]/50 gap-2"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className={`inline-flex items-center justify-center rounded-full border px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-wider shrink-0 ${badge.bg}`}>
                        {r.result}
                      </span>
                      <p className="font-sans text-xs font-medium text-white/95 truncate">{r.event}</p>
                    </div>
                    <span className="shrink-0 font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-[#a8895c]">
                      {r.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Performance Matrix (Clean KPI Grid) */}
        <div className="reveal mt-12 sm:mt-16 rounded-sm border border-[#a8895c]/30 bg-[#251e16] p-5 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4 sm:pb-5">
            <div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-white">
                Competitive Performance Matrix
              </h3>
              <p className="font-sans text-xs text-[#d9cdb8]/70 mt-1">
                Verified Season Key Performance Indicators
              </p>
            </div>
            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#a8895c] border border-[#a8895c]/40 px-3 py-1 rounded-full self-start">
              100% Completion Record
            </span>
          </div>

          <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {KPI.map((kpi) => (
              <div
                key={kpi.metric}
                className="flex items-center justify-between rounded-sm border border-white/10 bg-[#1c1610] p-3.5 sm:p-4.5 transition-all hover:border-[#a8895c]/50"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c]" />
                  <span className="font-sans text-xs font-medium text-[#d9cdb8]/80">{kpi.metric}</span>
                </div>
                <span className="font-display text-xl sm:text-2xl font-bold text-white ml-3 shrink-0">
                  {kpi.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action band - High Resolution Landscape Action Photo at the end of the page */}
        <div className="reveal mt-14 sm:mt-20 relative overflow-hidden rounded-sm bg-[#120d08] border border-[#a8895c]/40 p-1.5 sm:p-2 shadow-2xl flex flex-col items-center">
          <div className="w-full overflow-hidden bg-[#120d08] rounded-sm">
            <img
              src="/assets/ved-25.jpeg"
              alt="Ved Sarma Sarkar galloping across cross-country course"
              className="w-full h-auto aspect-[16/9] sm:aspect-[21/9] object-cover object-center rounded-sm transition-transform duration-700 hover:scale-102"
              loading="lazy"
            />
          </div>
          <div className="w-full bg-[#251e16] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between text-white gap-3 border-t border-white/10 mt-1.5 sm:mt-2 rounded-sm">
            <div>
              <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#a8895c]">
                Cross-Country Mastery &middot; Elite Performance
              </p>
              <p className="font-display text-lg sm:text-xl lg:text-2xl text-white">Precision, Pace &amp; High Performance</p>
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
