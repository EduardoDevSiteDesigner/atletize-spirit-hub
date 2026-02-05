import logoFooter from "@/assets/logo-atletize-footer.png";

export function Footer() {
  return (
    <footer className="gradient-bg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <img 
            src={logoFooter} 
            alt="ATLETIZE" 
            className="h-16 w-auto"
          />
          <p className="text-white/90 text-lg">
            Uma marca Arte Arena
          </p>
          
          {/* About Arte Arena */}
          <p className="text-white/70 text-xs max-w-2xl text-center leading-relaxed mt-2">
            A Arte Arena é sua parceira ideal na criação de materiais personalizados que refletem a identidade única de cada cliente. Desde nossa fundação, nos dedicamos a oferecer produtos de alta qualidade, combinando criatividade, inovação e um compromisso inabalável com a satisfação do cliente. Nossa missão é transformar suas ideias em realidade, proporcionando produtos que não apenas atendem, mas superam suas expectativas.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8" />

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-white/80 mb-8">
          <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} ATLETIZE. Todos os direitos reservados.</p>
          <p className="mt-2">
            Seus dados estão protegidos conosco.
          </p>
        </div>
      </div>
    </footer>
  );
}
