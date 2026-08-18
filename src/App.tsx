import { useScrollReveal } from '@/hooks/useScrollReveal';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Making from '@/components/Making';
import ActionGallery from '@/components/ActionGallery';
import Partnership from '@/components/Partnership';
import Coaches from '@/components/Coaches';
import Believers from '@/components/Believers';
import Record from '@/components/Record';
import RoadAhead from '@/components/RoadAhead';
import Footer from '@/components/Footer';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-[#f5f1ea]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Making />
        <ActionGallery />
        <Partnership />
        <Coaches />
        <Believers />
        <Record />
        <RoadAhead />
      </main>
      <Footer />
    </div>
  );
}

export default App;
