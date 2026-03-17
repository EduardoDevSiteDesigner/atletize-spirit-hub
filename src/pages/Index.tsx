import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { GallerySection } from "@/components/GallerySection";
import { TrustedBrandsSection } from "@/components/TrustedBrandsSection";
import { TrustedAthleticsSection } from "@/components/TrustedAthleticsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AboutArteArenaSection } from "@/components/AboutArteArenaSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <GallerySection />
        <TrustedBrandsSection />
        <TrustedAthleticsSection />
        <HowItWorksSection />
        <AboutArteArenaSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
