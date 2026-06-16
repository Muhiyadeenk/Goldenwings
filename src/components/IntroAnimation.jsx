import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/images/Golden_Wings_Logo_Vecter_File-removebg-preview.png';

export default function IntroAnimation({ onComplete }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation
    let start = null;
    const duration = 3500; // 3.5 seconds

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progressAmount = Math.min((timestamp - start) / duration, 1);
      setProgress(Math.floor(progressAmount * 100));
      if (progressAmount < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);

    // 4 second fast intro
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800); // Wait for fade out
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden touch-none"
        >
          {/* Central Logo & Text Container */}
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }} // Subtle zoom
            className="relative z-10 flex flex-col items-center text-center mt-[-5vh]"
          >
            {/* Logo */}
            <div className="relative mb-8 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
              >
                <img src={logo} alt="Golden Wings" className="w-56 md:w-80 h-auto object-contain drop-shadow-xl"  loading="lazy" />
              </motion.div>
            </div>

            {/* New Main Text from Image */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="text-white font-bold text-xl md:text-3xl lg:text-4xl mt-6 px-4 max-w-4xl tracking-wide"
            >
              Learn Today. Lead Tomorrow In The World Of <span className="text-[#FFC000]">Accounting</span>
            </motion.p>
          </motion.div>

          {/* Loading Bar at Bottom */}
          <div className="absolute bottom-12 md:bottom-16 left-0 right-0 flex flex-col items-center px-8 w-full">
            <div className="flex justify-between w-full max-w-xs md:max-w-md mb-3 text-white/60 text-[10px] md:text-xs font-mono tracking-widest uppercase">
              <span>Initializing</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full max-w-xs md:max-w-md h-[2px] bg-white/10 overflow-hidden relative rounded-full">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full bg-[#FFC000] shadow-[0_0_10px_rgba(255,192,0,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
