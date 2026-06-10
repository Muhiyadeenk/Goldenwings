import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';

import aiOrientationImg from '../assets/ai oriantation.png';
import excelBootcampImg from '../assets/image.png';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Ai Orientation Session for Internship Students",
      category: "Seminars",
      image: aiOrientationImg,
      link: "https://www.instagram.com/reel/DWqsNcVEwe8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      title: "Unlock the Power of Excel & Power BI",
      category: "Bootcamps",
      image: excelBootcampImg,
      link: "https://www.instagram.com/reel/DYmtN0ozHVQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      title: "Annual Convocation Day 2025",
      category: "Graduations",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Practical Tally Prime Training",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Collaborative Financial Case Studies",
      category: "Student Life",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Gulf Taxation Special Panel Discussion",
      category: "Seminars",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Celebrating Student Success Stories",
      category: "Graduations",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Corporate Financial Audit Simulation",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-primary min-h-screen" id="gallery">
      {/* Background Decorative Light Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Gallery Header Grid matching Team & Alumni design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          
          {/* Left Column of Gallery Header */}
          <div className="lg:col-span-6">
            <motion.h4 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.2em] text-sm lg:text-base uppercase mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> GALLERY
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Moments of Learning, Success & Milestones
            </motion.h2>
          </div>

          {/* Right Column of Gallery Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:pt-8"
          >
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
              A glimpse into the life and achievements at Golden Wings. Explore photos of our interactive practical accounting classes, corporate tax workshops, major graduation ceremonies, and dynamic collaborative meetups.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Hands-on Practical Training Workshops
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Celebrated Corporate Graduation Ceremoneis
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Expert-Led Corporate Seminars
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 8 Cards Grid with scale-up hover animations matching the team/alumni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative py-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1, 
                y: -12, 
                zIndex: 10,
                transition: { type: "spring", stiffness: 350, damping: 15 }
              }}
              onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] transition-all duration-300 shadow-md flex flex-col h-[380px] cursor-pointer"
            >
              {/* Gallery Image Wrapper */}
              <div className="relative w-full h-[75%] overflow-hidden bg-white/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Badge Category overlay */}
                <div className="absolute top-4 left-4 bg-[#0a0a0add]/80 backdrop-blur-md text-gold text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/25 tracking-wider uppercase">
                  {item.category}
                </div>

                {/* Luxury gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent opacity-65 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Gallery Info Details */}
              <div className="p-5 flex-1 flex flex-col justify-center bg-gradient-to-b from-transparent to-[#0d0d0d]">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exact bottom right decorative arrow button from the screenshot */}
        <div className="flex justify-end mt-4">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#e29c1d" }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-primary font-bold shadow-lg shadow-gold/20 hover:shadow-gold/45 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
