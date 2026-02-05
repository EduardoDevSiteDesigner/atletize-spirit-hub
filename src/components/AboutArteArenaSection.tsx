import { ScrollReveal } from "./ScrollReveal";
import logoArteArena from "@/assets/logo-artearena.jpg";

export function AboutArteArenaSection() {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Conheça nossa história
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
              SOBRE A <span className="gradient-text">ARTE ARENA</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Content - Text Left, Logo Right */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* Text */}
            <div className="flex-1 space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Arte Arena, o seu destino criativo para transformar ideias em estampas personalizadas excepcionais. Somos uma marca apaixonada por expressão individual e pela arte que se manifesta através de materiais estampáveis exclusivos.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Na Arte Arena, acreditamos que cada pessoa tem uma história única a contar, e é por meio da personalização que ajudamos a contar essas histórias de maneira única e vibrante. Nossa missão é proporcionar a você a liberdade de criar, imprimir e vestir suas ideias, tornando-as tangíveis e visíveis para o mundo.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entramos em campo em 2016. Naquela época, Arte Arena era apenas um 'time de um jogador só' (fundador Gabriel Felix Gomes), ganhando experiência, mas de olho nas melhores oportunidades do jogo, a fim de marcar o primeiro 'gol': pioneirismo na venda de bandeiras de impressão digital pela internet.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Assim, a Arte Arena estabeleceu-se como um dos principais players do segmento, com cerca de 80 produtos personalizáveis. Com uma grande variedade de opções tanto de produtos quanto do material utilizado na impressão.
              </p>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logoArteArena} 
                alt="Arte Arena" 
                className="w-48 md:w-64 lg:w-72 h-auto"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
