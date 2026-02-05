import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const brands = [
  { src: "/marcas/palmeiras.png", alt: "Palmeiras" },
  { src: "/marcas/saopaulo.png", alt: "São Paulo FC" },
  { src: "/marcas/nubank.png", alt: "Nubank" },
  { src: "/marcas/heineken.png", alt: "Heineken" },
  { src: "/marcas/corinthians.png", alt: "Corinthians" },
  { src: "/marcas/ambev.png", alt: "Ambev" },
  { src: "/marcas/puma.png", alt: "Puma" },
  { src: "/marcas/adidas.png", alt: "Adidas" },
  { src: "/marcas/petrobras.png", alt: "Petrobras" },
  { src: "/marcas/amazon.png", alt: "Amazon" },
  { src: "/marcas/tommy.png", alt: "Tommy Hilfiger" },
  { src: "/marcas/mcdonalds.png", alt: "McDonald's" },
  { src: "/marcas/santos.png", alt: "Santos FC" },
  { src: "/marcas/eudora.png", alt: "Eudora" },
  { src: "/marcas/f1.png", alt: "Formula 1" },
];

interface BrandIconProps {
  src: string;
  alt: string;
  index: number;
}

function BrandIcon({ src, alt, index }: BrandIconProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  // Calcula delay baseado na posição (linha e coluna)
  const row = Math.floor(index / 5);
  const col = index % 5;
  const delay = (row * 100) + (col * 80);

  if (!src) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 scale-100 translate-y-0" 
          : "opacity-0 scale-50 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center p-4 group overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

export function TrustedBrandsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);

  return (
    <section id="marcas" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out",
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Credibilidade
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
            MARCAS QUE <span className="gradient-text">CONFIAM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Grandes empresas e instituições que já escolheram a Arte Arena para seus projetos
          </p>
        </div>

        {/* Brands Grid - 5 columns, 3 rows */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12 justify-items-center max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <BrandIcon 
              key={index} 
              src={brand.src} 
              alt={brand.alt} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
