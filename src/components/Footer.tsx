import logo from "@/assets/logo-atletize.jpg";

export function Footer() {
  return (
    <footer className="gradient-bg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="ATLETIZE" 
              className="h-12 w-auto rounded-lg"
            />
            <div>
              <span className="font-display text-2xl text-white tracking-wider">
                ATLETIZE
              </span>
              <p className="text-white/70 text-sm">
                Sua paixão, nossa bandeira!
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-white/80">
            <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8" />

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