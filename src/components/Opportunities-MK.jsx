import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Map, MapMarker, MarkerContent, MarkerLabel, MapArc } from '@/components/ui/mapcn-map-arc';

const places = [
  { id: 1, name: "Saudi Arabia", label: "KSA", lng: 45.0, lat: 23.8 },
  { id: 2, name: "United Arab Emirates", label: "UAE", lng: 54.0, lat: 23.4 },
  { id: 4, name: "Oman", label: "Oman", lng: 58.5, lat: 23.6 },
  { id: 3, name: "India", label: "India", lng: 78.9, lat: 20.5 }
];

const arcs = [
  { id: 'arc-1', from: [45.0, 23.8], to: [54.0, 23.4] }, // KSA to UAE
  { id: 'arc-2', from: [54.0, 23.4], to: [58.5, 23.6] }, // UAE to Oman
  { id: 'arc-3', from: [58.5, 23.6], to: [78.9, 20.5] }  // Oman to India
];

const Opportunities = () => {
  return (
    <section className="py-24 relative overflow-hidden min-h-screen flex items-center" id="opportunities">

      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left content */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Expanding Opportunities <br /> <span className="text-gold">Across The GCC & India</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-10">
              Our strategic presence enables us to provide localized expertise and insights, ensuring your business thrives in each market. From Saudi Arabia, the UAE, and Oman to India, we offer tailored solutions that align with regional dynamics and drive sustainable growth. Wherever your business takes you, our team is positioned to guide you at every stage.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-gold text-primary font-bold px-8 py-4 rounded-full text-base hover:bg-yellow-400 transition duration-300 shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-0.5 will-change-transform"
            >
              Explore Services <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right — Dynamic Map */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[600px] h-[500px] rounded-[2.2rem] overflow-hidden shadow-[0_0_50px_rgba(255,192,0,0.12),0_0_100px_rgba(255,192,0,0.05)] border border-white/5">
              <Map center={[58.0, 23.0]} zoom={3.2} theme="dark">
                <MapArc 
                  data={arcs} 
                  curvature={0.25} 
                  paint={{ "line-color": "#eab308", "line-width": 2, "line-opacity": 0.8 }} 
                  hoverPaint={{ "line-color": "#fef08a", "line-width": 3, "line-opacity": 1 }} 
                />
                {places.map((place) => (
                  <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
                    <MarkerContent>
                      <div className="relative flex items-center justify-center size-5 cursor-pointer rounded-full border-2 border-yellow-400 bg-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.9)] transition-transform hover:scale-110 group will-change-transform">
                        {/* Ping animation for that radar feel */}
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                      </div>
                      <MarkerLabel position="bottom" className="mt-2 text-yellow-100 font-bold tracking-wider drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] px-2 py-1 bg-black/40 rounded-md border border-yellow-500/30 backdrop-blur-sm">
                        {place.label}
                      </MarkerLabel>
                    </MarkerContent>
                  </MapMarker>
                ))}
              </Map>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Opportunities;
