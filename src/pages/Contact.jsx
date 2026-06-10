import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '', user_phone: '', user_email: '', message: ''
  });
  const [submitted, setSub] = useState(false);
  const [loading, setLoading] = useState(false);

  // Link scroll to ball rotation and horizontal movement
  const { scrollY } = useScroll();
  const rotateBall = useTransform(scrollY, [0, 800], [0, 360]);
  const moveBall = useTransform(scrollY, [0, 800], [0, 150]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSub(true);
      setFormData({ user_name: '', user_phone: '', user_email: '', message: '' });
      
      setTimeout(() => {
        setSub(false);
      }, 5000);
    } catch (err) {
      console.error("Submission Error:", err);
      alert(`Network/Connection Error: ${err.message || err.text || 'Unknown Error'}`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 pb-3 text-white text-[15px] placeholder-white/40 focus:border-[#FFC000] outline-none transition-colors duration-300";

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      
      {/* ── TOP HERO BANNER ── */}
      <section className="w-full bg-transparent pt-12 pb-4 lg:pb-8 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-tight mb-4"
          >
            Contact us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Get in touch with us! Our team is here to assist you with any questions or concerns you may have. Fill out the contact form or give us a call to start the conversation. We look forward to hearing from you.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="pt-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* ── LEFT COLUMN: Text & Info ── */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <h2 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-tight mb-20">
                We would be <br className="hidden md:block" />
                happy to hear <br className="hidden md:block" />
                from you
              </h2>

              {/* Contact Info Row */}
              <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 relative">
                
                {/* Call */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div 
                    style={{ rotate: rotateBall, x: moveBall }}
                    className="w-8 h-8 rounded-full overflow-hidden flex flex-col mb-4 shadow-[0_0_15px_rgba(255,192,0,0.2)] relative z-10"
                  >
                    <div className="w-full h-1/2 bg-[#1a1a1a]"></div>
                    <div className="w-full h-1/2 bg-[#FFC000]"></div>
                  </motion.div>
                  <h4 className="text-white font-bold text-[14px] tracking-widest mb-3">GIVE US A CALL</h4>
                  <a href="tel:+919061515616" className="text-white hover:text-[#FFC000] transition-colors font-semibold text-[16px]">
                    +91 9061 515 616
                  </a>
                </motion.div>

                {/* Email */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div 
                    style={{ rotate: rotateBall, x: moveBall }}
                    className="w-8 h-8 rounded-full overflow-hidden flex flex-col mb-4 shadow-[0_0_15px_rgba(255,192,0,0.3)] relative z-10"
                  >
                    <div className="w-full h-1/2 bg-[#1a1a1a]"></div>
                    <div className="w-full h-1/2 bg-[#FFC000]"></div>
                  </motion.div>
                  <h4 className="text-white font-bold text-[14px] tracking-widest mb-3">MESSAGE US</h4>
                  <a href="mailto:goldenwingstaxsolutions@gmail.com" className="text-white hover:text-[#FFC000] transition-colors font-semibold text-[16px] break-all">
                    goldenwingstaxsolutions@gmail.com
                  </a>
                </motion.div>

              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: Form Card ── */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 w-full max-w-xl lg:max-w-none mx-auto"
            >
              <div className="bg-[#131313] rounded-[2.5rem] p-10 sm:p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
                
                {/* Subtle glow inside card */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFC000]/5 rounded-full blur-[80px] pointer-events-none"></div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-24 gap-5"
                  >
                    <div className="w-24 h-24 rounded-full bg-[#FFC000]/10 border border-[#FFC000]/30 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-[#FFC000]" />
                    </div>
                    <h3 className="text-white text-3xl font-bold">Message Sent!</h3>
                    <p className="text-white/60 text-base">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 relative z-10">
                    <input 
                      type="text"
                      name="user_name" 
                      value={formData.user_name} 
                      onChange={onChange} 
                      required
                      placeholder="Full Name" 
                      className={inputClass} 
                    />
                    
                    <input 
                      type="tel"
                      name="user_phone" 
                      value={formData.user_phone} 
                      onChange={onChange} 
                      required
                      placeholder="Phone" 
                      className={inputClass} 
                    />
                    
                    <input 
                      type="email"
                      name="user_email" 
                      value={formData.user_email} 
                      onChange={onChange} 
                      required
                      placeholder="Email" 
                      className={inputClass} 
                    />
                    
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={onChange} 
                      required
                      rows={4} 
                      placeholder="Write us" 
                      className={`${inputClass} resize-none`} 
                    />
                    
                    <div className="flex justify-end mt-4">
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="flex items-center justify-center gap-2 bg-[#FFC000] hover:bg-yellow-400 text-black font-extrabold text-[15px] tracking-wide px-12 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,192,0,0.3)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            SENDING...
                          </span>
                        ) : (
                          "SEND"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
