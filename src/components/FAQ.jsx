import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What Is Golden Wings And What Courses Do You Offer?",
    answer: "Golden Wings is a premier educational institution specializing in finance, corporate accounting, and taxation. We offer comprehensive courses like MDGAT, DCPCA, and specialized skill training for high school students."
  },
  {
    question: "What Sets Golden Wings Apart From Other Training Institutes?",
    answer: "We focus on value-based, practical learning. Our courses are designed by industry experts, ensuring that you gain hands-on experience with modern tools like Tally, ZohoBooks, and actual GCC tax frameworks."
  },
  {
    question: "How Can Golden Wings Help My Career In Accounting And Taxation?",
    answer: "Our curriculum is directly aligned with the dynamic demands of the corporate marketplace. We provide end-to-end guidance, from deep foundational knowledge to placement support, helping you secure roles in top firms."
  },
  {
    question: "Are The Certifications Recognized In GCC Countries?",
    answer: "Yes, our programs, especially the Master Diploma in Gulf Accounting & Taxation (MDGAT), are specifically tailored to meet the standards and practical requirements of the GCC market, including VAT mechanisms and corporate tax laws."
  },
  {
    question: "Do You Offer Placement Support After Course Completion?",
    answer: "Absolutely. We provide comprehensive support for our students, including interview preparation, resume building, and direct placement assistance through our network of corporate partners."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#000000] border-t border-white/5 relative z-10 font-sans">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">
              FAQ
            </h4>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-tight">
              Frequently Asked<br /> Questions
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-white/10 ${index === 0 ? 'border-t' : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start text-left py-8 focus:outline-none group"
                  >
                    <span className="text-[#D4AF37] font-bold text-xl mr-6 md:mr-8 mt-1 w-8 shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors flex-grow pr-8 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-white shrink-0 mt-1">
                      {isOpen ? <Minus size={24} className="text-[#D4AF37]" /> : <Plus size={24} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-14 md:pl-[4.5rem] pr-8 text-gray-400 text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
