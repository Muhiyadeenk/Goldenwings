import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/images/Golden_Wings_Logo_Vecter_File-removebg-preview.png';

export default function IntroAnimation({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
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
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden touch-none"
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
              className="text-black font-bold text-xl md:text-3xl lg:text-4xl mt-6 px-4 max-w-4xl tracking-wide"
            >
              Learn Today. Lead Tomorrow In The World Of <span className="text-[#FFC000]">Accounting</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
