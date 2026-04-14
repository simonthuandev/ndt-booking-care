import CtaSection from '../components/About/CtaSection';
import MissionSection from '../components/About/MissionSection';
import PageHero from '../components/About/PageHero';
import TeamSection from '../components/About/TeamSection';
import TimelineSection from '../components/About/TimelineSection';
import ValuesSection from '../components/About/ValuesSection';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageHero />
      <MissionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
