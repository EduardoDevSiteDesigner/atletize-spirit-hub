import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5511934881548";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  priceFrom?: string;
  hideFromPrefix?: boolean;
  isReversed?: boolean;
  image?: string;
  imageAlt?: string;
}

export function ProductCard({ 
  title, 
  description, 
  features, 
  priceFrom,
  hideFromPrefix = false,
  isReversed = false,
  image,
  imageAlt
}: ProductCardProps) {
  const openWhatsAppPedido = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse em ${title}. Gostaria de mais informações e fazer um orçamento.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      {/* Product Image */}
      <div className="flex-1 w-full">
        <div className="relative group">
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-3xl shadow-2xl overflow-hidden">
            <img 
              src={image} 
              alt={imageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 max-w-[720px]"
            />
          </div>
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
          onClick={openWhatsAppPedido}
          className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all group"
        >
          Fazer Pedido
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
