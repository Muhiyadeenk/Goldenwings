import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Courses from '../components/Courses';
import Opportunities from '../components/Opportunities';
import GlobalPresence from '../components/GlobalPresence';
import CEO from '../components/CEO';
import Features from '../components/Features';
import Stats from '../components/Stats';
import ClientStats from '../components/ClientStats';
import CorePartners from '../components/CorePartners';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import SuccessStories from '../components/SuccessStories';
import SEO from '../components/SEO';

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.goldenwingsac.com/#organization",
        "name": "Golden Wings",
        "url": "https://www.goldenwingsac.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.goldenwingsac.com/cropped-logo-og-png.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9061515616",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.facebook.com/goldenwingsglobal/",
          "https://www.instagram.com/golden_wings_official_/",
          "https://www.youtube.com/@golden_wings_official_"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.goldenwingsac.com/#website",
        "url": "https://www.goldenwingsac.com/",
        "name": "Golden Wings",
        "description": "Global Business Solution & Education Center",
        "publisher": {
          "@id": "https://www.goldenwingsac.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="bg-primary overflow-hidden">
      <SEO 
        title="Golden Wings | Global Business Solution & Education Center"
        description="Golden Wings Global Business Solution & Education Center is a leading educational institute in Kerala providing professional accounting, taxation (GST, Income Tax), and assured placement training."
        canonicalUrl="https://www.goldenwingsac.com/"
        jsonLD={homeSchema}
      />
      <Hero />
      <Opportunities />
      <GlobalPresence />
      <Services />
      <About />
      <ClientStats />
      <CorePartners />
      <Testimonials />
      <Courses />
      <Stats />
      <SuccessStories />
      <Features />
      <FAQ />
      <CEO />
    </div>
  );
};

export default Home;
