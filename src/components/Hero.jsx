import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import home1 from '../assets/gallery2/home1.png';
import home2 from '../assets/gallery2/home2.png';
import home3 from '../assets/gallery2/home3.png';
import home4 from '../assets/gallery2/home4.png';

import res1 from '../assets/gallery2/res1.png';
import res2 from '../assets/gallery2/res2.png';
import res3 from '../assets/gallery2/res3.png';
import res4 from '../assets/gallery2/res4.png';

const slides = [
  {
    title1: "Be A Professional,",
    title2: "Not An Ordinary",
    text: "Behind Every Good Business, There is a Great Accountant. Build your career with the region's leading educational institute.",
    bg: home1,
    resBg: res1
  },
  {
    title1: "From Learner",
    title2: "to Leader",
    text: "Develop practical expertise that prepares you for real-world success and professional growth.",
    bg: home2,
    resBg: res2
  },
  {
    title1: "Build Skills. Create Opportunities.",
    title2: "Achieve Success.",
    text: "Join a learning experience designed to transform ambition into achievement.",
    bg: home3,
    resBg: res3
  },
  {
    title1: "Be A Professional,",
    title2: "Not An Ordinary",
    text: "Behind Every Good Business, There is a Great Accountant. Build your career with the region's leading educational institute.",
    bg: home4,
    resBg: res4
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const currentSlideIndex = index % slides.length;
  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Image Element */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0, scale: 1.12 }}
            transition={{ 
              opacity: { duration: 1.2 },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full origin-center will-change-transform"
          >
            <picture className="w-full h-full block">
              <source media="(max-width: 767px)" srcSet={currentSlide.resBg} />
              <img 
                src={currentSlide.bg} 
                alt={`Hero Background ${currentSlideIndex + 1}`} 
                className="w-full h-full object-cover object-[center_30%] md:object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
        
        {/* Uniform dark overlay for maximum readability - stronger on mobile */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/55 z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-left w-full h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  {currentSlide.title1}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                    {currentSlide.title2}
                  </span>
                </h1>
                
                <p className="text-white/80 text-lg lg:text-xl mb-10 max-w-2xl">
                  {currentSlide.text}
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
                className="bg-gold hover:bg-gold/90 text-primary px-8 py-4 rounded-full font-bold text-lg transition flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
          
          {/* Empty flex-1 to keep the left-aligned layout balanced as it was originally */}
          <div className="hidden lg:block flex-1"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
