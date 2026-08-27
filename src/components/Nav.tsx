import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';

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
    const onScroll = () => setScrolled(window.scrollY > 30);
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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleLinkClick = (target: string) => {
    setOpen(false);
    onNavigate(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage !== 'home'
          ? 'bg-[#140e08]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3.5 sm:py-4.5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-10">
        {/* Brand Name / Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="font-display text-sm sm:text-base lg:text-lg tracking-[0.14em] sm:tracking-[0.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0c775] to-[#e6c994] hover:from-[#ffffff] hover:via-[#ffe4a0] hover:to-[#f0c775] transition-all text-left whitespace-nowrap shrink-0 drop-shadow-[0_2px_14px_rgba(240,199,117,0.4)] flex items-center gap-2 mr-6 sm:mr-8 xl:mr-12"
        >
          <span>VED SARMA SARKAR</span>
        </button>

        {/* Desktop nav (xl screens 1280px+) */}
        <ul className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = currentPage === link.target;
            return (
              <li key={link.target} className="relative">
                <button
                  onClick={() => handleLinkClick(link.target)}
                  className={`relative font-sans text-[11px] 2xl:text-xs uppercase tracking-[0.12em] 2xl:tracking-[0.16em] transition-all duration-200 py-1.5 px-3 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'text-white font-bold bg-[#a8895c]/35 border border-[#f0c775]/70 shadow-[0_0_15px_rgba(240,199,117,0.35)]'
                      : 'text-white/90 hover:text-white hover:bg-white/10 font-medium'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Tablet / Mobile Right Actions */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* Quick Contact shortcut on tablet (sm to xl) */}
          <button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#a8895c]/20 hover:bg-[#a8895c] border border-[#f0c775]/40 hover:border-[#f0c775] text-[#fcefd2] hover:text-[#140e08] text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 transition-all duration-300 mr-1"
          >
            <Mail size={12} />
            <span>Connect</span>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white transition-all p-2 rounded-lg bg-black/40 hover:bg-[#a8895c]/20 border border-white/15 hover:border-[#f0c775]/50 focus:outline-none flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Responsive Mobile/Tablet Drawer Menu */}
      {open && (
        <div className="xl:hidden fixed inset-x-0 top-[57px] sm:top-[61px] bottom-0 z-50 bg-[#140e08]/98 backdrop-blur-2xl border-b border-white/15 shadow-2xl flex flex-col justify-between p-4 sm:p-6 overflow-y-auto animate-modal-enter touch-scroll">
          <ul className="flex flex-col gap-1.5 sm:gap-2">
            {NAV_LINKS.map((link, idx) => {
              const isActive = currentPage === link.target;
              return (
                <li key={link.target}>
                  <button
                    onClick={() => handleLinkClick(link.target)}
                    className={`w-full py-3 px-4 rounded-lg text-left font-sans text-xs sm:text-sm uppercase tracking-[0.18em] transition-all flex items-center justify-between min-h-[46px] sm:min-h-[50px] ${
                      isActive
                        ? 'bg-[#a8895c]/30 text-white font-bold border-l-4 border-[#f0c775] shadow-md'
                        : 'text-white/90 hover:text-white hover:bg-white/10 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-sans font-normal text-[#f0c775]/60">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-[#f0c775] shadow-[0_0_8px_#f0c775]" />
                    ) : (
                      <ArrowRight size={14} className="text-white/30" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Drawer Footer Badge */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#f0c775] font-semibold">
                Team India Athlete &bull; Eventing
              </p>
              <p className="font-serif text-xs italic text-[#d9cdb8]/70 mt-0.5">
                Targeting 2030 Asian Games &amp; 2032 Olympics
              </p>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#a8895c] hover:bg-[#c2a372] text-[#140e08] font-bold text-xs uppercase tracking-wider px-5 py-2.5 shadow-lg transition-all active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
