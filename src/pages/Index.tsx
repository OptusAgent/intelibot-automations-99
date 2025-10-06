import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BlogGrid from "@/components/BlogGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <BenefitsSection />
        <HowItWorksSection />
        <BlogGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
