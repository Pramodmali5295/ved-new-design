import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate?: (pageId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleExploreMedia = () => {
    if (onNavigate) {
      onNavigate('media');
    } else {
      document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const summaryEl = document.getElementById('overview-summary');
    if (summaryEl) {
      summaryEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] sm:min-h-[640px] max-h-[960px] w-full overflow-hidden bg-[#140e08] flex items-center justify-center pt-16 pb-10 sm:py-16">
      {/* Background Media: Dynamic Cross-Country Action Full-Width Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/ved-1.jpeg"
          alt="Ved Sarma Sarkar - Cross-country gallop in official competition"
          className="h-full w-full object-cover object-[center_35%] transition-transform duration-1000 animate-ken-burns"
        />
        
        {/* Cinematic gradient overlays for luxury contrast and text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1610] via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e08]/85 via-transparent to-[#1c1610]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12 text-center flex flex-col items-center justify-center animate-fade-in-up">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#a8895c]/40 bg-black/60 px-3.5 py-1.5 backdrop-blur-md shadow-lg transition-transform duration-500 hover:scale-105">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#a8895c] animate-pulse" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#e6c994] font-medium">
            Eventing &middot; Team India Athlete
          </span>
        </div>

        {/* Main Name Heading */}
        <h1 className="mt-4 sm:mt-5 font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight drop-shadow-lg break-words">
          Ved Sarma Sarkar
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 max-w-2xl font-serif text-base sm:text-xl md:text-2xl italic text-[#ebe4d8] drop-shadow leading-relaxed px-2">
          Pursuing excellence on the world stage.
          <br className="hidden sm:inline" />
          <span className="text-[#d9cdb8]/90 sm:ml-2">On the pathway to the Asian Games &amp; Olympics.</span>
        </p>

        {/* Credentials Pill Strip */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 font-sans text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#e6c994] drop-shadow max-w-lg">
          <span className="bg-black/60 px-2.5 sm:px-3 py-1 rounded-full border border-white/10 transition-all hover:border-[#a8895c]/60 hover:text-white">International Podium Achiever</span>
          <span className="hidden sm:inline text-white/40">&bull;</span>
          <span className="bg-black/60 px-2.5 sm:px-3 py-1 rounded-full border border-white/10 transition-all hover:border-[#a8895c]/60 hover:text-white">National Medallist</span>
          <span className="hidden sm:inline text-white/40">&bull;</span>
          <span className="bg-black/60 px-2.5 sm:px-3 py-1 rounded-full border border-white/10 transition-all hover:border-[#a8895c]/60 hover:text-white">FEI Athlete</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full xs:w-auto">
          <button
            onClick={handleExploreMedia}
            className="w-full xs:w-auto group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#a8895c] px-6 sm:px-7 py-3 font-sans text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#2d2418] font-bold transition-all duration-300 hover:bg-[#c2a372] hover:shadow-[0_0_25px_rgba(168,137,92,0.5)] hover:scale-105 active:scale-95 shadow-xl min-h-[44px]"
          >
            <span>In Action &amp; Gallery (16 Items)</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          {onNavigate && (
            <button
              onClick={() => onNavigate('about')}
              className="w-full xs:w-auto group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/50 px-5 sm:px-6 py-3 font-sans text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-[#a8895c] hover:text-[#e6c994] hover:scale-105 active:scale-95 shadow-xl min-h-[44px]"
            >
              <span>About Ved</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollDown}
          className="mt-8 sm:mt-10 flex flex-col items-center gap-1.5 cursor-pointer group text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to summary"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <ChevronDown size={18} className="animate-bounce text-[#a8895c]" />
        </button>
      </div>
    </section>
  );
}
