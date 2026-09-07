import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventCalendar from './components/EventCalendar';
import VideoBlog from './components/VideoBlog';
import Sponsors from './components/Sponsors';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-950">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <div id="etkinlikler">
          <EventCalendar />
        </div>
        <VideoBlog />
        <Sponsors />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}