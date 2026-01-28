import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "BANDEIRÕES",
    description: "Aquele que faz a arquibancada tremer e impõe respeito contra os rivais. Bandeiras personalizadas em diversos tamanhos para sua atlética dominar os jogos.",
    features: [
      "Tecido Poliéster Microfibra de alta durabilidade",
      "Impressão digital em alta definição",
      "Escolha o tamanho que quiser",
      "Ilhoses para fácil fixação",
      "Prazo: 10 dias úteis após aprovação"
    ],
    priceFrom: "R$ 35,00"
  },
  {
    title: "CANECA DE ALUMÍNIO + TIRANTE",
    description: "O par inseparável do universitário. Mantém a bebida gelada e o estilo da sua gestão sempre no peito. Disponível em diversas cores e tamanhos.",
    features: [
      "Canecas de 300ml até 750ml",
      "Cores sólidas, metálicas e neon",
      "Tirante personalizado com argola inclusa",
      "Materiais de alta qualidade",
      "Mínimo de 20 unidades"
    ],
    priceFrom: "R$ 17,40"
  },
  {
    title: "SACOCHILAS",
    description: "Praticidade total para carregar o kit sobrevivência do rolê ou os itens do jogo. Sistema de fechamento ajustável e estampa premium em alta definição.",
    features: [
      "Sistema de fechamento ajustável",
      "Estampa premium de alta definição",
      "Acabamento de alta qualidade",
      "Ideal para eventos e jogos",
      "Mínimo de 10 unidades"
    ],
    priceFrom: "R$ 17,90"
  },
  {
    title: "CACHECÓIS E FAIXAS",
    description: "Acessórios essenciais para torcer com estilo. Cachecóis personalizados em uma ou duas faces e faixas de mão para agitar a arquibancada.",
    features: [
      "Cachecóis 18x130cm uma ou duas faces",
      "Faixas de mão 70x20cm e 100x25cm",
      "Cores vibrantes e duráveis",
      "Perfeito para jogos e eventos",
      "Preços especiais para grandes quantidades"
    ],
    priceFrom: "R$ 5,00"
  },
  {
    title: "UNIFORMES PERSONALIZADOS",
    description: "Produzidos sob medida, a ATLETIZE permite a criação do uniforme da sua equipe de forma simples e rápida. Altere estampas, acabamentos, nome/número e patrocínios!",
    features: [
      "Personalização completa de estampas",
      "Acabamentos de alta qualidade",
      "Nome e número personalizados",
      "Espaço para patrocínios",
      "Mínimo de 10 unidades"
    ],
    priceFrom: "Consulte nossos preços",
    hideFromPrefix: true
  }
];

export function ProductsSection() {
  return (
    <section id="produtos" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nossos Produtos
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
              TUDO PARA SUA <span className="gradient-text">ATLÉTICA!</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Produtos personalizados de alta qualidade para destacar sua atlética em todos os eventos
            </p>
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="space-y-20 md:space-y-32">
          {products.map((product, index) => (
            <ScrollReveal 
              key={product.title}
              delay={index * 100}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <ProductCard 
                {...product} 
                isReversed={index % 2 !== 0}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-20">
            <Button 
              asChild
              className="gradient-bg text-primary-foreground font-display text-xl px-10 py-6 rounded-2xl hover:opacity-90 transition-all group"
            >
              <a 
                href="https://artearena.com.br/categorias/atletica/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                CONHEÇA TODOS OS NOSSOS PRODUTOS
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
