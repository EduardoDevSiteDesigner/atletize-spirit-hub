import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Tem pedido mínimo?",
    answer: "Sim, cada produto tem sua quantidade mínima. Por exemplo, canecas de alumínio têm mínimo de 20 unidades. Entre em contato para saber mais sobre quantidades específicas de cada produto."
  },
  {
    question: "E qual a média de tempo para entregar?",
    answer: "O prazo médio de produção é de 10 dias úteis após pagamento e aprovação da arte. Após o envio, o prazo de entrega depende da transportadora escolhida e da localização."
  },
  {
    question: "Tenho uma ideia, mas não tenho a arte ainda, vocês produzem esboços?",
    answer: "Sim! Nossa equipe de design pode ajudar você a criar o esboço e desenvolver a arte para seu produto personalizado."
  },
  {
    question: "Tem uma cor muito específica que eu não sei o nome, como proceder?",
    answer: "Não se preocupe! Você pode nos enviar uma referência visual ou código de cor (se tiver) que nossa equipe ajudará a identificar e reproduzir a cor desejada."
  },
  {
    question: "Vocês trabalham com outros tecidos na confecção das bandeiras?",
    answer: "Trabalhamos principalmente com Poliéster Microfibra, que oferece excelente qualidade de impressão e durabilidade. Para outras opções, consulte nossa equipe."
  },
  {
    question: "O frete está incluso no preço?",
    answer: "Não, o frete é calculado separadamente conforme a localização de entrega e as dimensões do pedido. Solicite um orçamento para saber o valor total."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
            PRINCIPAIS <span className="gradient-text">DÚVIDAS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Respondemos as perguntas mais frequentes sobre nossos produtos e serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border/50 px-6 data-[state=open]:shadow-lg transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}