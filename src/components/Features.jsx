import { motion } from 'framer-motion';
import { HeartHandshake, Building2, UserCheck, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Support for Students",
      desc: "Comprehensive guidance from admission to placement."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Great Facilities",
      desc: "State-of-the-art infrastructure for practical learning."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Certified Staffs",
      desc: "Learn from industry experts and experienced CA professionals."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Value Based Learning",
      desc: "Focus on ethics, practical application, and career readiness."
    }
  ];

  return (
    <section className="py-24 relative font-sans">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-bold tracking-widest uppercase mb-2 text-sm"
        >
          Why Choose Us
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black tracking-tighter mb-16"
        >
          What Makes Us Stand Out
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-gold/10 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(255,192,0,0.15)] transition duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6 relative group-hover:bg-gold shadow-lg group-hover:shadow-gold/50 transition duration-300">
                  <div className="absolute inset-0 rounded-full border border-gold/30 scale-110 group-hover:scale-100 transition-transform duration-300 will-change-transform"></div>
                  <div className="z-10 text-white group-hover:text-primary transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black tracking-tight mb-4 text-white group-hover:text-gold transition-colors duration-300">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
