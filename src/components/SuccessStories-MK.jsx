import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

import placement1 from '../assets/videos/placement1.MP4';
import placement2 from '../assets/videos/placement2.MP4';
import placement3 from '../assets/videos/placement3.MP4';
import placement4 from '../assets/videos/placement4.MP4';
import placement5 from '../assets/videos/placement 5.MP4';

const stories = [
  { id: 1, name: "Ahmad K.", company: "KPMG", quote: "Best Decision In My Life", video: placement1 },
  { id: 2, name: "Fatima S.", company: "Deloitte", quote: "Got My Dream Job", video: placement2 },
  { id: 3, name: "Usman T.", company: "PwC", quote: "Highly Recommended", video: placement3 },
  { id: 4, name: "Sara A.", company: "EY", quote: "Transformed My Career", video: placement4 },
  { id: 5, name: "Omar F.", company: "BDO", quote: "Exceptional Training", video: placement5 },
];

const VideoCard = ({ story, idx, isPlaying, onTogglePlay }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => {
          // If autoplay fails, fallback gracefully (may need user interaction)
          console.log("Play failed", e);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      if (!isPlaying) {
        onTogglePlay(idx);
        // Play immediately in the same tick so mobile browsers recognize it as user-initiated
        videoRef.current.play().catch(e => console.log("Sync play failed", e));
      } else {
        onTogglePlay(null);
        videoRef.current.pause();
      }
    }
  };

  return (
    <motion.div
      className={`flex-shrink-0 relative flex flex-col justify-end mx-3 md:mx-4 rounded-3xl p-4 w-[280px] h-[400px] md:w-[320px] md:h-[480px] overflow-hidden cursor-pointer bg-[#111] border border-white/10`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={handleCardClick}
    >
      {/* Background Video */}
      <video 
        ref={videoRef}
        src={story.video + "#t=0.1"}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0 bg-gray-900"
      />

      {/* Bottom - Play Toggle */}
      <div className="relative z-10 flex justify-end">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick(e);
          }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition border border-white/20 hover:border-transparent"
        >
          {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6" /> : <Play className="w-5 h-5 md:w-6 md:h-6 ml-1" />}
        </button>
      </div>
    </motion.div>
  );
};

const SuccessStories = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleTogglePlay = (index) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#000000] overflow-hidden relative z-10 font-sans">
      <div className="container mx-auto px-6 lg:px-16 mb-16">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">Success Stories</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight mb-6">
            Hear It From Our <br />
            <span className="text-[#D4AF37]">Placed Students</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real students. Real companies. Real success stories from Golden Wings graduates.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>

        <div 
          className="flex whitespace-nowrap items-center w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationPlayState: playingIndex !== null ? 'paused' : '' }}
        >
          {/* Duplicate array for seamless infinite loop */}
          {[...stories, ...stories, ...stories].map((story, idx) => (
            <VideoCard 
              key={idx} 
              story={story} 
              idx={idx} 
              isPlaying={playingIndex === idx} 
              onTogglePlay={handleTogglePlay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
