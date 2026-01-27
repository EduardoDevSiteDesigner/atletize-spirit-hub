import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  priceFrom?: string;
  hideFromPrefix?: boolean;
  isReversed?: boolean;
}

export function ProductCard({ 
  title, 
  description, 
  image, 
  features, 
  priceFrom,
  hideFromPrefix = false,
  isReversed = false 
}: ProductCardProps) {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      {/* Image */}
      <div className="flex-1 w-full">
        <div className="relative group">
          <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <h3 className="font-display text-4xl md:text-5xl text-primary mb-4 tracking-wide">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {priceFrom && (
          <div className="mb-6">
            {!hideFromPrefix && <span className="text-sm text-muted-foreground">A partir de</span>}
            <div className="font-display text-3xl text-primary">{priceFrom}</div>
          </div>
        )}

        <Button 
          onClick={scrollToContact}
          className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all group"
        >
          Fazer Pedido
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}