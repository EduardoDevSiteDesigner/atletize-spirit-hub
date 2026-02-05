import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5511934881548";

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.querySelector("#produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsAppOrcamento = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um orçamento para produtos personalizados da minha atlética. Podem me ajudar?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 pb-32"
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
          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wider animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AS CORES DA SUA PAIXÃO TE ACOMPANHAM NA ATLETIZE!
          </h1>

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
              onClick={openWhatsAppOrcamento}
              className="bg-primary-light border-2 border-white text-white hover:bg-primary-light/80 font-bold px-8 py-6 text-lg rounded-2xl transition-all"
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
      </div>
    </section>
  );
}