import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Building2, LineChart, FileText, Briefcase, Calculator,
  CheckCircle2, Target, ArrowRight, MapPin, Phone, Mail, 
  ChevronRight, Globe, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Counter = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-extrabold text-gold mb-2">{count}{suffix}</div>
      <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">{label}</div>
    </div>
  );
};

const OmanLanding = () => {
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

  const omanSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.goldenwingsac.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Oman",
        "item": "https://www.goldenwingsac.com/oman"
      }
    ]
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white pb-0 font-sans">
      <SEO 
        title="Golden Wings Oman | Accounting, Tax & Business Solutions"
        description="Golden Wings offers premium corporate accounting, tax advisory, VAT compliance, and custom business setup solutions in Muscat and across the Sultanate of Oman."
        canonicalUrl="https://www.goldenwingsac.com/oman"
        jsonLD={omanSchema}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pb-12 pt-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a] z-0"></div>
        
        {/* Background Image - Sultan Qaboos Grand Mosque Muscat Oman */}
        <motion.div 
          className="absolute inset-0 opacity-35 bg-[url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center z-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        />
        
        <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24 mx-auto relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold tracking-wider uppercase mb-6"
            >
              Golden Wings Global Presence
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold mb-6 leading-[1.15] tracking-tight"
            >
              Expand Your Business in <br />
              <span className="text-[#FFC000]">Oman</span> with Precision
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Unlock commercial potential in the Sultanate of Oman. We deliver end-to-end solutions for corporate setup, accounting, VAT compliance, and corporate tax consulting to accelerate your growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-[#FFC000] text-black font-extrabold rounded-full hover:bg-yellow-400 transition flex items-center justify-center gap-2 text-lg shadow-[0_0_30px_rgba(255,192,0,0.3)] hover:shadow-[0_0_40px_rgba(255,192,0,0.5)]">
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-extrabold rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-16 bg-[#0B0B0C] border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={100} label="Global Clients" suffix="+" />
            <Counter end={10} label="Years of Excellence" suffix="+" />
            <Counter end={4} label="Country Presence" />
            <Counter end={360} label="Degree Solutions" suffix="°" />
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-24 relative overflow-hidden bg-[#0A0A0B]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Your Strategic Partner for <span className="text-gold">Omani Market</span> Growth
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Golden Wings Business Solutions is a leading corporate advisory and accounting firm in the GCC region. We leverage local insights and global standards to help business owners, multinationals, and SMEs establish robust corporate foundations in Oman.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                From choosing the right legal entity in Muscat to managing complex VAT and corporate tax filings, our team of qualified accountants and advisors manages compliance so you can focus on core business operations.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-bold hover:text-yellow-400 transition-colors">
                  Learn about our expertise <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/3] bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Oman Mountain and Coast Landscape" 
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-24 bg-[#0F0F10] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Services in Oman</h2>
            <div className="w-20 h-1 bg-[#FFC000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Providing end-to-end professional support tailored to the Omani tax framework and business ecosystem.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Calculator className="w-6 h-6 text-gold" />,
                title: "Accounting & Bookkeeping",
                desc: "Accurate financial records complying with IFRS. We cover monthly bookkeeping, ledger maintenance, and generation of management reports (MIS)."
              },
              {
                icon: <FileText className="w-6 h-6 text-gold" />,
                title: "Oman Tax & VAT Compliance",
                desc: "Expert guidance through the Oman Tax Authority requirements: VAT returns filing, 15% Corporate Tax compliance, withholding tax, and corporate tax registration."
              },
              {
                icon: <Building2 className="w-6 h-6 text-gold" />,
                title: "Business Setup & Licensing",
                desc: "Seamless company incorporation in Oman. We assist with Ministry of Commerce, Industry and Investment Promotion (MOCIIP) approvals, commercial registry (CR), and chamber of commerce licenses."
              },
              {
                icon: <LineChart className="w-6 h-6 text-gold" />,
                title: "CFO & Corporate Advisory",
                desc: "Strategic advisory to optimize capital structure, improve margins, manage working capital, and guide business planning for long-term growth."
              },
              {
                icon: <Target className="w-6 h-6 text-gold" />,
                title: "Internal Audit & Risk Management",
                desc: "Evaluate internal controls, identify operational inefficiencies, prevent fraud, and ensure robust financial reporting controls."
              },
              {
                icon: <Globe className="w-6 h-6 text-gold" />,
                title: "GCC Compliance & PRO Services",
                desc: "Comprehensive support for cross-border operations, municipal approvals, visa processing support, and local partner agreements."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className="bg-[#151516] p-8 rounded-2xl border border-white/5 hover:border-[#FFC000]/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-24 bg-[#0A0A0B] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Launch Process in Oman</h2>
            <div className="w-20 h-1 bg-[#FFC000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              A structured road map to establishing your business presence and compliance framework in Oman.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 hidden md:block"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
            >
              {[
                { step: "01", title: "Free Consultation", desc: "Understand your setup ideas, target market, and structural needs." },
                { step: "02", title: "Structure & CR Setup", desc: "Acquire your Commercial Registry (CR) and configure ownership." },
                { step: "03", title: "Licensing & Tax Reg", desc: "Obtain municipal and tax credentials, including VAT and Corporate Tax." },
                { step: "04", title: "Accounting Setup", desc: "Set up cloud accounting software, compliance systems, and launch." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center bg-[#0a0a0a] p-4">
                  <div className="w-16 h-16 rounded-full bg-[#0F0F0F] border-2 border-[#FFC000] flex items-center justify-center text-xl font-bold text-[#FFC000] mb-6 shadow-[0_0_15px_rgba(255,192,0,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Tariq Al Said",
                type: "Trading & Logistics Co., Muscat",
                text: "Golden Wings provided exceptional support during our VAT registration and initial audits. Their knowledge of Omani tax laws is unmatched. They saved us significant time and cost."
              },
              {
                name: "John Miller",
                type: "GCC Retail Group",
                text: "Establishing our branch in Muscat was effortless thanks to Golden Wings. Their team handled our corporate tax registration, municipal approvals, and monthly bookkeeping perfectly."
              },
              {
                name: "Fatma Al Balushi",
                type: "Construction Solutions",
                text: "We rely on Golden Wings for payroll accounting and CFO advisory. The level of precision, regular reporting, and responsiveness they bring is outstanding."
              }
            ].map((testimonial, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#151515] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <div className="flex gap-1 text-[#D4AF37] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-8 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-[#D4AF37] mt-1">{testimonial.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Establish Your Business in Oman?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Partner with Golden Wings for reliable corporate services and financial solutions tailored to the Sultanate of Oman.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#0F0F0F] font-bold rounded-lg hover:bg-[#b8952b] transition flex items-center justify-center text-lg shadow-lg">
                Schedule Consultation
              </Link>
              <a href="mailto:goldenwingsgcc1@gmail.com" className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition flex items-center justify-center text-lg">
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Contact Information Footer */}
      <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Golden Wings</h3>
              <p className="text-gray-400 text-sm">Corporate Services & Tax Solutions</p>
              <div className="flex items-start text-gray-400 text-sm mt-6">
                <MapPin className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Muscat, Oman
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              {/* Default to GCC contact info */}
              <a href="tel:+971564705971" className="flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                +971 56 470 5971
              </a>
              <a href="tel:+971563117500" className="flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                +971 56 311 7500
              </a>
              <a href="mailto:goldenwingsgcc1@gmail.com" className="flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors mt-4">
                <Mail className="w-5 h-5 mr-3 text-[#D4AF37]" />
                goldenwingsgcc1@gmail.com
              </a>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/971564705971" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:goldenwingsgcc1@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Golden Wings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OmanLanding;
