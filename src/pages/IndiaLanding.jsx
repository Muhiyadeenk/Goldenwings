import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  Building2, MonitorSmartphone, Megaphone, Target, 
  Code, BarChart, PenTool, BrainCircuit, Calculator,
  ArrowRight, MapPin, Phone, Mail, Globe
} from 'lucide-react';

const IndiaLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-0 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pb-12 pt-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-black tracking-tight text-white leading-[1.05] mb-8"
            >
              Empowering <br />
              Professionals <br />
              <span className="text-[#FFC000]">Across India</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Explore our professional business services and industry-focused training programs designed to empower individuals and organizations across India. From expert consulting solutions to career-oriented courses, we help drive growth, innovation, and success.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-6"
            >
              <a href="#courses" className="w-full sm:w-auto px-8 py-4 bg-[#FFC000] text-[#0a0a0a] font-bold rounded-full hover:scale-105 transition flex items-center justify-center gap-2 text-lg will-change-transform">
                Explore Courses <ArrowRight className="w-5 h-5 -rotate-45" />
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 text-white font-bold rounded-full hover:bg-white/5 transition flex items-center justify-center text-lg">
                View Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Professional Business Services</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tailored consulting and operational solutions to accelerate your organization's growth.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Building2 className="w-8 h-8"/>, title: "Business Consulting", desc: "Strategic advisory to help organizations navigate market complexities and scale." },
              { icon: <MonitorSmartphone className="w-8 h-8"/>, title: "IT Solutions", desc: "Robust technology implementations to streamline operations and enhance productivity." },
              { icon: <Megaphone className="w-8 h-8"/>, title: "Digital Marketing", desc: "Data-driven campaigns to elevate your brand presence and drive customer acquisition." },
              { icon: <Target className="w-8 h-8"/>, title: "Career Guidance", desc: "Expert mentorship linking organizational talent needs with individual potential." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#0f0f0f] rounded-xl p-8 border border-white/5 hover:border-[#FFC000]/50 hover:-translate-y-2 transition duration-300 group shadow-lg flex flex-col h-full will-change-transform"
              >
                <div className="text-[#FFC000] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[#FFC000] hover:text-white transition-colors group/link mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Courses Section */}
      <section id="courses" className="py-24 bg-[#0a0a0a] relative border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Industry-Focused Training</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
              Equipping the next generation of professionals with the skills that modern industries demand.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <Code className="w-8 h-8"/>, title: "Full Stack Development", desc: "Master front-end and back-end technologies to build scalable web applications." },
              { icon: <BarChart className="w-8 h-8"/>, title: "Data Analytics", desc: "Learn to interpret complex datasets and drive strategic business decisions." },
              { icon: <Megaphone className="w-8 h-8"/>, title: "Digital Marketing", desc: "Comprehensive training in SEO, SEM, social media, and content strategy." },
              { icon: <PenTool className="w-8 h-8"/>, title: "UI/UX Design", desc: "Design intuitive and engaging user experiences for digital products." },
              { icon: <BrainCircuit className="w-8 h-8"/>, title: "AI & Machine Learning", desc: "Dive into the future of technology with practical AI modeling and deployment." },
              { icon: <Calculator className="w-8 h-8"/>, title: "Professional Accounting", desc: "Practical training in modern accounting systems, taxation, and financial reporting." }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#0f0f0f] rounded-xl p-8 border border-white/5 hover:border-[#FFC000]/50 hover:-translate-y-2 transition duration-300 group shadow-lg will-change-transform"
              >
                <div className="text-[#FFC000] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{course.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[#FFC000] hover:text-white transition-colors group/link">
                  Enroll Now <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career and Business with Golden Wings India</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Unlock growth opportunities through our expert services and industry-driven learning programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#courses" className="w-full sm:w-auto px-8 py-4 bg-[#FFC000] text-[#0a0a0a] font-bold rounded-full hover:scale-105 transition flex items-center justify-center text-lg shadow-lg will-change-transform">
                Explore Courses
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition flex items-center justify-center text-lg">
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Contact Information Footer */}
      <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Golden Wings</h3>
              <p className="text-gray-400 text-sm">India Regional Office</p>
              <div className="flex items-start text-gray-400 text-sm mt-6">
                <Globe className="w-5 h-5 text-[#FFC000] mr-3 shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Driving growth, innovation,<br/>
                  and success across India.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <a href="tel:+919061515616" className="flex items-center text-gray-400 hover:text-[#FFC000] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#FFC000]" />
                +91 9061 515 616
              </a>
              <a href="tel:+916235815616" className="flex items-center text-gray-400 hover:text-[#FFC000] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#FFC000]" />
                +91 6235 815 616
              </a>
              <a href="mailto:goldenwingsgcc1@gmail.com" className="flex items-center text-gray-400 hover:text-[#FFC000] transition-colors mt-4">
                <Mail className="w-5 h-5 mr-3 text-[#FFC000]" />
                goldenwingsgcc1@gmail.com
              </a>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/919061515616" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC000] hover:text-[#0a0a0a] transition">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC000] hover:text-[#0a0a0a] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                <a href="mailto:goldenwingsgcc1@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC000] hover:text-[#0a0a0a] transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Golden Wings Education & Services. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndiaLanding;
