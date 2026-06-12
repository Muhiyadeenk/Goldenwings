import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalPresence = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary" id="global-presence">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase mb-4 text-xl lg:text-2xl"
          >
            Explore
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            A Breakdown Of Our Global Presence To <br className="hidden lg:block" /> Scale Your Business Growth
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* KSA Card */}
          <Link to="/ksa">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
            >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent z-10" />
            
            <img 
              src="/ksa_cityscape.png" 
              alt="KSA" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
             loading="lazy" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-8 text-center pb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">KSA</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                Delve into our realm of business setup, incorporation, formation and business consulting services in Saudi Arabia.
              </p>
              
              <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-primary group-hover:border-gold transition duration-300 pointer-events-none">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            </motion.div>
          </Link>

          {/* UAE Card */}
          <Link to="/uae">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent z-10" />
              
              <img 
                src="/uae_cityscape.png" 
                alt="UAE" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
               loading="lazy" />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-8 text-center pb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">UAE</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  Our practical insights and strategies help you with the entire spectrum of business management solutions in the UAE.
                </p>
                
                <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-primary group-hover:border-gold transition duration-300 pointer-events-none">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </Link>

          {/* India Card */}
          <a href="#services">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent z-10" />
              
              <img 
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop" 
                alt="India" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
               loading="lazy" />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-8 text-center pb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">INDIA</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  Discover our comprehensive business services and career-focused courses designed to help professionals and organizations achieve sustainable growth and success across India.
                </p>
                
                <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-primary group-hover:border-gold transition duration-300 pointer-events-none">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
