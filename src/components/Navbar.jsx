import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Golden_Wings_Logo_Vecter_File-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isKSA = location.pathname === '/ksa';
  const isUAE = location.pathname === '/uae';
  const isLocalPage = isKSA || isUAE;
  const phoneNumber = isKSA ? '+966 56 441 8027' : isUAE ? '+971 56 470 5971' : '+91 9061 515 616';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'top-4 px-4 sm:px-8 flex justify-center' : 'top-0 flex justify-center'}`}>
      <nav className={`w-full transition-all duration-500 ease-in-out ${
        scrolled 
          ? `max-w-6xl bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${isOpen ? 'rounded-3xl' : 'rounded-full'}` 
          : 'max-w-full bg-transparent rounded-none'
      }`}>
        <div className={`mx-auto flex justify-between items-center transition-all duration-500 ease-in-out ${scrolled ? 'py-4 px-6 sm:px-8' : 'container px-6 lg:px-12 py-6'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Golden Wings Logo" className="h-10 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="text-white font-bold text-xl sm:text-2xl tracking-wide">Golden<span className="text-gold">Wings</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="relative text-white hover:text-gold transition-colors text-sm font-medium py-2 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Home</Link>
          
          <div className="relative group cursor-pointer py-2">
            <div className="flex items-center text-white group-hover:text-gold transition-colors text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              About Us <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-1 w-60 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden border border-gold/20">
              <Link to="/team" className="block px-6 py-4 hover:bg-white/5 transition-colors border-b border-gold/10 group/item">
                <div className="text-white group-hover/item:text-gold transition-colors font-bold text-lg mb-0.5">Team</div>
                <div className="text-gray-400 text-sm font-normal">Meet our expert team</div>
              </Link>
              <Link to="/alumni" className="block px-6 py-4 hover:bg-white/5 transition-colors border-b border-gold/10 group/item">
                <div className="text-white group-hover/item:text-gold transition-colors font-bold text-lg mb-0.5">Alumni</div>
                <div className="text-gray-400 text-sm font-normal">Our success stories</div>
              </Link>
              <Link to="/gallery" className="block px-6 py-4 hover:bg-white/5 transition-colors group/item">
                <div className="text-white group-hover/item:text-gold transition-colors font-bold text-lg mb-0.5">Gallery</div>
                <div className="text-gray-400 text-sm font-normal">Our success Photos</div>
              </Link>
            </div>
          </div>
          
          <Link to="/bootcamp" className="relative text-white hover:text-gold transition-colors text-sm font-medium py-2 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Boot Camp</Link>
          <Link to="/hire" className="relative text-white hover:text-gold transition-colors text-sm font-medium py-2 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Hire From Us</Link>
          {isLocalPage ? (
            <a href="#contact" className="relative text-white hover:text-gold transition-colors text-sm font-medium py-2 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Contact Us</a>
          ) : (
            <Link to="/contact" className="relative text-white hover:text-gold transition-colors text-sm font-medium py-2 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Contact Us</Link>
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a href="#contact" className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-primary px-6 py-3 rounded-full font-semibold text-base transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
            <Phone className="w-5 h-5" />
            {phoneNumber}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${scrolled ? 'mt-2' : 'absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl'}`}
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link to="/" className="text-white hover:text-gold transition-colors text-lg" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-white hover:text-gold transition-colors text-lg" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/bootcamp" className="text-white hover:text-gold transition-colors text-lg" onClick={() => setIsOpen(false)}>Boot Camp</Link>
              <Link to="/hire" className="text-white hover:text-gold transition-colors text-lg" onClick={() => setIsOpen(false)}>Hire From Us</Link>
              {isLocalPage ? (
                <a href="#contact" className="text-white hover:text-gold transition-colors text-lg" onClick={() => setIsOpen(false)}>Contact Us</a>
              ) : (
                <Link to="/contact" className="text-white hover:text-gold transition-colors text-lg" onClick={() => setIsOpen(false)}>Contact Us</Link>
              )}
              <a href="#contact" className="flex items-center justify-center gap-2 bg-gold text-primary px-6 py-4 rounded-full font-bold text-lg mt-4" onClick={() => setIsOpen(false)}>
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
