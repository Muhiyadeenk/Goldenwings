import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import HireFromUs from './pages/HireFromUs';
import Bootcamp from './pages/Bootcamp';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import SeatBookingModal from './components/SeatBookingModal';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import IntroAnimation from './components/IntroAnimation';
import KSALanding from './pages/KSALanding';
import UAELanding from './pages/UAELanding';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Only initialize smooth scroll after intro is finished so they don't scroll the page in the background
    if (!introFinished) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [introFinished]);

  return (
    <Router>
      {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}
      
      {/* Vertical Scroll Track */}
      <div className="fixed top-0 right-0 bottom-0 w-1 sm:w-1.5 bg-white/5 z-[9998] backdrop-blur-sm" />
      
      {/* Animated Vertical Scroll Progress */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-1 sm:w-1.5 bg-white/90 origin-top z-[9999] shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-b-full"
        style={{ scaleY }}
      />
      
      <div className={`min-h-screen flex flex-col font-sans bg-primary text-white ${!introFinished ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <SeatBookingModal />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hire" element={<HireFromUs />} />
            <Route path="/ksa" element={<KSALanding />} />
            <Route path="/uae" element={<UAELanding />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
