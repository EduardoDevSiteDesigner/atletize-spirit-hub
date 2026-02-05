import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import testimonialWoman from "@/assets/testimonial-woman.jpg";
import testimonialCouple from "@/assets/testimonial-couple.jpg";
import testimonialManDog from "@/assets/testimonial-man-dog.jpg";

const testimonials = [
  {
    name: "Thay Silva",
    role: "Aluna",
    text: "Nosso bandeirão ainda está em produção, mas já conhecemos o trabalho impecável de vocês, por isso indicamos para todas as atléticas da faculdade. Equipe atenciosa, rápida nas respostas e com muita qualidade no que fazem. Super confiamos e recomendamos!",
    rating: 5,
    image: testimonialWoman
  },
  {
    name: "Matheus Henrique",
    role: "Aluno",
    text: "A bandeira que encomendamos chegou perfeita. Alta qualidade, tecido resistente, e as cores estão incríveis. Ficou muito melhor do que a gente tava esperando. Recomendo sem pensar duas vezes",
    rating: 5,
    image: testimonialCouple
  },
  {
    name: "Pedro Fossatti",
    role: "Aluno",
    text: "Ótima empresa! Recomendo a Arte Bandeira pela qualidade no atendimento até a finalização do produto. As cores ficaram exatamente as indicadas e a do projeto! Muito incrível!",
    rating: 5,
    image: testimonialManDog
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 card-hover relative h-full">
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
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
