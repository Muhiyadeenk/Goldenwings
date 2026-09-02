'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface GalleryItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="relative w-full py-10 px-2 sm:px-4">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-6 mx-auto w-full max-w-7xl">
        {items.map((item) => (
          <div key={item.id} className="mb-3 sm:mb-6 break-inside-avoid relative group">
            <AnimatedImage item={item} ratio={3 / 4} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  item: GalleryItem;
  ratio: number;
}

function AnimatedImage({ item, ratio }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const [isLoading, setIsLoading] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  // Show color when the image has scrolled into view AND finished loading
  const showColor = isInView && !isLoading;

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="relative size-full rounded-xl sm:rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        alt={item.name}
        src={item.image}
        className={cn(
          'size-full object-cover ease-out will-change-[opacity,transform,filter]',
          {
            'opacity-0': !isInView,
            'opacity-100': isInView && !isLoading,
            'scale-105': isHovered && isInView && !isLoading
          }
        )}
        style={{
          filter: showColor ? 'grayscale(0)' : 'grayscale(1)',
          transition: 'opacity 0.7s ease, filter 0.8s ease, transform 0.5s ease'
        }}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
      
      {/* Very subtle bottom shadow just for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 flex flex-col justify-end z-20 pointer-events-none">
        <div className="inline-flex mb-2 sm:mb-3">
          <span className="text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 backdrop-blur-md">
            {item.role}
          </span>
        </div>
        <div className="transition-all duration-500">
          <h3 className="text-sm sm:text-xl md:text-2xl font-bold leading-tight text-white group-hover:text-gold transition-colors duration-300">
            {item.name}
          </h3>
          <div className="h-0.5 bg-gold mt-2 sm:mt-3 w-0 group-hover:w-full opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>
      </div>
    </AspectRatio>
  );
}
