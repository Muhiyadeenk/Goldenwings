import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, Monitor, Receipt, Calculator, Rocket, Megaphone, X, Calendar, ArrowRight } from 'lucide-react';

const services = [
  {
    id: "setup",
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: "Company Formation & Business Setup",
    features: [
      "Business structure advisory (Pvt Ltd, LLP, Proprietorship, Freezone, Mainland)",
      "Company registration and licensing in India, UAE, and Saudi Arabia",
      "Assistance with MISA, CR, DED, Freezone applications",
      "MOA drafting, local sponsor arrangements, and bank account support"
    ]
  },
  {
    id: "accounting",
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "Accounting System Implementation",
    features: [
      "Setting up accounting systems for new and growing businesses",
      "Tally, Zoho Books, QuickBooks & cloud ERP configuration",
      "Chart of Accounts creation, GST/VAT setup, and automations",
      "Staff training and software support"
    ]
  },
  {
    id: "reporting",
    icon: <Receipt className="w-8 h-8 text-primary" />,
    title: "Monthly Accounting & Reporting",
    features: [
      "Bookkeeping and ledger maintenance",
      "Financial statement preparation (P&L, Balance Sheet, Cash Flow)",
      "MIS reports for management decision-making",
      "Remote and on-site accounting service models"
    ]
  },
  {
    id: "taxation",
    icon: <Calculator className="w-8 h-8 text-primary" />,
    title: "Taxation & Compliance Advisory",
    features: [
      "GST, Income Tax, ROC compliance (India)",
      "VAT and Corporate Tax compliance (UAE & KSA)",
      "ZATCA E-invoicing and tax registration",
      "Periodic tax planning and filing strategy"
    ]
  },
  {
    id: "startup",
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Startup & SME Support",
    features: [
      "Business model planning and financial structuring",
      "Documentation for loans, tenders, and funding",
      "Ongoing advisory for regulatory compliance and growth planning"
    ]
  },
  {
    id: "marketing",
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Digital Marketing",
    features: [
      "SEO & content strategy",
      "Social media campaigns",
      "Branding & awareness",
      "Email marketing"
    ]
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.2em] text-lg lg:text-2xl uppercase mb-6"
          >
            SERVICES
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
          >
            Our Business Consulting Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedService(service)}
                className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:bg-[#151515] hover:border-[#FFC000]/50 hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative flex flex-col h-full shadow-lg"
              >
                <div className="text-[#FFC000] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight group-hover:text-[#FFC000] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <ul className="space-y-3 flex-grow">
                  {service.features.slice(0, 3).map((feature, featureIdx) => (
                    <li key={featureIdx} className="text-gray-400 text-sm leading-relaxed flex items-start">
                      <span className="text-[#FFC000] mr-3 mt-1 text-xs opacity-70">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.features.length > 3 && (
                  <div className="text-[#FFC000] text-sm font-semibold mt-6 flex items-center group-hover:text-white transition-colors">
                    See full details <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            {showAll ? "Show Less" : "Explore More"} 
            <span className={`transform transition-transform duration-300 ${showAll ? '-rotate-90' : 'rotate-45'}`}>
              &#8594;
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            >
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
                onClick={() => setSelectedService(null)} 
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="relative bg-[#111] border border-gold/30 p-8 sm:p-12 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
                    {selectedService.icon}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white leading-tight">{selectedService.title}</h3>
                    
                    <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">Key Service Deliverables</p>
                    <ul className="space-y-4 mb-10">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="text-white/85 text-base sm:text-lg leading-relaxed flex items-start">
                          <span className="text-gold mr-3 mt-1.5 text-sm">✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        setTimeout(() => {
                          window.dispatchEvent(new Event('open-booking-modal'));
                        }, 150);
                      }}
                      className="bg-gold hover:bg-gold/90 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                    >
                      <Calendar className="w-5 h-5" /> Book Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
