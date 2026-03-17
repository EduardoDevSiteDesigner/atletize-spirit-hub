import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "Quais tecidos são usados nas bandeiras das atléticas?",
    answer: "Podemos fabricar em Tactel, Tactel 4 cabos, Bember ou Cetim, dependendo do brilho e da resistência que sua atlética busca para os jogos."
  },
  {
    question: "Qual o prazo de entrega para os pedidos da faculdade?",
    answer: "Nosso prazo é de 10 dias úteis, ideal para planejar o fardamento e os acessórios antes do início dos campeonatos ou festas."
  },
  {
    question: "A Arte Arena envia para atléticas de todo o país?",
    answer: "Sim, nosso envio cobre todo o território nacional, levando o branding da sua atlética para qualquer competição."
  },
  {
    question: "Não temos um designer, vocês ajudam com o esboço?",
    answer: "Sim! Ajudamos a criar uma presença visual que gere credibilidade e orgulho entre os alunos, transformando seus rascunhos em produtos profissionais."
  },
  {
    question: "Além de uniformes e bandeiras, o que mais vocês fazem?",
    answer: "Produzimos mais de 50 produtos diferentes. Sua atlética pode personalizar desde canecas e tirantes até sacochilas e windbanners, consolidando a imagem da marca em todos os eventos."
  },
  {
    question: "Quais as formas de pagamento para a minha atlética?",
    answer: "Para facilitar a organização financeira da gestão, aceitamos PIX, Boleto à vista, Cartão de Débito, Transferência ou Cartão de Crédito parcelado em até 12x."
  },
  {
    question: "Trabalham com prazos de confecção de urgência?",
    answer: "Trabalhamos sim! Possuímos uma estrutura preparada para priorizar a confecção do seu pedido internamente. Mediante negociação de valores e alinhamento das formas de envio, garantimos o tratamento prioritário que sua demanda exige. Entre em contato com nossa equipe comercial para consultar as condições de urgência."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* FAQ Accordion */}
        <ScrollReveal delay={100}>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
