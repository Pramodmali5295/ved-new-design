import { useState, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/utils/gsapConfig';
import Nav from '@/components/Nav';
import HomeOverview from '@/components/HomeOverview';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Making from '@/components/Making';
import ActionGallery from '@/components/ActionGallery';
import Partnership from '@/components/Partnership';
import Coaches from '@/components/Coaches';
import Believers from '@/components/Believers';
import Record from '@/components/Record';
import RoadAhead from '@/components/RoadAhead';
import Contact from '@/components/Contact';

const validPages = new Set(['home', 'about', 'making', 'media', 'partnership', 'coaches', 'road', 'contact']);

function App() {
  // Always land on 'home' page upon browser refresh
  const [currentPage, setCurrentPage] = useState<string>('home');
  const pageContentRef = useRef<HTMLDivElement>(null);

  // Clean URL hash and reset to Home on initial page load / refresh
  useEffect(() => {
    try {
      localStorage.removeItem('ved_current_page');
    } catch {
      // ignore
    }
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Sync hash changes if user uses browser Back/Forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '').trim();
      if (hash === 'record') {
        setCurrentPage('making');
      } else if (validPages.has(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Always scroll to the very top immediately whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  // Fast & Clean Page Fade Transition on Page Change
  useGSAP(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (pageContentRef.current) {
        gsap.fromTo(
          pageContentRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.2,
            ease: 'power1.out',
            onComplete: () => {
              ScrollTrigger.refresh();
            },
          }
        );
      }
    },
    { dependencies: [currentPage] }
  );

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    } else {
      window.location.hash = `#${pageId}`;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'making':
        return (
          <>
            <Making />
            <Record />
          </>
        );
      case 'media':
        return <ActionGallery />;
      case 'partnership':
        return <Partnership />;
      case 'coaches':
        return (
          <>
            <Coaches />
            <Believers />
          </>
        );
      case 'road':
        return <RoadAhead />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <HomeOverview onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#19140e] flex flex-col justify-between relative">
      <Nav currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {/* Page Content with GSAP smooth instant transition */}
        <div ref={pageContentRef} key={currentPage}>
          {renderContent()}
        </div>
      </main>

      {/* Floating Back to Top Gold Pulse Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#18120b]/90 border border-[#f0c775]/60 text-[#f0c775] hover:bg-[#a8895c] hover:text-[#18120b] flex items-center justify-center backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-110 active:scale-95 group ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:-translate-y-0.5"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
