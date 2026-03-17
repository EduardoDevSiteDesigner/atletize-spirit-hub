import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Send, Check } from "lucide-react";

const WHATSAPP_NUMBER = "5511934881548";

const products = [
  { id: "bandeira", label: "Bandeira", emoji: "🏳️" },
  { id: "caneca", label: "Caneca de Alumínio", emoji: "☕" },
  { id: "tirante", label: "Tirante", emoji: "🎗️" },
  { id: "sacochila", label: "Sacochilas", emoji: "🎒" },
  { id: "cachecol", label: "Cachecol", emoji: "🧣" },
  { id: "faixa", label: "Faixas de Mão", emoji: "✊" },
  { id: "uniforme", label: "Uniforme", emoji: "👕" },
];

export function QuoteSection() {
  const [step, setStep] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [cep, setCep] = useState("");

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return digits;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatCep(e.target.value));
  };

  const sendWhatsApp = () => {
    const productNames = selectedProducts
      .map((id) => products.find((p) => p.id === id)?.label)
      .join(", ");
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para os seguintes produtos:\n\n` +
      `📦 Produtos: ${productNames}\n` +
      `📍 CEP: ${cep}\n\n` +
      `Podem me ajudar?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="orcamento" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Orçamento Rápido
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-wide">
              MONTE SEU <span className="gradient-text">PEDIDO</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Selecione os produtos, personalize os detalhes e receba seu orçamento no WhatsApp em minutos.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress */}
        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-display text-lg transition-colors ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              {step > 1 ? <Check className="w-5 h-5" /> : "1"}
            </div>
            <div className={`h-1 w-16 rounded-full transition-colors ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-display text-lg transition-colors ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              2
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-lg">
            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  ESCOLHA OS PRODUTOS
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Selecione um ou mais produtos para o orçamento.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {products.map((product) => {
                    const isSelected = selectedProducts.includes(product.id);
                    return (
                      <button
                        key={product.id}
                        onClick={() => toggleProduct(product.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all text-center
                          ${isSelected
                            ? "border-primary bg-primary/10 shadow-md scale-[1.02]"
                            : "border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/60"
                          }`}
                      >
                        <span className="text-3xl">{product.emoji}</span>
                        <span className={`font-medium text-sm ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {product.label}
                        </span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-end mt-8">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={selectedProducts.length === 0}
                    className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all group"
                  >
                    Próximo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  INFORME SEU CEP
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Precisamos do CEP para calcular o frete.
                </p>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-3">Produtos selecionados:</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProducts.map((id) => {
                      const product = products.find((p) => p.id === id);
                      return (
                        <span key={id} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {product?.emoji} {product?.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <Input
                  type="text"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  className="text-lg p-6 rounded-2xl mb-8 max-w-xs"
                  maxLength={9}
                />

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="font-semibold px-6 py-3 rounded-2xl"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                  <Button
                    onClick={sendWhatsApp}
                    disabled={cep.replace(/\D/g, "").length < 8}
                    className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all group"
                  >
                    Enviar pelo WhatsApp
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
