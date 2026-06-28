import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import aiOrientationImg from '../assets/galllery1/ai oriantation.png';
import excelBootcampImg from '../assets/galllery1/image.png';
import convocationImg from '../assets/galllery1/garaduation ceremony.png';
import businessloseImg from '../assets/galllery1/businesslose.png';
import studentLifeImg from '../assets/galllery1/guestvisit.png';
import cpcaimge from '../assets/galllery1/cpca.png';
import practicalImg from '../assets/galllery1/practical.png';
import auditWorkImg from '../assets/galllery1/audit work.png';

import bizIntegrityImg from '../assets/gallery2/business integrety.jpg';
import demoClassImg from '../assets/gallery2/democlass.png';
import progImg from '../assets/gallery2/programe.2.heic';
import slider1Img from '../assets/gallery2/home1.png';
import slider2Img from '../assets/gallery2/home2.png';
import slider3Img from '../assets/gallery2/home3.png';

/* ── Per-card component — each card tracks its own scroll position ── */
function GalleryCard({ item, idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 4) * 0.05, duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        zIndex: 10,
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}
      onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
      className={`relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-md flex flex-col h-full cursor-pointer hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] ${item.className || 'md:col-span-1 md:row-span-1'}`}
    >
      {/* Gallery Image Wrapper */}
      <div className="relative w-full h-full overflow-hidden bg-white/5 group">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover will-change-transform group-hover:scale-110"
          style={{
            filter: isInView ? 'grayscale(0)' : 'grayscale(1)',
            transition: 'filter 0.8s ease, transform 0.5s ease'
          }}
          loading="lazy"
        />

        {/* Badge Category overlay */}
        <div className="absolute top-4 left-4 bg-[#0a0a0add]/80 backdrop-blur-md text-gold text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/25 tracking-wider uppercase z-20">
          {item.category}
        </div>

        {/* Luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10" />

        {/* Gallery Info Details */}
        <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end z-20">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug group-hover:text-gold transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

const Gallery = () => {
  const galleryItems = [
    {
      title: "Ai Orientation Session",
      category: "Program",
      image: aiOrientationImg,
      link: "https://www.instagram.com/reel/DWqsNcVEwe8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Unlock the Power of Excel",
      category: "Bootcamps",
      image: excelBootcampImg,
      link: "https://www.instagram.com/reel/DYmtN0ozHVQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Annual Convocation 2025",
      category: "Graduations",
      image: convocationImg,
      link: "https://www.instagram.com/reel/DYSN5sMTLV4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Business Integrity",
      category: "Workshops",
      image: bizIntegrityImg,
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Corporate Financial Audit",
      category: "Classrooms",
      image: auditWorkImg,
      link: "https://www.instagram.com/reel/DZUxcJnTSmR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Demo Class Experience",
      category: "Classrooms",
      image: demoClassImg,
      className: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Special Programs",
      category: "Programs",
      image: progImg,
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Practical Excellence",
      category: "Training",
      image: practicalImg,
      link: "https://www.instagram.com/reel/DVv0IYtCHvR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Managing Business Loss",
      category: "Seminars",
      image: businessloseImg,
      link: "https://www.instagram.com/reel/DWzPKn3jF2_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Guinness Record Holder Visit",
      category: "Guest Visit",
      image: studentLifeImg,
      link: "https://www.instagram.com/reel/DWlr_m6EzqZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "CPCA Training",
      category: "Training",
      image: cpcaimge,
      link: "https://www.instagram.com/reel/DWjO3j9Ccfn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Corporate Meetup",
      category: "Meetup",
      image: slider1Img,
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Student Success",
      category: "Milestones",
      image: slider2Img,
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Learning Journey",
      category: "Graduation",
      image: slider3Img,
      className: "md:col-span-4 md:row-span-2"
    }
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-primary min-h-screen" id="gallery">
      {/* Background Decorative Light Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Gallery Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">

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
              Moments of Learning, Success &amp; Milestones
            </motion.h2>
          </div>

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
                Celebrated Corporate Graduation Ceremonies
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Expert-Led Corporate Seminars
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Gallery Grid — each GalleryCard tracks its own scroll visibility */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6 relative py-8">
          {galleryItems.map((item, idx) => (
            <GalleryCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e29c1d" }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-primary font-bold shadow-lg shadow-gold/20 hover:shadow-gold/45 transition duration-300"
          >
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
