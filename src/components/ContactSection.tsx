import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Entre em contato
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
              FALE COM A <span className="gradient-text">ATLETIZE</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ficou com alguma dúvida? Quer fazer um orçamento ou consultar sobre nossos serviços?
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Cards */}
          <ScrollReveal delay={100}>
            <div className="grid gap-4 mb-8">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <a 
                    href="mailto:contato@artearena.com.br" 
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    contato@artearena.com.br
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <a 
                    href="https://wa.me/5511934881548" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    +55 11 93488-1548
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Localização</div>
                  <a 
                    href="https://maps.google.com/?q=Av.+Dr.+Luís+Arrobas+Martins,+335+-+Interlagos+Zona+Sul,+São+Paulo+-+SP,+04781-000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Av. Dr. Luís Arrobas Martins, 335 - Interlagos Zona Sul, São Paulo - SP, 04781-000
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Social Media */}
          <ScrollReveal delay={200}>
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center">
              <h4 className="font-display text-xl text-foreground mb-4 tracking-wide">
                Siga-nos nas redes sociais!
              </h4>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.instagram.com/arte_arena/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/artearena.com.br/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal delay={300}>
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 mt-8">
              <h4 className="font-display text-xl text-foreground mb-4 tracking-wide text-center">
                Horários de Atendimento
              </h4>
              <div className="space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a quinta-feira</span>
                  <span className="font-semibold text-foreground">08h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sexta-feira</span>
                  <span className="font-semibold text-foreground">08h às 17h</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
