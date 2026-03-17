import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logoFooter from "@/assets/logo-atletize-footer.png";

const TikTokIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { href: "https://www.instagram.com/arte_arena/", label: "Instagram", icon: <Instagram className="w-5 h-5 text-white" /> },
  { href: "https://www.facebook.com/artearena.com.br/", label: "Facebook", icon: <Facebook className="w-5 h-5 text-white" /> },
  { href: "https://www.youtube.com/@artearena", label: "YouTube", icon: <Youtube className="w-5 h-5 text-white" /> },
  { href: "https://www.tiktok.com/@artearena", label: "TikTok", icon: <TikTokIcon /> },
  { href: "https://x.com/artearena", label: "X", icon: <XIcon /> },
  { href: "https://www.linkedin.com/company/artearena", label: "LinkedIn", icon: <Linkedin className="w-5 h-5 text-white" /> },
];

export function Footer() {
  return (
    <footer className="gradient-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left - Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img 
              src={logoFooter} 
              alt="ATLETIZE" 
              className="h-14 w-auto"
            />
            <p className="text-white/90 text-sm">
              Uma marca Arte Arena
            </p>
            <p className="text-white/60 text-xs leading-relaxed md:text-left text-center">
              A Arte Arena é sua parceira ideal na criação de materiais personalizados que refletem a identidade única de cada cliente.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navegação</h4>
            <nav className="flex flex-col items-center gap-2 text-white/80 text-sm">
              <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
              <a href="#galeria" className="hover:text-white transition-colors">Portfólio</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
              <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </nav>
          </div>

          {/* Right - Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
          <p className="mt-1">Seus dados estão protegidos conosco.</p>
        </div>
      </div>
    </footer>
  );
}
