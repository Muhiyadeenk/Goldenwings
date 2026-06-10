import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SeatBookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: ''
  });
  const formRef = useRef(null);

  useEffect(() => {
    // Check if user has already seen this modal in this session to avoid annoying them
    const hasSeenModal = sessionStorage.getItem('hasSeenPromoModal');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenPromoModal', 'true');
      }, 5000); // Trigger after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsSubmitted(false); // Reset submission state when reopened
      setIsOpen(true);
    };
    window.addEventListener('open-booking-modal', handleOpenEvent);
    return () => window.removeEventListener('open-booking-modal', handleOpenEvent);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_BOOTCAMP_SERVICE_ID,
        import.meta.env.VITE_BOOTCAMP_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_BOOTCAMP_PUBLIC_KEY
      );

      setIsSubmitted(true);
        setFormData({
          first_name: '',
          last_name: '',
          phone_number: '',
          email: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
    } catch (err) {
      console.error("EmailJS catch:", err);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop Overlay with blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative bg-[#0c0c0c] border border-gold/30 rounded-3xl overflow-hidden w-full max-w-4xl shadow-[0_0_50px_rgba(212,175,55,0.2)] grid grid-cols-1 md:grid-cols-12 min-h-[500px]"
          >
            
            {/* Close Button on Top Right */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Gorgeous Graphic Panel matching the theme */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#121212] via-[#0f0f0f] to-[#050505] relative flex flex-col justify-between p-8 md:p-10 border-r border-white/5 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
              
              {/* Gold Accented Elements */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-gold font-bold text-sm tracking-[0.15em] mb-4">
                  <Sparkles className="w-4 h-4 animate-pulse" /> LIMITED SEATS AVAILABLE
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                  Secure Your <span className="text-gold">Future</span> In Accounts & Tax
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Join Golden Wings Academy today and transform your skills with practical software training, GCC compliance, and corporate certifications.
                </p>
              </div>

              {/* Decorative Seat Icon or Calendar with Gold Rings */}
              <div className="relative z-10 flex justify-center items-center py-6 md:py-0 my-auto">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/15 rounded-full blur-xl animate-pulse" />
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gold via-gold/80 to-[#ffdf7a] flex items-center justify-center text-primary shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                    <Calendar className="w-10 h-10 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 border-t border-white/5 pt-6 text-white/50 text-xs">
                * Personalized guidance and customized seat allocation
              </div>
            </div>

            {/* Right Side: Form details */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full"
                  >
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                      Book Your Seat <span className="text-gold">Now</span>
                    </h2>
                    <p className="text-white/60 text-sm mb-8">
                      Please fill out your details and our career counselor will call you back within 24 hours.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">First Name *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"><User className="w-4 h-4" /></span>
                            <input 
                              name="first_name"
                              type="text" 
                              required
                              placeholder="John" 
                              value={formData.first_name}
                              onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Last Name *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"><User className="w-4 h-4" /></span>
                            <input 
                              name="last_name"
                              type="text" 
                              required
                              placeholder="Doe" 
                              value={formData.last_name}
                              onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Phone Number *</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"><Phone className="w-4 h-4" /></span>
                          <input 
                            name="phone_number"
                            type="tel" 
                            required
                            placeholder="+971 50 123 4567" 
                            value={formData.phone_number}
                            onChange={(e) => setFormData({...formData, phone_number: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Email Address *</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"><Mail className="w-4 h-4" /></span>
                          <input 
                            name="email"
                            type="email" 
                            required
                            placeholder="john.doe@example.com" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                          />
                        </div>
                      </div>

                      <motion.button 
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02, backgroundColor: "#e29c1d" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gold hover:bg-gold/90 text-primary font-bold py-4 rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 text-base mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                      >
                        {loading ? "Submitting..." : "Book Seat Now"}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2, stiffness: 200, damping: 12 }}
                      className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    
                    <h2 className="text-3xl font-extrabold text-white mb-2">
                      Seat Reserved Successfully!
                    </h2>
                    <p className="text-gold font-semibold mb-4 text-lg">
                      Thank you, {formData.first_name}!
                    </p>
                    <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
                      We have received your request. One of our Senior Career Counselors will reach out to you via call or WhatsApp at <strong className="text-white">{formData.phone}</strong> very soon.
                    </p>

                    <button 
                      onClick={handleClose}
                      className="bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SeatBookingModal;
