import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

// Import real team photos with exact filenames from disk
import badushaImg from '../assets/Team/Badusha.Marketinghead.png';
import dilshadImg from '../assets/Team/dilshad.png';
import hiroshakImg from '../assets/Team/Hiroshak.png';
import imageImg from '../assets/Team/image.png';
import mahroofImg from '../assets/Team/Mahroof.MD.png';
import muhsinaImg from '../assets/Team/muhsina.png';
import nihalImg from '../assets/Team/Nihal.MD..jpeg';
import sayeedImg from '../assets/Team/sayeed.png';
import sharafuImg from '../assets/Team/sharafu.ceo.png';
import shifnaImg from '../assets/Team/shifna.png';
import suhailImg from '../assets/Team/suhail.png';
import abimanyuImg from '../assets/Team/ABIMANYU.png';
import anasImg from '../assets/Team/ANAS.png';
import shakirImg from '../assets/Team/MUHAMMED SHAKIR M.png';
import zuhairImg from '../assets/Team/ZUHAIR KATTIL PURAYIL.png';

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const teamSchema = {
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
        "name": "Team",
        "item": "https://www.goldenwingsac.com/team"
      }
    ]
  };

  const teamMembers = [
    {
      name: "SHARAFUDEEN K",
      role: "CEO",
      image: sharafuImg
    },
    {
      name: "NIHAL SALAM KT",
      role: "MANAGING DIRECTOR",
      image: nihalImg
    },
    {
      name: "MAHROOF CHIRAYIMMAL",
      role: "MANAGING DIRECTOR",
      image: mahroofImg
    },
    {
      name: "BADUSHA M",
      role: "MANAGING DIRECTOR",
      image: badushaImg
    },
    {
      name: "DILSHAD AMEEN C",
      role: "MANAGING DIRECTOR",
      image: dilshadImg
    },
    {
      name: "MUHAMMAD AJMAL KV",
      role: "PRINCIPAL",
      image: imageImg
    },
    {
      name: "MUHAMMAD SUHAIL MS",
      role: "BUSINESS DEVELOPMENT MANGER",
      image: suhailImg
    },
    {
      name: "MUHAMMED SAYEED K",
      role: "MANAGING DIRECTOR",
      image: sayeedImg
    },
    {
      name: "HIROSHA K",
      role: "Accounting Faculty",
      image: hiroshakImg
    },
    {
      name: "MUHSINA TV",
      role: "Accounting Faculty",
      image: muhsinaImg
    },
    {
      name: "SHIFNA",
      role: "BDR",
      image: shifnaImg
    },
    {
      name: "ABIMANYU",
      role: "TEAM MEMBER",
      image: abimanyuImg,
      isPassport: true
    },
    {
      name: "ANAS",
      role: "TEAM MEMBER",
      image: anasImg,
      isPassport: true
    },
    {
      name: "MUHAMMED SHAKIR M",
      role: "TEAM MEMBER",
      image: shakirImg,
      isPassport: true
    },
    {
      name: "ZUHAIR KATTIL PURAYIL",
      role: "TEAM MEMBER",
      image: zuhairImg,
      isPassport: true
    }
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-primary min-h-screen" id="team">
      <SEO 
        title="Our Team | Golden Wings"
        description="Meet the expert mentors, directors, and business consultants behind Golden Wings Global Business Solution and Education Center."
        canonicalUrl="https://www.goldenwingsac.com/team"
        jsonLD={teamSchema}
      />
      {/* Background Decorative Light Glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Team Header Grid matching user design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">

          {/* Left Column of Team Header */}
          <div className="lg:col-span-6">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.2em] text-sm lg:text-base uppercase mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> TEAM
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              A Diverse and Skilled Team Of Problem Solvers
            </motion.h2>
          </div>

          {/* Right Column of Team Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:pt-8"
          >
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
              Our team brings together a wide range of expertise and backgrounds, enabling us to tackle even the most complex challenges with curiosity and excellence.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Innovative Thinkers
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Collaborative Experts
              </li>
              <li className="flex items-center gap-3 text-white/95 font-medium text-base sm:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                Solution-Oriented Professionals
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 8 Cards Grid with sleek glassmorphic portrait designs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative py-8">
          {teamMembers.map((member, idx) => (
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
              className="relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-md flex flex-col h-[400px] cursor-default"
              style={{
                borderColor: hoveredCard === idx ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.05)',
                boxShadow: hoveredCard === idx ? '0 20px 50px rgba(212,175,55,0.25)' : ''
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Member Portrait Image Wrapper */}
              <div className="relative w-full h-[70%] overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full transition-all duration-500 will-change-transform ${
                    hoveredCard === idx ? 'scale-105' : ''
                  } ${
                    member.isPassport ? 'object-cover object-top' : 'object-cover'
                  }`}
                  style={{ filter: hoveredCard === idx ? 'grayscale(0)' : 'grayscale(1)', transition: 'filter 0.5s ease' }}
                  loading="lazy" />
                {/* Luxury overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/10 to-transparent transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-40' : 'opacity-60'}`} />
              </div>

              {/* Member Info details */}
              <div className="p-6 flex-1 flex flex-col justify-end bg-gradient-to-b from-transparent to-[#0d0d0d]">
                <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${hoveredCard === idx ? 'text-gold' : 'text-white'}`}>
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-white/60 text-sm font-medium">
                    {member.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exact bottom right decorative arrow button from the screenshot */}
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

export default Team;
