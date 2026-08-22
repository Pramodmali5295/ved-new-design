import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Nav from '@/components/Nav';
import HomeOverview from '@/components/HomeOverview';
import About from '@/components/About';
import Making from '@/components/Making';
import ActionGallery from '@/components/ActionGallery';
import Partnership from '@/components/Partnership';
import Coaches from '@/components/Coaches';
import Believers from '@/components/Believers';
import Record from '@/components/Record';
import RoadAhead from '@/components/RoadAhead';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const validPages = new Set(['home', 'about', 'making', 'media', 'partnership', 'record', 'coaches', 'road', 'contact']);

function App() {
  // Get initial page from hash if available
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    return validPages.has(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const ref = useScrollReveal<HTMLDivElement>(currentPage);

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

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div ref={ref} className="min-h-screen bg-[#19140e] flex flex-col justify-between">
      <Nav currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {/* Page Content with smooth transition */}
        <div key={currentPage} className="animate-page-enter">
          {renderContent()}
        </div>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
