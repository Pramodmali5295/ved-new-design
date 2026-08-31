import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { NAV_LINKS } from '@/data';

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
                  className={`relative font-sans text-[11px] 2xl:text-xs uppercase tracking-[0.12em] 2xl:tracking-[0.16em] transition-all duration-300 py-1.5 px-3.5 rounded-full whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#f0c775] font-bold bg-[#a8895c]/30 border border-[#f0c775]/80 shadow-[0_0_20px_rgba(240,199,117,0.3)]'
                      : 'text-white/85 hover:text-white hover:bg-white/10 font-medium'
                  }`}
                >
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#f0c775] animate-pulse" />}
                  <span>{link.label}</span>
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

          {/* Hamburger Menu Toggle Button - Radiant Olympic Gold Styling */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="transition-all p-2 rounded-lg bg-[#221910] hover:bg-[#a8895c] text-[#f0c775] hover:text-[#140e08] border-2 border-[#f0c775] shadow-[0_0_15px_rgba(240,199,117,0.4)] focus:outline-none flex items-center justify-center h-10 w-10 active:scale-95"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
          </button>
        </div>
      </nav>

      {/* Full-Screen 100% Solid Opaque Mobile/Tablet Drawer Portal (No Background Bleed-Through) */}
      {open && typeof document !== 'undefined' && createPortal(
        <div className="xl:hidden fixed inset-0 z-[999999] bg-[#120d08] flex flex-col justify-between h-[100dvh] w-full overflow-hidden animate-modal-enter safe-top safe-bottom">
          {/* Solid Top Bar inside mobile menu with Logo and Close button */}
          <div className="flex items-center justify-between px-3.5 xxs:px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/15 shrink-0 bg-[#1a130c]">
            <button
              onClick={() => handleLinkClick('home')}
              className="font-display text-sm sm:text-base tracking-[0.14em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0c775] to-[#e6c994] text-left"
            >
              VED SARMA SARKAR
            </button>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-[#a8895c] hover:bg-[#c2a372] text-[#140e08] transition-all focus:outline-none flex items-center justify-center h-9 w-9 shadow-[0_0_14px_rgba(240,199,117,0.5)] active:scale-95"
              aria-label="Close navigation menu"
            >
              <X size={18} className="stroke-[3]" />
            </button>
          </div>

          {/* Scrollable Navigation Links List with Solid High-Contrast Backgrounds */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 touch-scroll bg-[#120d08]">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, idx) => {
                const isActive = currentPage === link.target;
                return (
                  <li key={link.target}>
                    <button
                      onClick={() => handleLinkClick(link.target)}
                      className={`w-full py-3.5 px-4 rounded-lg text-left font-sans text-xs sm:text-sm uppercase tracking-[0.18em] transition-all flex items-center justify-between min-h-[50px] ${
                        isActive
                          ? 'bg-[#2a1f14] text-white font-bold border-l-4 border-[#f0c775] border-y border-r border-[#f0c775]/30 shadow-lg'
                          : 'bg-[#1b140d] text-white hover:text-white hover:bg-[#251c13] font-medium border border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono font-bold text-[#f0c775]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{link.label}</span>
                      </div>
                      {isActive ? (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#f0c775] shadow-[0_0_8px_#f0c775]" />
                      ) : (
                        <ArrowRight size={15} className="text-[#a8895c]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Solid Drawer Footer */}
          <div className="p-4 sm:p-6 border-t border-white/15 bg-[#1a130c] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#f0c775] font-bold">
                Team India Athlete &bull; Eventing
              </p>
              <p className="font-serif text-xs italic text-[#d9cdb8]/80 mt-0.5">
                Targeting 2030 Asian Games &amp; 2032 Olympics
              </p>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#a8895c] hover:bg-[#c2a372] text-[#140e08] font-bold text-xs uppercase tracking-wider px-6 py-2.5 shadow-lg transition-all active:scale-95 min-h-[44px]"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
