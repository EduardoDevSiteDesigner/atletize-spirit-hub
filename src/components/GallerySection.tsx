import { ScrollReveal } from "./ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  { src: "/galeria/bandeirao-pantera.png", alt: "Bandeirão Direito Pantera Roxa" },
  { src: "/galeria/mosaico-onca.heic", alt: "Mosaico Onça Pintada" },
  { src: "/galeria/faixa-capitao.heic", alt: "Faixa de Capitão Eagle" },
  { src: "/galeria/cachecol-med.heic", alt: "Cachecol Med Alfenas" },
  { src: "/galeria/sacochila-ursao.heic", alt: "Sacochila Ursão" },
  { src: "/galeria/bandeira-leao.heic", alt: "Bandeira Leão AAEEF" },
  { src: "/galeria/bandeira-raposa.heic", alt: "Bandeira Atlética Insano Raposa" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nosso Portfólio
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
              TRABALHOS <span className="gradient-text">REALIZADOS</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Confira alguns dos produtos que já produzimos para atléticas de todo o Brasil
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={200}>
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative overflow-hidden rounded-2xl bg-secondary/30 aspect-square group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-medium text-sm">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/90 border-none -left-4" />
              <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/90 border-none -right-4" />
            </Carousel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
