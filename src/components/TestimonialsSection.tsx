import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Atlética Leão",
    university: "Universidade Federal",
    text: "Entrega dentro do prazo (até mais rápido do que esperávamos), produto de extrema qualidade! A atlética inteira aprovou os bandeirões.",
    rating: 5
  },
  {
    name: "AAA Medicina",
    university: "USP",
    text: "Fizemos uniformes e canecas personalizadas. O atendimento foi excepcional e os produtos superaram nossas expectativas. Recomendo!",
    rating: 5
  },
  {
    name: "Atlética Biomedicina",
    university: "UNESP",
    text: "Já é o terceiro pedido que fazemos. Qualidade impecável, prazos cumpridos e preço justo. A ATLETIZE é nossa parceira oficial!",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
            QUEM <span className="gradient-text">CONFIA</span> NA ATLETIZE
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A opinião de quem já consolidou suas ideias conosco
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.university}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}