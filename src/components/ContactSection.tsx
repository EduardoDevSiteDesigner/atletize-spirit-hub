import { useState } from "react";
import { Send, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50">
            <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome*
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email*
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Celular*
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cidade*
                  </label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Sua cidade"
                    required
                    className="rounded-xl h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>

              <p className="text-sm text-muted-foreground">
                Ao informar meus dados, estou ciente das diretrizes da Política de Privacidade.
              </p>

              <Button 
                type="submit"
                className="w-full gradient-bg text-primary-foreground font-semibold py-6 rounded-2xl hover:opacity-90 transition-all group text-lg"
              >
                Entrar em contato
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <div className="font-semibold text-foreground">contato@atletize.com.br</div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-foreground">(11) 99999-9999</div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Localização</div>
                  <div className="font-semibold text-foreground">São Paulo - SP</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h4 className="font-display text-xl text-foreground mb-4 tracking-wide">
                Siga-nos nas redes sociais!
              </h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
              <h4 className="font-display text-xl text-foreground mb-4 tracking-wide">
                Horários de Atendimento
              </h4>
              <div className="space-y-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}