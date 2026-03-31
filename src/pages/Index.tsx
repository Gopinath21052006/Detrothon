import ParticleField from '@/components/ParticleField';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TracksSection from '@/components/TracksSection';
import TimelineSection from '@/components/TimelineSection';
import ProblemsSection from '@/components/ProblemsSection';
import PrizesSection from '@/components/PrizesSection';
import HowToParticipate from '@/components/HowToParticipate';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import RegisterSection from '@/components/RegisterSection';
import Footer from '@/components/Footer';
import WhatsAppButton from "@/components/WhatsAppButton";
import StaffCoordinators from '@/components/StaffCoordinators';
import ShortlistPopup from "@/components/ShortlistPopup";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <GridBackground />
      <ParticleField />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <TimelineSection />
        <ProblemsSection />
        <PrizesSection />
        <WhatsAppButton />
        <ShortlistPopup />
        <HowToParticipate />
        <TeamSection />
        <StaffCoordinators />
        <FAQSection />
        <RegisterSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
