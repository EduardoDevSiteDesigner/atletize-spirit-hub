import { ArrowDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.querySelector("#produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-3xl rotate-12 animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-white/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-xl rotate-45 animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-white fill-white" />
            <span className="text-white/90 text-sm font-medium">
              Especialistas em Atléticas Universitárias
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AS CORES DA SUA
            <br />
            <span className="text-white/90">PAIXÃO</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Te acompanham na <span className="font-bold text-white">ATLETIZE!</span>
          </p>

          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Bandeirões, uniformes, canecas, sacochilas e muito mais. 
            Tudo personalizado com a cara da sua atlética.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={scrollToProducts}
              className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-2xl transition-all hover:scale-105 shadow-xl"
            >
              Ver Produtos
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-2xl transition-all"
            >
              Fazer Orçamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-white">500+</div>
              <div className="text-white/70 text-sm mt-1">Atléticas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-white">10k+</div>
              <div className="text-white/70 text-sm mt-1">Produtos Entregues</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-white">5★</div>
              <div className="text-white/70 text-sm mt-1">Avaliação Média</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}