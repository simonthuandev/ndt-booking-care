import { useState, useEffect } from 'react';
import NavbarSection from '../components/Home/NavbarSection';
import HeroSection from '../components/Home/HeroSection';
import StatsBand from '../components/Home/StatsBand';
import SpecialtiesSection from '../components/Home/SpecialtiesSection'; 
import HowSection from '../components/Home/HowSection';
import DoctorsSection from '../components/Home/DoctorsSection';
import HospitalsSection from '../components/Home/HospitalSection';
import ServicesSection from '../components/Home/ServicesSection';
import AppSection from '../components/Home/AppSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import NewsSection from '../components/Home/NewsSection';
import PartnerSection from '../components/Home/PartnerSection';
import FooterSection from '../components/Home/FooterSection';
import './HomePage.css';


export default function HomePage() {
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
