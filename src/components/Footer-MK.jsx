import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Golden_Wings_Logo_Vecter_File-removebg-preview.png';

const socials = [
  {
    label: 'Instagram', href: 'https://www.instagram.com/golden_wings_official_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  },
  {
    label: 'Facebook', href: 'https://www.facebook.com/goldenwingsglobal/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
  },
  {
    label: 'LinkedIn', href: 'https://goldenwingsedu.in/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
  },
  {
    label: 'YouTube', href: 'https://www.youtube.com/@golden_wings_official_',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
  },
];

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/uae') return null;

  const courses = ['MDGAT', 'DCPCA', 'CPCA', 'HSS ST'];

  const usefulLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Team', href: '#team' },
    { label: 'Alumni', href: '#alumni' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Boot Camp', href: '#bootcamp' },
    { label: 'Hire From Us', href: '#hire' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const branches = [
    'KUNNUMPURAM',
    'AREEKODE',
    'NARIKKUNI',
    'NADAPURAM',
    'PERUMBAVOOR',
    'MUKKAM',
    'HI LITE BUSINESS PARK',
    'UAE',
    'KSA',
    'OMAN'
  ];

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 pt-20 pb-10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="flex flex-col pr-6">
            <Link to="/" className="mb-6 inline-block">
              <img src={logo} alt="Golden Wings Logo" className="h-16 object-contain" loading="lazy" />
            </Link>
            <p className="text-zinc-400 text-[13.5px] leading-relaxed mb-6">
              Ecan Global Business Solution and Education Center, is one of the leading educational institute along with consultancy services providing the best own developed education curriculum with assured placement.
            </p>
            <a href="#about" className="text-[#FFC000] hover:text-[#FFD700] text-[13.5px] font-bold tracking-wide transition-colors uppercase inline-flex items-center gap-1">
              Read More &rarr;
            </a>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-white font-bold mb-4 text-[16px] tracking-wide uppercase pb-2 border-b border-white/5">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, i) => (
                <li key={i}>
                  <Link
                    to="#courses"
                    className="group inline-flex items-center text-zinc-400 hover:text-[#FFC000] transition-all duration-300 transform hover:translate-x-1.5 text-[13.5px]"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-[16px] tracking-wide uppercase pb-2 border-b border-white/5">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-zinc-400 hover:text-[#FFC000] transition-all duration-300 transform hover:translate-x-1.5 text-[13.5px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact US */}
          <div>
            <h4 className="text-white font-bold mb-4 text-[16px] tracking-wide uppercase pb-2 border-b border-white/5">Contact US</h4>

            {/* Phone Numbers */}
            <div className="flex flex-col gap-1 mb-6">
              <a href="tel:+919061515616" className="text-[#FFC000] hover:text-white transition-colors text-[14.5px] font-bold tracking-wide">
                +91 9061 515 616
              </a>
              <a href="tel:+916235315616" className="text-[#FFC000] hover:text-white transition-colors text-[14.5px] font-bold tracking-wide">
                +91 6235 815 616
              </a>
              <a href="tel:+919061515616" className="text-[#FFC000] hover:text-white transition-colors text-[14.5px] font-bold tracking-wide">
                +91 9061 515 616
              </a>

            </div>

            {/* Branches Section */}
            <div className="mb-6">
              <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold block mb-2.5">Our Branches</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-zinc-400 text-[12.5px] leading-relaxed">
                {branches.map((branch, i) => (
                  <span key={i} className="flex items-center">
                    <span className="hover:text-[#FFC000] transition-colors duration-200 cursor-default">{branch}</span>
                    {i < branches.length - 1 && <span className="text-zinc-800 ml-2">|</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5">
              <a href="mailto:goldenwingstaxsolutions@gmail.com" className="text-zinc-400 hover:text-[#FFC000] transition-colors duration-200 text-[13px] break-all block">
                goldenwingstaxsolutions@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-zinc-500 text-[13px] text-center">
            © {new Date().getFullYear()} All Rights Reserved | Powered By <span className="text-white font-medium">Golden Wings</span>.
          </p>
          <div className="flex items-center justify-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 border border-white/10 hover:text-black hover:bg-[#FFC000] hover:border-transparent hover:-translate-y-1 transition duration-300 will-change-transform"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
