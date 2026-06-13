import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, UserCheck, Briefcase, Compass, Lightbulb, Rocket, ArrowUpRight } from 'lucide-react';

function TimelineStep({ step }) {
  const wrapperRef = useRef(null);
  
  // Track scroll progress for this specific card using Framer Motion (but native scroll)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 85%", "center 45%"] // Circle starts filling when top of card hits 85% of screen height, completes at 45%
  });

  // Track the progress of the card being covered by the next one
  const { scrollYProgress: coverProgress } = useScroll({
    target: wrapperRef,
    offset: ["end 300px", "end 120px"] 
  });

  const cardScale = useTransform(coverProgress, [0, 1], [1, 0.85]);
  const cardOpacity = useTransform(coverProgress, [0, 1], [1, 0]);
  const cardFilter = useTransform(coverProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  const Icon = step.icon;

  return (
    <div ref={wrapperRef} className="relative w-full pb-[30vh] md:pb-[40vh]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-row gap-4 md:gap-8 relative group sticky top-24 md:top-32 lg:top-40"
      >
      {/* Icon Node (Left Side Sign) */}
      <motion.div 
        className="flex-shrink-0 relative z-10"
        style={{ opacity: cardOpacity }}
      >
        <div className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center -ml-[48px] md:-ml-[88px] mt-6 md:mt-10 bg-[#0B0B0B] rounded-full">
          
          {/* Framer Motion SVG Circle Animation */}
          <figure className="absolute inset-0 m-0 p-0 transform -rotate-90">
              <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  className="overflow-visible"
              >
                  {/* Background Track Circle */}
                  <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FFC000"
                      strokeWidth="3"
                      className="opacity-10"
                  />
                  {/* Animated Progress Indicator */}
                  <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FFC000"
                      strokeWidth="5"
                      strokeLinecap="round"
                      style={{
                          pathLength: scrollYProgress,
                      }}
                      className="drop-shadow-[0_0_8px_rgba(255,192,0,0.8)]"
                  />
              </svg>
          </figure>

          {/* Inner Icon */}
          <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.9)] relative z-10 transition-colors duration-500 group-hover:bg-[#FFC000]">
            <Icon className="w-4 h-4 md:w-7 md:h-7 text-[#FFC000] group-hover:text-black transition-colors duration-500" />
          </div>

        </div>
      </motion.div>

      {/* Content Box */}
      <motion.div 
        className="flex-1 origin-top"
        style={{ scale: cardScale, opacity: cardOpacity, filter: cardFilter }}
      >
        <div className="bg-black rounded-2xl p-6 md:p-14 border border-white/5 group-hover:border-[#FFC000]/80 transition duration-500 hover:shadow-[0_10px_40px_rgba(255,192,0,0.15)] relative overflow-hidden group-hover:-translate-y-1 min-h-[200px] md:min-h-[280px] flex flex-col justify-center will-change-transform">
          {/* Subtle hover glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC000]/0 to-[#FFC000]/0 group-hover:from-[#FFC000]/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-3xl font-extrabold text-white/60 group-hover:text-white transition-colors duration-500 mb-2 md:mb-4">
              {step.title}
            </h3>
            <p className="text-white/40 group-hover:text-white/80 transition-colors duration-500 leading-relaxed text-sm md:text-lg">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Bootcamp() {
  const steps = [
    {
      id: 1,
      title: "Foundation (Week 1 - Week 4)",
      description: "Learn the fundamentals of accounting, basic principles, terminology, and how to record financial transactions accurately.",
      icon: Layers
    },
    {
      id: 2,
      title: "Onboarding (Week 5 - Week 12)",
      description: "Get introduced to accounting software tools, industry practices, and understand the role of accountants in real-world businesses.",
      icon: UserCheck
    },
    {
      id: 3,
      title: "Hands-On Real Accounts (Week 13 - Week 20)",
      description: "Work on real or simulated business accounts. Apply bookkeeping concepts to journal entries, ledgers, and trial balances.",
      icon: Briefcase
    },
    {
      id: 4,
      title: "Diving Deep (Week 21 - Week 28)",
      description: "Explore taxation, financial statements, budgeting, and auditing in depth. Gain insights into compliance and analysis.",
      icon: Compass
    },
    {
      id: 5,
      title: "Creativity & Teamwork (Week 29 - Week 49)",
      description: "Collaborate on financial planning projects. Develop business strategies using accounting data in teams.",
      icon: Lightbulb
    },
    {
      id: 6,
      title: "Takeoff (Week 50 - Week 52)",
      description: "Prepare for job placements with resume building, mock interviews, and professional communication training.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-clip relative bg-[#0B0B0B]">
      
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        
        {/* Header (No background yellow, no Bootcamp line) */}
        <div className="mb-20 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[#FFC000] text-xl font-bold tracking-widest uppercase mb-6">
              Boot Camp
            </h1>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Your Journey to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC000] via-[#FFD700] to-[#FFC000]">
              Professional Excellence
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed"
          >
            A comprehensive 52-week program designed to take you from fundamentals to a fully equipped, career-ready accounting professional.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="relative pl-12 md:pl-24 mt-16">
          
          {/* Main Vertical Track Line */}
          <div className="absolute left-[24px] md:left-[48px] top-6 bottom-20 w-[2px] bg-gradient-to-b from-[#FFC000]/50 via-[#FFC000]/20 to-transparent shadow-[0_0_10px_rgba(255,192,0,0.2)]"></div>

          <div className="flex flex-col relative z-10 gap-2">
            {steps.map((step) => (
              <TimelineStep key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 ml-8 md:ml-16"
        >
          <button 
            onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFC000] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFC000] text-black font-extrabold text-[16px] tracking-wide px-10 py-4 rounded-full transition duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,192,0,0.3)] will-change-transform"
          >
            Register <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
