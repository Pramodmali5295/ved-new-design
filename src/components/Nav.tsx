import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data';
import { useActiveSection } from '@/hooks/useScrollReveal';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.target));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (target: string) => {
    setOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#f5f1ea]/95 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(92,79,61,0.12)]'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => handleClick('hero')}
          className={`font-display text-lg tracking-[0.2em] transition-colors duration-500 ${
            scrolled ? 'text-[#2d2418]' : 'text-white'
          }`}
        >
          VED SARMA SARKAR
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => handleClick(link.target)}
                className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active === link.target
                    ? scrolled
                      ? 'text-[#a8895c]'
                      : 'text-[#d9cdb8]'
                    : scrolled
                      ? 'text-[#5c4f3d] hover:text-[#a8895c]'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden transition-colors ${scrolled ? 'text-[#2d2418]' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="mx-6 mt-4 flex flex-col gap-1 rounded-sm bg-[#f5f1ea] p-4 shadow-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.target}>
                <button
                  onClick={() => handleClick(link.target)}
                  className={`w-full py-3 text-left font-sans text-xs uppercase tracking-[0.2em] transition-colors ${
                    active === link.target ? 'text-[#a8895c]' : 'text-[#5c4f3d]'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
