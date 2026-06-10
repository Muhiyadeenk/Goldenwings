import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="about">
      {/* Background Decorative Light Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Existing About Section (Top Row) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Side: WHY GOLDEN WINGS? */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-4 lg:col-span-3 md:text-right pt-2 lg:pt-4 xl:pt-5"
          >
            <h4 className="text-gold font-bold tracking-[0.2em] text-sm lg:text-base uppercase">
              WHY GOLDEN WINGS?
            </h4>
          </motion.div>

          {/* Right Side: Heading and Paragraph */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-8 lg:col-span-9"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 text-white leading-tight">
              A Legacy of Eight Years in Transformative Education
            </h2>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              An educational institution serves as the foundation for lifelong learning, shaping not only the minds but also the character of its students. It's a place where ideas are born, creativity is nurtured, and potential is unlocked. As Nelson Mandela once said, 'Education is the most powerful weapon which you can use to change the world.' At our institution, we are committed to providing an environment that inspires growth, fosters innovation, and prepares students to face the challenges of tomorrow with confidence and resilience. Here, education is not just about knowledge, but about empowering individuals to make a lasting impact on society.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
