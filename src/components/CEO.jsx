import { motion } from 'framer-motion';

const CEO = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="ceo">

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT — Text content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
              A Message From Our CEO
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Hai, I am <span className="text-gold">Sharafudheen k</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-4">
              At Golden Wings, we provide practical, skill-based education that leads to real careers. For over eight years, we've helped students grow into trusted professionals in accounting, taxation, and business. Our focus is simple: teach what matters, train with real tools, and prepare every learner to succeed in jobs or start their own journey.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              We also help students build leadership qualities, like confidence, communication, and critical thinking, so they can lead teams or businesses in the future. Golden Wings is about more than just certificates — it's about creating professionals who are ready to lead, serve, and grow.
            </p>

            <p className="text-white/50 text-sm mb-1">Are you still not convinced?</p>
            <p className="text-gold font-semibold text-sm mb-8 italic">Our results will speak for itself.</p>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 w-fit hover:border-gold/30 hover:bg-gold/5 transition duration-300 group">
              <div className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                Feel free to reach out to me on LinkedIn if you need more information.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — CEO Image */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative rounded-[2rem] overflow-hidden border border-gold/20 shadow-[0_0_40px_rgba(255,192,0,0.12)] w-full max-w-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/sharafu.png"
                alt="Sharafudheen K — CEO Golden Wings"
                className="w-full h-auto object-cover"
               loading="lazy" />
              {/* Bottom name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
                <p className="text-gold font-bold text-base">Sharafudheen K</p>
                <p className="text-white/60 text-xs">Founder & CEO, Golden Wings</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CEO;
