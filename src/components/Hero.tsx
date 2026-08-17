import { IMAGES } from '@/data';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Equestrian rider jumping"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2418]/70 via-transparent to-[#2d2418]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="animate-fade-in-up font-sans text-[11px] uppercase tracking-luxe text-[#d9cdb8] opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Eventing &middot; India
        </p>

        <h1
          className="animate-fade-in-up mt-6 font-display text-5xl text-white opacity-0 sm:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s' }}
        >
          Ved Sarma Sarkar
        </h1>

        <p
          className="animate-fade-in-up mt-8 max-w-xl font-serif text-xl italic text-[#ebe4d8] opacity-0 sm:text-2xl"
          style={{ animationDelay: '0.9s' }}
        >
          A young rider.
          <br />
          A great road ahead.
        </p>

        <p
          className="animate-fade-in-up mt-10 font-sans text-[10px] uppercase tracking-[0.25em] text-[#d9cdb8]/80 opacity-0"
          style={{ animationDelay: '1.3s' }}
        >
          International podium achiever &nbsp;&bull;&nbsp; National medallist &nbsp;&bull;&nbsp; FEI athlete
        </p>

        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-fade-in-up mt-14 flex flex-col items-center gap-3 opacity-0"
          style={{ animationDelay: '1.6s' }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/70">Scroll</span>
          <span className="flex h-12 w-[1px] items-start overflow-hidden bg-white/30">
            <span className="h-full w-full animate-[fadeInUp_1.5s_ease-in-out_infinite] bg-white/80" />
          </span>
        </button>
      </div>
    </section>
  );
}
