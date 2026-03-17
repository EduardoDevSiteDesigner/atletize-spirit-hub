import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const athletics = [
  { src: "/atleticas/olimpo.png", alt: "Atlética Olimpo - Direito FUNEPE" },
  { src: "/atleticas/ufpr-edfisica.png", alt: "Atlética Educação Física UFPR Litoral" },
  { src: "/atleticas/fisioterapia-fmabc-new.png", alt: "A.A. Atlética Fisioterapia FMABC" },
  { src: "/atleticas/odontologia.png", alt: "Atlética AAAO UNISO Odontologia" },
  { src: "/atleticas/monetaria.png", alt: "A.A.A. Monetária UFU" },
  { src: "/atleticas/cefet-rj.png", alt: "Atlética CEFET RJ Nova Iguaçu" },
  { src: "/atleticas/engenharia-producao.png", alt: "Atlética Engenharia de Produção UFPR" },
  { src: "/atleticas/fkb-itapetininga-new.png", alt: "Atlética FKB Itapetininga" },
  { src: "/atleticas/ursao-uniamerica.png", alt: "Atlética Ursão Uniamerica" },
  { src: "/atleticas/financas-ucp.png", alt: "Atlética de Finanças UCP" },
];

interface AthleticIconProps {
  src: string;
  alt: string;
  index: number;
}

function AthleticIcon({ src, alt, index }: AthleticIconProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
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
      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center p-4 group overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

export function TrustedAthleticsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);

  return (
    <section id="atleticas" className="section-padding bg-background">
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
            Parceiros
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
            ATLÉTICAS QUE <span className="gradient-text">CONFIAM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atléticas universitárias de todo o Brasil que já escolheram a ATLETIZE para seus produtos personalizados
          </p>
        </div>

        {/* Athletics Grid - 5 columns, 2 rows */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 lg:gap-10 justify-items-center max-w-4xl mx-auto">
          {athletics.map((athletic, index) => (
            <AthleticIcon 
              key={index} 
              src={athletic.src} 
              alt={athletic.alt} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
