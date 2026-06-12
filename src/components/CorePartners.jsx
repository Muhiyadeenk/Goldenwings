import { motion } from 'framer-motion';

import adamTraders from '../assets/client-logos/ADAM-TRADERS.jpeg';
import alJazyah from '../assets/client-logos/AL-JAZYAH.jpeg';
import fishermanSeaFoods from '../assets/client-logos/FISHERMAN-SEA-FOODS.jpeg';
import hrMobileCity from '../assets/client-logos/HR-MOBILE-CITY.jpeg';
import lamComputers from '../assets/client-logos/LAM-COMPUTERS.jpeg';
import skGroup from '../assets/client-logos/SK-GROUP.jpeg';
import lala from '../assets/client-logos/lala.jpeg';

const partners = [
  { name: "Adam Traders", logo: adamTraders },
  { name: "Al Jazyah", logo: alJazyah },
  { name: "Fisherman Sea Foods", logo: fishermanSeaFoods },
  { name: "HR Mobile City", logo: hrMobileCity },
  { name: "LAM Computers", logo: lamComputers },
  { name: "SK Group", logo: skGroup },
  { name: "Lala", logo: lala },
];

const CorePartners = () => {
  return (
    <section className="py-24 bg-[#000000] overflow-hidden relative z-10">
      <div className="container mx-auto px-6 lg:px-16 mb-16 text-center">
        <h4 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xl lg:text-2xl mb-4">
          Our Clients
        </h4>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Our Core Partners
        </h2>
      </div>

      {/* Marquee container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap items-center w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center mx-4 md:mx-6 bg-white rounded-xl shadow-md p-4 w-[140px] h-[80px] md:w-[180px] md:h-[100px] lg:w-[220px] lg:h-[120px] cursor-pointer border border-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
               loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePartners;
