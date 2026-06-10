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

const Home = () => {
  return (
    <div className="bg-primary overflow-hidden">
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
