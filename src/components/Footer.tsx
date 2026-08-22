import { ArrowUp, Mail, MapPin, Sparkles, Trophy } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140e08] text-[#ebe4d8] border-t border-white/10 safe-bottom relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-0 h-80 w-80 rounded-full bg-[#a8895c]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
        {/* Main 4-Column Grid */}
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Athlete Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <button
                onClick={() => onNavigate('home')}
                className="font-display text-2xl sm:text-3xl tracking-[0.16em] text-white hover:text-[#e6c994] transition-colors text-left font-normal"
              >
                VED SARMA SARKAR
              </button>
              
              <div className="mt-2.5 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#a8895c] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c]" />
                <span>FEI Eventing Athlete &bull; Team India</span>
              </div>

              <p className="mt-4 font-serif text-sm sm:text-base italic text-[#d9cdb8]/80 leading-relaxed max-w-md">
                Representing India on the world equestrian stage with precision, pace, and relentless dedication on the pathway to the 2030 Asian Games and 2032 Olympic Games.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-sans text-[10px] uppercase tracking-wider text-[#d9cdb8]/70">
              <span className="flex items-center gap-1.5 bg-[#251e16] px-3 py-1 rounded-full border border-white/10">
                <MapPin size={12} className="text-[#a8895c]" />
                <span>Ocala, Florida, USA</span>
              </span>
              <span className="flex items-center gap-1.5 bg-[#251e16] px-3 py-1 rounded-full border border-white/10">
                <MapPin size={12} className="text-[#a8895c]" />
                <span>Pune, India</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation - Story & Media (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#a8895c] font-bold pb-3 border-b border-white/10">
              Story &amp; Media
            </h4>
            <ul className="mt-4 space-y-2.5 font-sans text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  About Ved &amp; Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('making')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  The Journey (7 Milestones)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('media')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  In Action &amp; Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partnership')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  The Partnership (Horses)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation - Performance & Vision (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#a8895c] font-bold pb-3 border-b border-white/10">
              Track Record
            </h4>
            <ul className="mt-4 space-y-2.5 font-sans text-xs">
              <li>
                <button
                  onClick={() => onNavigate('record')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  Official Results &amp; KPI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaches')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  World-Class Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('road')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  Road Ahead (2026&ndash;2032)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#d9cdb8]/75 hover:text-white transition-colors"
                >
                  Contact &amp; Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Connect & Back to Top (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#a8895c] font-bold pb-3 border-b border-white/10">
                Direct Inquiries
              </h4>
              <p className="mt-4 font-sans text-xs text-[#d9cdb8]/75 leading-relaxed">
                For corporate sponsorships, CSR foundations, and press requests:
              </p>
              
              <a
                href="mailto:vedsarkar.equestrian@gmail.com"
                className="mt-3 group flex items-center gap-2 rounded-sm bg-[#251e16] border border-white/10 p-3 text-xs font-sans text-[#e6c994] hover:border-[#a8895c] hover:text-white transition-all break-all"
              >
                <Mail size={14} className="text-[#a8895c] shrink-0" />
                <span className="truncate">vedsarkar.equestrian@gmail.com</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 font-sans text-[10px] uppercase tracking-widest text-[#d9cdb8] hover:bg-[#a8895c] hover:text-[#2d2418] hover:border-[#a8895c] transition-all group"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
              </button>

              <div className="flex items-center gap-1.5 text-[#e6c994] font-sans text-[10px] uppercase tracking-wider">
                <Trophy size={13} className="text-[#a8895c]" />
                <span>Podium Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Verified Credentials */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-sans text-[#d9cdb8]/50">
          <p className="tracking-wide">
            &copy; {new Date().getFullYear()} Ved Sarma Sarkar. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#d9cdb8]/60">
            <span>FEI Registered</span>
            <span>&bull;</span>
            <span>EFI National Medallist</span>
            <span>&bull;</span>
            <span>USEA Circuit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
