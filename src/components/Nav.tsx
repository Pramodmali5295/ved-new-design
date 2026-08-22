import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const NAV_LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'About Ved', target: 'about' },
  { label: 'The Journey', target: 'making' },
  { label: 'In Action & Gallery', target: 'media' },
  { label: 'The Partnership', target: 'partnership' },
  { label: 'Results', target: 'record' },
  { label: 'Mentors', target: 'coaches' },
  { label: 'Road Ahead', target: 'road' },
  { label: 'Contact', target: 'contact' },
];


interface NavProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleLinkClick = (target: string) => {
    setOpen(false);
    onNavigate(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || currentPage !== 'home'
          ? 'bg-[#19140e]/95 backdrop-blur-md py-3 sm:py-3.5 shadow-xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          onClick={() => handleLinkClick('home')}
          className="font-display text-sm sm:text-base lg:text-lg tracking-[0.16em] sm:tracking-[0.2em] text-white hover:text-[#a8895c] transition-colors text-left truncate max-w-[240px] xs:max-w-none"
        >
          VED SARMA SARKAR
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-2.5 lg:gap-3 xl:gap-5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = currentPage === link.target;
            return (
              <li key={link.target}>
                <button
                  onClick={() => handleLinkClick(link.target)}
                  className={`font-sans text-[10px] xl:text-[11px] uppercase tracking-[0.12em] xl:tracking-[0.18em] transition-all duration-300 py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#e6c994] font-bold border-b-2 border-[#a8895c]'
                      : 'text-[#d9cdb8]/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white transition-colors p-2 -mr-1 rounded-md hover:bg-white/10 focus:outline-none"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu modal drawer */}
      {open && (
        <div className="lg:hidden animate-fade-in bg-[#19140e]/98 backdrop-blur-xl border-b border-white/10 px-5 sm:px-6 py-5 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto touch-scroll">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.target;
              return (
                <li key={link.target}>
                  <button
                    onClick={() => handleLinkClick(link.target)}
                    className={`w-full py-3 px-3 rounded-sm text-left font-sans text-xs uppercase tracking-[0.18em] transition-colors flex items-center justify-between min-h-[44px] ${
                      isActive
                        ? 'bg-[#a8895c]/20 text-[#e6c994] font-bold border-l-2 border-[#a8895c]'
                        : 'text-[#d9cdb8]/85 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#a8895c]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
