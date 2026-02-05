import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Custom TikTok Icon (not in Lucide)
const TikTokIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// Custom X (Twitter) Icon
const XIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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
          <ScrollReveal delay={300}>
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center mt-8">
              <h4 className="font-display text-xl text-foreground mb-4 tracking-wide">
                Siga-nos nas redes sociais!
              </h4>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://www.instagram.com/arte_arena/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/artearena.com.br/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.youtube.com/@artearena" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.tiktok.com/@artearena" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
                <a 
                  href="https://x.com/artearena" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <XIcon />
                </a>
                <a 
                  href="https://www.linkedin.com/company/artearena" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal delay={400}>
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
