import { useState, useEffect } from 'react';
import NavbarSection from './components/NavbarSection';
import HeroSection from './components/HeroSection';
import StatsBand from './components/StatsBand';
import SpecialtiesSection from './components/SpecialtiesSection'; 
import HowSection from './components/HowSection';
import DoctorsSection from './components/DoctorsSection';
import HospitalsSection from './components/HospitalSection';
import ServicesSection from './components/ServicesSection';
import AppSection from './components/AppSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import PartnerSection from './components/PartnerSection';
import FooterSection from './components/FooterSection';
import './App.css';


export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarSection scrolled={scrolled} />
      <HeroSection />
      <StatsBand />
      <SpecialtiesSection />
      <HowSection />
      <DoctorsSection />
      <HospitalsSection />
      <ServicesSection />
      <AppSection />
      <TestimonialsSection />
      <NewsSection />
      <PartnerSection />
      <FooterSection />
    </>
  );
}
