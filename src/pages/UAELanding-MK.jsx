import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { 
  Building2, LineChart, FileText, Briefcase, Calculator,
  CheckCircle2, Target, ArrowRight, MapPin, Phone, Mail, 
  ChevronRight, Globe, BarChart3, Star, Volume2, VolumeX
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

const UAELanding = () => {
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

  const uaeSchema = {
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
        "name": "United Arab Emirates",
        "item": "https://www.goldenwingsac.com/uae"
      }
    ]
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white pb-0 font-sans">
      <SEO 
        title="Golden Wings UAE | Dubai & Gulf Business Solutions"
        description="Golden Wings offers premium corporate accounting, tax advisory, VAT compliance, and custom business setup solutions in Dubai and across the UAE."
        canonicalUrl="https://www.goldenwingsac.com/uae"
        jsonLD={uaeSchema}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pb-12 pt-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a] z-0"></div>
        
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        />
        {/* Removed left-to-right gradient to avoid making the left side too dark */}
        <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24 mx-auto relative z-20">
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
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] font-black tracking-tight text-white leading-[1.1] mb-6"
            >
              Empowering <br />
              Businesses <br />
              <span className="text-[#FFC000]">Across the UAE</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Professional Accounting, Taxation, Audit, and Business Advisory Services designed to drive compliance, financial clarity, and sustainable growth. Our strategic presence enables us to provide localized expertise and insights, ensuring your business thrives in each market.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-6"
            >
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-[#FFC000] text-[#0a0a0a] font-bold rounded-full hover:scale-105 transition flex items-center justify-center gap-2 text-lg will-change-transform">
                Explore Services <ArrowRight className="w-5 h-5 -rotate-45" />
              </a>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition flex items-center justify-center text-lg">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* 2. Statistics Strip */}
      <section className="py-16 bg-[#0a0a0a] relative z-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10"
          >
            <motion.div variants={fadeInUp}><Counter end={10} suffix="+" label="Years of Experience" /></motion.div>
            <motion.div variants={fadeInUp}><Counter end={500} suffix="+" label="Businesses Supported" /></motion.div>
            <motion.div variants={fadeInUp}><Counter end={100} suffix="%" label="Compliance Focus" /></motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-2 flex items-center gap-2">UAE <span className="text-2xl text-gray-500">& GCC</span></div>
                <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">Market Expertise</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a] relative border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Professional Services</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive financial solutions tailored to meet UAE regulatory standards and optimize your business performance.</motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Calculator className="w-8 h-8"/>, title: "Accounting & Bookkeeping", desc: "Accurate and timely financial record-keeping ensuring complete transparency." },
              { icon: <FileText className="w-8 h-8"/>, title: "Corporate Tax Registration & Filing", desc: "Expert guidance on UAE Corporate Tax compliance and timely filings." },
              { icon: <BarChart3 className="w-8 h-8"/>, title: "VAT Registration & Compliance", desc: "End-to-end VAT solutions from registration to regular return filing." },
              { icon: <CheckCircle2 className="w-8 h-8"/>, title: "Auditing & Assurance Services", desc: "Independent evaluation of financial statements for accuracy and compliance." },
              { icon: <LineChart className="w-8 h-8"/>, title: "Financial Advisory & CFO Services", desc: "Strategic financial planning, analysis, and virtual CFO support." },
              { icon: <Building2 className="w-8 h-8"/>, title: "Business Setup Support", desc: "Seamless mainland and freezone company formation assistance." },
              { icon: <Briefcase className="w-8 h-8"/>, title: "Zoho Books Implementation", desc: "Professional setup and migration to cloud-based accounting systems." },
              { icon: <Target className="w-8 h-8"/>, title: "Payroll & Compliance Solutions", desc: "WPS compliant payroll management and employee benefits structuring." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#0f0f0f] rounded-xl p-8 border border-white/5 hover:border-[#FFC000]/50 hover:-translate-y-2 transition duration-300 group shadow-lg will-change-transform"
              >
                <div className="text-[#FFC000] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors group/link">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Golden Wings Section */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Consultants in UAE" 
                  className="w-full h-[500px] object-cover"
                 loading="lazy" />
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer} 
              initial="initial" 
              whileInView="whileInView" 
              className="w-full lg:w-1/2"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Why UAE Businesses Trust Golden Wings
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  "Experienced Financial Experts",
                  "UAE Regulatory Compliance Specialists",
                  "Personalized Business Solutions",
                  "Technology-Driven Accounting Systems",
                  "Transparent Communication",
                  "Long-Term Strategic Partnership"
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center group">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-4 group-hover:bg-[#D4AF37] transition-colors shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0F0F0F] transition-colors" />
                    </div>
                    <span className="text-lg text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. UAE Expertise Section (Map representation) */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="max-w-3xl mx-auto mb-16">
            <motion.div variants={fadeInUp} className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">Supporting Businesses Throughout the UAE</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
              Delivering reliable financial expertise and compliance-driven solutions across all seven emirates.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView"
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((emirate, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="px-6 py-3 bg-[#151515] border border-white/10 rounded-full text-white font-medium hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition cursor-default"
              >
                {emirate}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Client Process Timeline */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Our Approach to Your Success</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">A streamlined, transparent process designed to integrate seamlessly with your operations.</motion.p>
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
                { step: "01", title: "Consultation", desc: "Initial meeting to understand your business needs." },
                { step: "02", title: "Financial Assessment", desc: "Deep dive into your current financial health & processes." },
                { step: "03", title: "Strategy & Implementation", desc: "Deploying tailored solutions and accounting systems." },
                { step: "04", title: "Ongoing Support & Compliance", desc: "Continuous monitoring, reporting, and regulatory updates." }
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

      {/* 7. Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</motion.h2>
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
                name: "Ahmed Al Mansoori",
                type: "Trading Enterprise, Dubai",
                text: "Golden Wings completely transformed our accounting processes. Their expertise in UAE Corporate Tax and VAT ensured we were 100% compliant before deadlines. Highly professional and trustworthy."
              },
              {
                name: "Sarah Jenkins",
                type: "Tech Startup, Abu Dhabi",
                text: "Setting up our operations in the UAE felt daunting until we partnered with Golden Wings. From Zoho Books implementation to CFO advisory, they have been a critical part of our growth story."
              },
              {
                name: "Mohammed Fayed",
                type: "Logistics Company, Sharjah",
                text: "We rely on them for all our auditing and payroll compliance. Their communication is transparent, and their team is always available to answer our queries. True strategic partners."
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

      {/* 8. Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Strengthen Your Financial Foundation?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Partner with Golden Wings Accounting & Bookkeeping LLC for expert financial solutions that empower sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#0F0F0F] font-bold rounded-lg hover:bg-[#b8952b] transition flex items-center justify-center text-lg shadow-lg">
                Schedule Consultation
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition flex items-center justify-center text-lg">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Contact Information Footer */}
      <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Golden Wings</h3>
              <p className="text-gray-400 text-sm">Accounting & Bookkeeping LLC</p>
              <div className="flex items-start text-gray-400 text-sm mt-6">
                <MapPin className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Office 039-1, Sheikh Mehra Ahmed<br/>
                  Al Ghurair Building,<br/>
                  Deira, Al Qusais 2, Dubai,<br/>
                  United Arab Emirates
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <a href="tel:+971564705971" className="flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                +971 56 470 5971
              </a>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/971564705971" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Golden Wings Accounting & Bookkeeping LLC. All rights reserved.</p>
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

export default UAELanding;
