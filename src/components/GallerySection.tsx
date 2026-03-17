import { ScrollReveal } from "./ScrollReveal";

const galleryImages = [
  { src: "/galeria/bandeira-insano.png", alt: "Bandeira Insano AAATI UP" },
  { src: "/galeria/bandeira-ufabc.png", alt: "Bandeira UFABC Biotecnologia" },
  { src: "/galeria/bandeira-aaaef.png", alt: "Bandeira AAAEF Educação Física" },
  { src: "/galeria/bandeira-garra.png", alt: "Bandeira Garra Amarela" },
  { src: "/galeria/bandeira-soberano.png", alt: "Bandeira Soberano AAAFAC" },
  { src: "/galeria/bandeira-severa.png", alt: "Bandeira Severa Medicina Guarulhos" },
  { src: "/galeria/bandeira-tritoes.png", alt: "Bandeira Tritões AAAEFU" },
  { src: "/galeria/bandeira-magistral.png", alt: "Bandeira Magistral UFBA" },
  { src: "/galeria/bandeira-viboras.png", alt: "Bandeira Víboras Enfermagem" },
  { src: "/galeria/bandeira-ousadamed.png", alt: "Bandeira Ousadamed Medicina UNIAG" },
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

        {/* Two Column Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl bg-secondary/30 aspect-square group">
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
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
