import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Alumni = () => {
  const alumniMembers = [
    {
      name: "Rohan Sharma",
      role: "Tax Analyst at KPMG",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Neha Patel",
      role: "Senior Accountant at EY",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Aditya Sen",
      role: "Financial Auditor at PwC",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Meera Iyer",
      role: "Corporate Finance Consultant at Deloitte",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Kabir Malhotra",
      role: "Ledger Specialist at Al-Mansoori Group (UAE)",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Aisha Rahman",
      role: "Tax Manager at BDO KSA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Sameer Joshi",
      role: "Accounts Manager at Zoho Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Anjali Nair",
      role: "Budgeting Specialist at Riyadh Bank",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-primary min-h-screen" id="alumni">
      {/* Background Decorative Light Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Alumni Header Grid matching user design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          
          {/* Left Column of Alumni Header */}
          <div className="lg:col-span-6">
            <motion.h4 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.2em] text-sm lg:text-base uppercase mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> ALUMNI
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Diverse And Precise Alumni Shaping Financial Futures
            </motion.h2>
          </div>

          {/* Right Column of Alumni Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:pt-8"
          >
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
              Our outstanding alumni bring together a wide range of precise technical expertise, enabling top tier corporate organizations worldwide to tackle their most complex financial challenges with confidence.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Strategic Financial Planners
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Collaborative Accounting Leaders
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Ethical and Detail-Oriented Professionals
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 8 Cards Grid with sleek glassmorphic portrait designs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative py-8">
          {alumniMembers.map((alumnus, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1, 
                y: -12, 
                zIndex: 10,
                transition: { type: "spring", stiffness: 350, damping: 15 }
              }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] transition-all duration-300 shadow-md flex flex-col h-[400px] cursor-pointer"
            >
              {/* Alumnus Portrait Image Wrapper */}
              <div className="relative w-full h-[70%] overflow-hidden bg-white/5">
                <img 
                  src={alumnus.image} 
                  alt={alumnus.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Alumnus Info details */}
              <div className="p-6 flex-1 flex flex-col justify-end bg-gradient-to-b from-transparent to-[#0d0d0d]">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                  {alumnus.name}
                </h3>
                <p className="text-white/60 text-sm font-medium">
                  {alumnus.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exact bottom right decorative arrow button from the screenshot */}
        <div className="flex justify-end mt-4">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#e29c1d" }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-primary font-bold shadow-lg shadow-gold/20 hover:shadow-gold/45 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Alumni;
