import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Golden_Wings_Logo_Vecter_File-removebg-preview.png';

const socials = [
  {
    label: 'Instagram', href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  },
  {
    label: 'Facebook', href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
  },
  {
    label: 'Twitter', href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
  },
  {
    label: 'LinkedIn', href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
  },
  {
    label: 'YouTube', href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
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
    { name: 'Kunnumpuram', phone: '+91 9061 515 616' },
    { name: 'Areekode', phone: '+91 9061 515 616' },
    { name: 'Perumbavoor', phone: '+91 6235 815 616' },
    { name: 'Nadapuram', phone: '+91 6235 815 616' },
    { name: 'Kozhikode', phone: '+91 9656 714 403' },
  ];

  return (
    <footer className="bg-[#080808] pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {/* Brand column */}
          <div className="flex flex-col pr-6">
            <Link to="/" className="mb-6 inline-block">
              <img src={logo} alt="Golden Wings Logo" className="h-20 object-contain" />
            </Link>
            <p className="text-[#a1a1aa] text-[13.5px] leading-relaxed mb-4">
              Ecan Global Business Solution and Education Center, is one of the leading educational institute along with consultancy services providing the best own developed education curriculum with assured placement.
            </p>
            <a href="#about" className="text-[#FFC000] text-[13.5px] font-semibold hover:opacity-80 transition-opacity">
              Read More
            </a>
          </div>

          {/* Our Courses */}
          <div className="lg:ml-4">
            {/* Heading with gold underline */}
            <h4 className="text-white font-bold mb-1 text-[17px]">Our Courses</h4>
            <div className="w-10 h-[2px] bg-[#FFC000] mb-5"></div>
            <ul className="space-y-2.5">
              {courses.map((course, i) => (
                <li key={i}>
                  <Link
                    to="#courses"
                    className="group inline-flex items-center gap-2 text-[#a1a1aa] hover:text-[#FFC000] transition-colors duration-200 text-[13.5px]"
                  >
                    <span className="w-0 group-hover:w-3 h-[1.5px] bg-[#FFC000] transition-all duration-300 rounded-full flex-shrink-0"></span>
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            {/* Heading with gold underline */}
            <h4 className="text-white font-bold mb-1 text-[17px]">Useful Links</h4>
            <div className="w-10 h-[2px] bg-[#FFC000] mb-5"></div>
            <ul className="space-y-2.5">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[#a1a1aa] hover:text-[#FFC000] transition-colors duration-200 text-[13.5px]"
                  >
                    <span className="w-0 group-hover:w-3 h-[1.5px] bg-[#FFC000] transition-all duration-300 rounded-full flex-shrink-0"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact US */}
          <div>
            {/* Heading with gold underline */}
            <h4 className="text-white font-bold mb-1 text-[17px]">Contact US</h4>
            <div className="w-10 h-[2px] bg-[#FFC000] mb-5"></div>

            <p className="text-[#e4e4e7] text-[13.5px] mb-4 font-semibold">Golden Wings</p>

            <div className="grid grid-cols-[108px_14px_1fr] gap-y-2 text-[13.5px] mb-5">
              {branches.map((branch, i) => (
                <div className="contents" key={i}>
                  <span className="text-[#a1a1aa]">{branch.name}</span>
                  <span className="text-[#a1a1aa] text-center">:</span>
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-[#e4e4e7] hover:text-[#FFC000] transition-colors duration-200">
                    {branch.phone}
                  </a>
                </div>
              ))}
            </div>

            <a href="mailto:goldenwingstaxsolutions@gmail.com" className="text-[#a1a1aa] hover:text-[#FFC000] transition-colors duration-200 text-[13px] break-all">
              goldenwingstaxsolutions@gmail.com
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom bar — centered, copyright + social icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <p className="text-[#71717a] text-[13px] text-center">
            © 2025 All Rights Reserved | Powered By <span className="text-white font-medium">Golden Wings</span>.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 border border-white/10 hover:text-[#FFC000] hover:border-[#FFC000]/50 hover:-translate-y-1 transition-all duration-200"
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
