import heroDesktop from "@/assets/hero-desktop.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="pt-16">
      {/* Desktop */}
      <div className="hidden md:block w-full">
        <img
          src={heroDesktop}
          alt="Atletize - Produtos personalizados para atléticas"
          className="w-full h-auto"
        />
      </div>
      {/* Mobile */}
      <div className="block md:hidden w-full">
        <img
          src={heroMobile}
          alt="Atletize - Produtos personalizados para atléticas"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
