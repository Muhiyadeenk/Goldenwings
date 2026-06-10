import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CountUp = ({ end, duration = 2, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { value: 1000, label: "Active Students" },
    { value: 3500, label: "Enrolled" },
    { value: 100, label: "Teachers" },
    { value: 10, label: "Years" }
  ];

  return (
    <section className="py-4 relative z-20">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="bg-white/5 rounded-3xl border-2 border-transparent animate-border-glow translate-y-6 w-full shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 text-center p-6 md:p-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="p-2 md:p-4"
              >
                <h3 className="text-4xl lg:text-6xl font-bold text-gold mb-2 drop-shadow-[0_0_15px_rgba(255,192,0,0.4)]">
                  <CountUp end={stat.value} />
                </h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs lg:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
