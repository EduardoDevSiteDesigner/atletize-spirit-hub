import heroDesktop from "@/assets/hero-desktop.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="pt-16">
      {/* Desktop */}
      <a href="#orcamento" className="hidden md:block w-full cursor-pointer">
        <img
          src={heroDesktop}
          alt="Atletize - Produtos personalizados para atléticas"
          className="w-full h-auto"
        />
      </a>
      {/* Mobile */}
      <a href="#orcamento" className="block md:hidden w-full cursor-pointer">
        <img
          src={heroMobile}
          alt="Atletize - Produtos personalizados para atléticas"
          className="w-full h-auto"
        />
      </a>
    </section>
  );
}
