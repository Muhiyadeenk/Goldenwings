import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

import backgroundVideoDesktop from '../assets/IMG_7182.MOV';
import backgroundVideoMobile from '../assets/responsive.MOV';

const taglines = [
  {
    id: 1,
    title1: "Be A Professional,",
    title2: "Not An Ordinary",
    text: "Behind Every Good Business, There is a Great Accountant. Build your career with the region's leading educational institute."
  },
  {
    id: 2,
    title1: "From Learner",
    title2: "to Leader",
    text: "Develop practical expertise that prepares you for real-world success and professional growth."
  },
  {
    id: 3,
    title1: "Build Skills. Create Opportunities.",
    title2: "Achieve Success.",
    text: "Join a learning experience designed to transform ambition into achievement."
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    if (desktopVideoRef.current) desktopVideoRef.current.muted = isMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Video Element */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Video */}
        <video 
          ref={desktopVideoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src={backgroundVideoDesktop} type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video 
          ref={mobileVideoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src={backgroundVideoMobile} type="video/mp4" />
        </video>
        
        {/* Uniform dark overlay for maximum readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-left w-full h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  {taglines[currentIndex].title1}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                    {taglines[currentIndex].title2}
                  </span>
                </h1>
                
                <p className="text-white/80 text-lg lg:text-xl mb-10 max-w-2xl">
                  {taglines[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button 
                onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                className="bg-gold hover:bg-gold/90 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
          
          {/* Empty flex-1 to keep the left-aligned layout balanced as it was originally */}
          <div className="hidden lg:block flex-1"></div>
        </div>
      </div>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-10 left-6 md:left-12 z-50">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 md:w-14 md:h-14 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          title={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
        </button>
      </div>

    </section>
  );
};

export default Hero;
