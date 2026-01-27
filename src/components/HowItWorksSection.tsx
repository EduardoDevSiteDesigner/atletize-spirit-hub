import { UserPlus, MessageSquare, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Cadastre-se!",
    description: "Crie uma conta ou faça login para começar seu pedido personalizado."
  },
  {
    icon: MessageSquare,
    title: "Fale com a Gente",
    description: "Diga o que precisa, que faremos acontecer. Traga sua arte ou solicite um esboço, defina o material e a quantidade."
  },
  {
    icon: CheckCircle,
    title: "Pedido Confirmado",
    description: "Pagamento efetuado, o pedido será fabricado com toda qualidade que você merece!"
  },
  {
    icon: Truck,
    title: "Envio Rápido",
    description: "Após o envio, você recebe o código de rastreio para acompanhar seu pedido até a entrega!"
  }
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Processo Simples
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
            COMO <span className="gradient-text">FUNCIONA?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em poucos passos, sua atlética terá os melhores produtos personalizados
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all card-hover border border-border/50">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/10">
          <p className="text-muted-foreground text-center">
            <span className="font-semibold text-foreground">Obs:</span> Fique atento às orientações e feedback da equipe de design para garantir que a arte seja adequada para a estampagem.
          </p>
        </div>
      </div>
    </section>
  );
}