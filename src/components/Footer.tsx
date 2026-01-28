import logoWhite from "@/assets/logo-atletize-white.png";

export function Footer() {
  return (
    <footer className="gradient-bg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <img 
            src={logoWhite} 
            alt="ATLETIZE" 
            className="h-16 w-auto"
          />
          <p className="text-white/90 text-lg">
            Uma marca Arte Arena
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
