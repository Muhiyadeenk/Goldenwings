import { motion } from 'framer-motion';
import { 
  Building2, LineChart, FileText, Briefcase, Cpu, Calculator,
  CheckCircle2, Users, Lightbulb, Handshake, Target, ArrowRight,
  MapPin, Phone, Mail, ChevronRight, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const KSALanding = () => {
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
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12">
        {/* Abstract background elements instead of placeholder image for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] z-0"></div>
        <motion.div 
          className="absolute inset-0 opacity-50 bg-[url('/saudi%20arabia.png')] bg-cover bg-center z-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20 pt-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold mb-6 leading-[1.15] tracking-tight"
            >
              Expand Your Business in <br className="hidden md:block" />
              <span className="text-[#ffcc00]">Saudi Arabia</span> <br className="hidden md:block" />
              with Confidence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-normal"
            >
              Golden Wings helps businesses establish, manage, and grow operations in the Kingdom of Saudi Arabia through expert consulting, taxation, accounting, and business setup solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-[#ffcc00] text-black font-bold rounded-full hover:bg-[#e6b800] transition flex items-center justify-center gap-2 text-lg shadow-[0_0_40px_rgba(255,204,0,0.2)] hover:shadow-[0_0_50px_rgba(255,204,0,0.4)]">
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
                Book a Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-24 relative bg-transparent border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Your Trusted Business Partner in <span className="text-gold">KSA</span></motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
              Golden Wings Global Business Solutions brings over 10 years of professional excellence across India, UAE, and now Saudi Arabia. Our mission is to help businesses achieve compliance, financial clarity, operational efficiency, and sustainable growth through expert advisory services.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { num: "8+", label: "Years of Excellence" },
              { num: "3", label: "Countries Presence" },
              { num: "100+", label: "Clients Supported" },
              { num: "360°", label: "Business Solutions" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 text-center group hover:border-gold/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-600 mb-2 group-hover:scale-110 transition-transform will-change-transform">{stat.num}</div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-24 relative bg-transparent">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why Choose Us</motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gold mx-auto rounded-full"></motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: <CheckCircle2 className="w-8 h-8"/>, title: "Integrity", desc: "We uphold the highest standards of ethics and transparency." },
              { icon: <Briefcase className="w-8 h-8"/>, title: "Professionalism", desc: "Experienced consultants delivering quality and precision." },
              { icon: <Lightbulb className="w-8 h-8"/>, title: "Innovation", desc: "Technology-driven financial and compliance solutions." },
              { icon: <Handshake className="w-8 h-8"/>, title: "Client Partnership", desc: "Long-term relationships focused on measurable value." },
              { icon: <Target className="w-8 h-8"/>, title: "Excellence", desc: "Delivering outstanding results and business growth." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-gold/50 transition group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition will-change-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-24 relative bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Services in Saudi Arabia</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to the unique regulatory and business landscape of the KSA.</motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Calculator />,
                title: "Accounting & Financial Management",
                items: ["Bookkeeping", "Financial Statements", "MIS Reporting", "Cash Flow Management", "Budgeting & Forecasting"]
              },
              {
                icon: <FileText />,
                title: "ZATCA Taxation & Compliance",
                items: ["VAT Registration", "VAT Filing", "VAT Review & Reconciliation", "Compliance Monitoring", "Tax Advisory"]
              },
              {
                icon: <LineChart />,
                title: "Corporate Finance & CFO Services",
                items: ["Virtual CFO", "Financial Planning", "Business Performance Analysis", "Management Reporting"]
              },
              {
                icon: <Building2 />,
                title: "Business Setup & Company Formation",
                items: ["Company Registration", "Commercial Licensing", "Regulatory Approvals", "Investor Support"]
              },
              {
                icon: <Users />,
                title: "Business Advisory",
                items: ["Strategic Planning", "Process Improvement", "Financial Restructuring", "Growth Advisory"]
              },
              {
                icon: <Cpu />,
                title: "Technology & E-Solutions",
                items: ["Cloud Accounting", "ERP Integration", "Financial Dashboards", "Business Automation"]
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-gold/30 hover:-translate-y-2 transition duration-300 relative overflow-hidden group will-change-transform"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10 group-hover:bg-gold/10 transition-colors"></div>
                <div className="text-gold w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <ChevronRight className="w-5 h-5 text-gold mr-2 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. KSA Business Setup Process */}
      <section className="py-24 relative bg-transparent overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-20">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">KSA Business Setup Process</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400">A streamlined approach to launching your operations in the Kingdom.</motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10"
            >
              {[
                "Consultation & Requirement Analysis",
                "Business Structure Selection",
                "Company Registration",
                "Licensing & Compliance",
                "Operational Launch",
                "Ongoing Accounting & Tax Support"
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-[#1a1a1a] border-2 border-gold text-gold rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-gold group-hover:text-black transition-colors relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    {idx + 1}
                  </div>
                  <h4 className="text-sm font-semibold tracking-tight text-white group-hover:text-gold transition-colors">{step}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Vision & Mission + 7. Client Benefits */}
      <section className="py-24 relative bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Vision & Mission */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-10 rounded-3xl border border-white/5 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight mb-8 flex items-center"><Target className="text-gold mr-4 w-8 h-8"/> Vision</motion.h2>
                  <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed mb-12 border-l-2 border-gold pl-6 py-2 bg-white/5 rounded-r-lg">
                    To become the most trusted advisory and financial services partner in Saudi Arabia by delivering sustainable growth through integrity, innovation, and intelligent solutions.
                  </motion.p>
                  
                  <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight mb-8 flex items-center"><LineChart className="text-gold mr-4 w-8 h-8"/> Mission</motion.h2>
                  <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed border-l-2 border-gold pl-6 py-2 bg-white/5 rounded-r-lg">
                    Empower businesses with strategic financial management, compliance excellence, and technology-driven advisory services.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Client Benefits */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView">
              <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight mb-10">Client Benefits</motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "100% Compliance Focus",
                  "Faster Business Setup",
                  "Expert Financial Guidance",
                  "Technology-Driven Solutions",
                  "Dedicated Support Team",
                  "Scalable Growth Strategies"
                ].map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center p-6 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-gold/30 hover:bg-[#1f1f1f] transition"
                  >
                    <CheckCircle2 className="text-gold mr-4 shrink-0" />
                    <span className="font-semibold">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global Presence Highlight */}
      <section className="py-20 bg-transparent border-y border-gold/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
         <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="container mx-auto px-6 relative z-10 text-center">
            <motion.div variants={fadeInUp}><Globe className="w-16 h-16 text-gold mx-auto mb-6 opacity-80" /></motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Our Global Expertise</motion.h2>
            
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gold/20 flex-1 min-w-[280px] max-w-sm hover:-translate-y-2 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.1)] will-change-transform">
                <h3 className="text-2xl font-semibold tracking-tight text-gold mb-4">Saudi Arabia</h3>
                <p className="text-gray-300">Business Setup, Corporate Taxation, ZATCA Compliance</p>
              </div>
              <div className="bg-[#111] p-8 rounded-2xl border border-white/10 flex-1 min-w-[280px] max-w-sm">
                <h3 className="text-xl font-semibold tracking-tight text-white mb-4">UAE</h3>
                <p className="text-gray-400">Accounting, VAT Consultancy, CFO Services</p>
              </div>
              <div className="bg-[#111] p-8 rounded-2xl border border-white/10 flex-1 min-w-[280px] max-w-sm">
                <h3 className="text-xl font-semibold tracking-tight text-white mb-4">India</h3>
                <p className="text-gray-400">Accounting, Tax Filing, Financial Advisory, Training Programs</p>
              </div>
            </div>
         </motion.div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-24 relative bg-transparent">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#111]/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-12">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Let's Build Your Success Story in <span className="text-gold">Saudi Arabia</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg">Contact our KSA office today to schedule a consultation with our experts.</motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-gold mb-6 border-b border-white/10 pb-4">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold mr-4 shrink-0 group-hover:bg-gold group-hover:text-black transition-colors">
                        <MapPin />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Golden Wings Global Business Solutions</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Abu Bakr Al Siddiq Road,<br/>Shobra Dist,<br/>At Taif 26522,<br/>Kingdom of Saudi Arabia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold mr-4 shrink-0 group-hover:bg-gold group-hover:text-black transition-colors">
                        <Phone />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Phone</h4>
                        <p className="text-gray-400 text-sm">+966 56 441 8027</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold mr-4 shrink-0 group-hover:bg-gold group-hover:text-black transition-colors">
                        <Mail />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Email</h4>
                        <p className="text-gray-400 text-sm">goldenwingstasks@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col justify-center gap-4">
                <a href="tel:+966564418027" className="w-full py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-xl hover:bg-gold hover:text-black transition flex items-center justify-center gap-2 text-lg">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href="https://wa.me/966564418027" target="_blank" rel="noreferrer" className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebe5d] transition flex items-center justify-center gap-2 text-lg shadow-lg shadow-[#25D366]/20">
                  WhatsApp Us
                </a>
                <a href="mailto:goldenwingstasks@gmail.com" className="w-full py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition flex items-center justify-center gap-2 text-lg">
                  Schedule Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default KSALanding;
