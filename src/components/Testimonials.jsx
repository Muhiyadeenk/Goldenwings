import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Golden Wings Has Been With Us Throughout The Phase Of Integrating And Adapting Business To The Dynamic Marketplace, With End-To-End Business Consultation Services.",
    author: "Usman Tariq",
    location: "Riyadh, KSA"
  },
  {
    quote: "Their team provided exceptional support and technical expertise that allowed us to scale operations seamlessly. Highly recommended for any enterprise.",
    author: "Sarah Al-Fassi",
    location: "Jeddah, KSA"
  },
  {
    quote: "A truly transformative partnership. The insights and strategies delivered have fundamentally improved our bottom line and market positioning.",
    author: "Ahmed Bin Talal",
    location: "Dubai, UAE"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#000000] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              What Our Clients<br /> Say About Us
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Let's hear from our clients, the core of whatever we commit.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/3 relative min-h-[400px] sm:min-h-[300px] lg:min-h-[350px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full flex-grow"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug mb-8 flex-grow">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
                  <div>
                    <h4 className="text-[#D4AF37] text-xl font-bold">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-400 mt-1">{testimonials[currentIndex].location}</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={prev}
                      className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-colors duration-300 flex items-center justify-center group"
                    >
                      <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform will-change-transform" />
                    </button>
                    <button 
                      onClick={next}
                      className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-colors duration-300 flex items-center justify-center group"
                    >
                      <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
