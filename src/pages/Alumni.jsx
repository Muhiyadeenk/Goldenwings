import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { ImageGallery } from '@/components/ui/image-gallery';

// Dynamically import all images from the Alumni folder
const globData = import.meta.glob('../assets/Alumni/*.*', { eager: true });
const alumniMembers = Object.entries(globData).map(([path, module]) => {
  const filename = path.split('/').pop() || '';
  // Clean up filename to extract the name
  let name = filename.replace(/\.[^/.]+$/, ""); // remove extension
  name = name.replace(/[-_ ]?placed$/i, ""); // remove 'placed' suffix
  // Format as title case
  name = name.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

  return {
    id: filename,
    name,
    role: "Placed",
    image: module.default || module
  };
});

const Alumni = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-primary min-h-screen" id="alumni">
      {/* Background Decorative Light Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Alumni Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          
          {/* Left Column of Alumni Header */}
          <div className="lg:col-span-6">
            <motion.h4 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.2em] text-sm lg:text-base uppercase mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> ALUMNI
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Diverse And Precise Alumni Shaping Financial Futures
            </motion.h2>
          </div>

          {/* Right Column of Alumni Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:pt-8"
          >
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
              Our outstanding alumni bring together a wide range of precise technical expertise, enabling top tier corporate organizations worldwide to tackle their most complex financial challenges with confidence.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Strategic Financial Planners
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Collaborative Accounting Leaders
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Ethical and Detail-Oriented Professionals
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Masonry Image Gallery Grid */}
        <ImageGallery items={alumniMembers} />

      </div>
    </section>
  );
};

export default Alumni;
