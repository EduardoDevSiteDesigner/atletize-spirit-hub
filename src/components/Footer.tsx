import { Instagram, Facebook, Youtube } from "lucide-react";
import logoFooter from "@/assets/logo-atletize-footer.png";

const socialLinks = [
  { href: "https://www.instagram.com/arte_arena/", label: "Instagram", icon: <Instagram className="w-5 h-5 text-white" /> },
  { href: "https://www.facebook.com/artearena.com.br/", label: "Facebook", icon: <Facebook className="w-5 h-5 text-white" /> },
  { href: "https://www.youtube.com/@artearena", label: "YouTube", icon: <Youtube className="w-5 h-5 text-white" /> },
];

export function Footer() {
  return (
    <footer className="gradient-bg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left - Logo, Description & Nav Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={logoFooter} 
              alt="ATLETIZE" 
              className="h-14 w-auto"
            />
            <p className="text-white/90 text-sm font-medium">
              Uma marca Arte Arena
            </p>
            <p className="text-white/60 text-sm leading-relaxed md:text-left text-center max-w-md">
              A Arte Arena é sua parceira ideal na criação de materiais personalizados que refletem a identidade única de cada cliente. Desde nossa fundação, nos dedicamos a oferecer produtos de alta qualidade, combinando criatividade, inovação e um compromisso inabalável com a satisfação do cliente.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-white/80 text-sm mt-2">
              <a href="#" className="hover:text-white transition-colors">Início</a>
              <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
              <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </nav>
          </div>

          {/* Right - Links Úteis & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-display text-sm uppercase tracking-wider">Links Úteis</h4>
            <nav className="flex flex-col items-center md:items-start gap-2 text-white/80 text-sm">
              <a href="#sobre" className="hover:text-white transition-colors">Quem somos</a>
              <a href="#" className="hover:text-white transition-colors">Visite nosso BLOG</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a>
              <a href="#contato" className="hover:text-white transition-colors">Trabalhe Conosco</a>
              <a href="#" className="hover:text-white transition-colors">Simulador de Uniformes</a>
            </nav>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8" />

        {/* Copyright */}
        <div className="text-center text-white/60 text-xs">
          <p>© {new Date().getFullYear()} ATLETIZE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
