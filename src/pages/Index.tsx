import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BlogGrid from "@/components/BlogGrid";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <BlogGrid />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
