import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import techImage from '../assets/tech_meeting.png';
import emailjs from '@emailjs/browser';

export default function HireFromUs() {
  const formRef = useRef();
  const [form, setForm] = useState({
    full_name: '', company_name: '', accounting_role: '', phone_number: '', email: '', requirements: ''
  });
  const [submitted, setSub] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = [
    "Financial Accounting",
    "Managerial Accounting",
    "Taxation Basics",
    "Auditing and Assurance",
    "Accounting Information Systems"
  ];

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_HIRE_SERVICE_ID,
        import.meta.env.VITE_HIRE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_HIRE_PUBLIC_KEY
      );

      setSub(true);
        setForm({
          full_name: '',
          company_name: '',
          accounting_role: '',
          phone_number: '',
          email: '',
          requirements: ''
        });

        setTimeout(() => {
          setSub(false);
        }, 5000);
    } catch (err) {
      console.log(err);
      alert(`Error caught: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 pb-3 text-white text-[15px] placeholder-white/40 focus:border-[#FFC000] outline-none transition-colors duration-300";

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-hidden relative">
      
      {/* ── TOP SECTION: Pitch & Image ── */}
      <div className="container mx-auto px-6 lg:px-12 mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text & Roles */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 fill-[#FFC000] text-[#FFC000]" />
              <span className="text-white font-bold text-lg tracking-wide">+1900 Placements</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Are you struggling <br className="hidden md:block" />
              to hire accounting <br className="hidden md:block" />
              professionals?
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              We don't train talent; we uncover it. Only the best make it through, and we ensure they reach the top.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#131313] rounded-2xl p-8 border border-white/5 shadow-2xl max-w-md"
            >
              <h3 className="text-white font-bold text-xl mb-6">Roles You Can Hire For:</h3>
              <ul className="flex flex-col gap-4">
                {roles.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 font-medium">
                    <span className="text-white/40 w-4">{idx + 1}</span>
                    <span className="text-[15px]">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: The Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Tech professionals meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── BOTTOM SECTION: The Form ── */}
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="bg-[#131313] rounded-[2.5rem] p-10 sm:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFC000]/5 rounded-full blur-[100px] pointer-events-none"></div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-[#FFC000]/10 border border-[#FFC000]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#FFC000]" />
                </div>
                <h3 className="text-white text-3xl font-bold">Request Submitted!</h3>
                <p className="text-white/60 text-base">We will review your requirements and get back to you shortly.</p>
              </motion.div>
            ) : (
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold text-[#FFC000] mb-4">
                    Ready to Hire?
                  </h2>
                  <p className="text-white/60 text-lg">Fill out the details below and we will get right back to you.</p>
                </div>
                
                <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-10">
                  <div className="flex flex-col sm:flex-row gap-10 sm:gap-12">
                    <input 
                      name="full_name" 
                      value={form.full_name} 
                      onChange={onChange} 
                      required
                      placeholder="Full Name" 
                      className={inputClass} 
                    />
                    <input 
                      name="company_name" 
                      value={form.company_name} 
                      onChange={onChange} 
                      required
                      placeholder="Company Name" 
                      className={inputClass} 
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-10 sm:gap-12">
                    <select 
                      name="accounting_role"
                      value={form.accounting_role}
                      onChange={onChange}
                      required
                      className={`${inputClass} appearance-none bg-transparent cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#131313] text-white/40">Select Accounting Role</option>
                      {roles.map((role, idx) => (
                        <option key={idx} value={role} className="bg-[#131313] text-white">{role}</option>
                      ))}
                    </select>
                    <input 
                      name="phone_number" 
                      type="tel" 
                      value={form.phone_number} 
                      onChange={onChange} 
                      placeholder="Phone Number" 
                      className={inputClass} 
                    />
                  </div>
                  
                  <input 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={onChange} 
                    required
                    placeholder="Email Address" 
                    className={inputClass} 
                  />
                  
                  <textarea 
                    name="requirements" 
                    value={form.requirements} 
                    onChange={onChange} 
                    required
                    rows={4} 
                    placeholder="Briefly describe your hiring needs..." 
                    className={`${inputClass} resize-none`} 
                  />
                  
                  <div className="flex justify-center mt-8">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="flex items-center justify-center gap-2 bg-[#FFC000] hover:bg-yellow-400 text-black font-extrabold text-[16px] tracking-wide px-16 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,192,0,0.3)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none w-full sm:w-auto"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          SUBMITTING...
                        </span>
                      ) : (
                        "BOOK NOW"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
