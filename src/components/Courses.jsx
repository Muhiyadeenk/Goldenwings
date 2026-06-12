import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Briefcase, FileSpreadsheet, Calculator, X } from 'lucide-react';
import { useState } from 'react';

const Courses = () => {
  const [selectedId, setSelectedId] = useState(null);

  const courses = [
    {
      id: "mdgat",
      title: "MDGAT",
      fullName: "Master Diploma in Gulf Accounting & Taxation",
      desc: "Comprehensive program tailored for individuals aiming to build a career in accounting and taxation within GCC countries. Covers advanced financial reporting, GCC VAT mechanisms, corporate tax laws, and practical auditing scenarios to ensure you are fully prepared for the Gulf market.",
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    },
    {
      id: "dcpca",
      title: "DCPCA",
      fullName: "Diploma in Computerized Professional Professional Corporate Accounting",
      desc: "In-depth training in computerized accounting, taxation, and business finance. Gain practical experience with Tally, ZohoBooks, and GST. This course is perfectly designed to bridge the gap between theoretical knowledge and the practical skills demanded by modern corporate environments.",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    },
    {
      id: "cpca",
      title: "CPCA",
      fullName: "Certificate in Professional Corporate Accounting",
      desc: "A compact version of DCPCA, ideal for those seeking quick, job-ready skills in computerized accounting and essential concepts. It provides a robust foundation for entry-level accounting positions and small business financial management.",
      icon: <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    },
    {
      id: "hss-st",
      title: "HSS ST",
      fullName: "High School Students Skill Training",
      desc: "Early skill development for high school students, building a strong foundation for future finance and accounting studies. It introduces core concepts in an engaging way, helping students discover their passion for numbers and business early on.",
      icon: <FileSpreadsheet className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
    }
  ];

  const selectedCourse = courses.find(c => c.id === selectedId);

  return (
    <section className="py-24 relative font-sans" id="courses">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.2em] text-lg lg:text-2xl uppercase mb-6"
          >
            COURSES
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter"
          >
            Explore What Our Experts Offer
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              onClick={() => setSelectedId(course.id)}
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-[#111] backdrop-blur-sm border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-[#1a1a1a] hover:border-gold/30 transition duration-300 cursor-pointer shadow-lg"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300 will-change-transform">
                    {course.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors text-white group-hover:text-primary">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-black tracking-tight mb-2 text-white">{course.title}</h3>
                <h4 className="text-gold text-sm font-medium mb-4 h-10">{course.fullName}</h4>
                <p className="text-white/60 mb-8 line-clamp-3">
                  {course.desc}
                </p>
                
                <button className="text-white font-semibold flex items-center gap-2 group-hover:text-gold transition-colors duration-300">
                  See More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay for Expanded Box */}
        <AnimatePresence>
          {selectedId && selectedCourse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            >
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
                onClick={() => setSelectedId(null)} 
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="relative bg-[#111] border border-gold/30 p-8 sm:p-12 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
                    {selectedCourse.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight mb-3 text-white">{selectedCourse.title}</h3>
                    <h4 className="text-gold text-lg sm:text-xl font-medium mb-6">{selectedCourse.fullName}</h4>
                    <p className="text-white/80 text-lg leading-relaxed mb-10">
                      {selectedCourse.desc}
                    </p>
                    
                    <button 
                      onClick={() => {
                        setSelectedId(null);
                        setTimeout(() => {
                          window.dispatchEvent(new Event('open-booking-modal'));
                        }, 150);
                      }}
                      className="bg-gold hover:bg-gold/90 text-primary px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                    >
                      Enroll in {selectedCourse.title}
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

export default Courses;
