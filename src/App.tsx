import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/utils/gsapConfig';
import { useGsapReveal } from '@/hooks/useGsapAnimations';
import Nav from '@/components/Nav';
import HomeOverview from '@/components/HomeOverview';
import Footer from '@/components/Footer';

// Code-split dynamic page imports for lightning-fast initial load
const About = lazy(() => import('@/components/About'));
const Making = lazy(() => import('@/components/Making'));
const ActionGallery = lazy(() => import('@/components/ActionGallery'));
const Partnership = lazy(() => import('@/components/Partnership'));
const Coaches = lazy(() => import('@/components/Coaches'));
const Believers = lazy(() => import('@/components/Believers'));
const Record = lazy(() => import('@/components/Record'));
const RoadAhead = lazy(() => import('@/components/RoadAhead'));
const Contact = lazy(() => import('@/components/Contact'));

const validPages = new Set(['home', 'about', 'making', 'media', 'partnership', 'record', 'coaches', 'road', 'contact']);

function PageLoadingSkeleton() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#a8895c]/20 border-t-[#e6c994]" />
      <span className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-[#a8895c] animate-pulse">
        Loading...
      </span>
    </div>
  );
}

function App() {
  // Get initial page from hash if available
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    return validPages.has(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const containerRef = useGsapReveal<HTMLDivElement>([currentPage]);
  const pageContentRef = useRef<HTMLDivElement>(null);

  // Sync hash changes (browser back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (validPages.has(hash) || hash === 'home' || hash === '') {
        setCurrentPage(hash || 'home');
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

  // GSAP Smooth Page Transition on Page Change
  useGSAP(
    () => {
      // Ensure scroll is at top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (pageContentRef.current) {
        gsap.fromTo(
          pageContentRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
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
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'making':
        return <Making />;
      case 'media':
        return <ActionGallery />;
      case 'partnership':
        return <Partnership />;
      case 'record':
        return <Record />;
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
    <div ref={containerRef} className="min-h-screen bg-[#19140e] flex flex-col justify-between">
      <Nav currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {/* Page Content with GSAP smooth transition and lazy code splitting */}
        <div ref={pageContentRef} key={currentPage}>
          <Suspense fallback={<PageLoadingSkeleton />}>
            {renderContent()}
          </Suspense>
        </div>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
