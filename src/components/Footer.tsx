import { NAV_LINKS } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-[#1a140e] py-16 text-[#d9cdb8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <p className="font-display text-2xl tracking-[0.2em] text-white">VED SARMA SARKAR</p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() =>
                  document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' })
                }
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9cdb8]/60 transition-colors hover:text-[#a8895c]"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 lg:flex-row">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9cdb8]/40">
            Eventing &middot; India
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9cdb8]/40">
            International podium achiever &middot; National medallist &middot; FEI athlete
          </p>
        </div>
      </div>
    </footer>
  );
}
