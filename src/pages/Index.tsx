import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import StageSupport from "@/components/StageSupport";
import SuccessStories from "@/components/SuccessStories";
import EngagementModels from "@/components/EngagementModels";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import HireDeveloper from "@/components/HireDeveloper";
import Footer from "@/components/Footer";
import ContactStatsSection from "@/components/ContactStatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <ClientLogos />
      <Services />
      <StageSupport />
      <SuccessStories />
      <EngagementModels />
      <Industries />
      <CaseStudies />
      <HireDeveloper />
      <ContactStatsSection />
      <Footer />
    </div>
  );
};

export default Index;
