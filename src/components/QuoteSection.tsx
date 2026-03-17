import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Send, Check, Minus, Plus } from "lucide-react";

const WHATSAPP_NUMBER = "5511934881548";

const products = [
  { id: "bandeira", label: "Bandeira", minQty: 1 },
  { id: "caneca", label: "Caneca de Alumínio", minQty: 30 },
  { id: "tirante", label: "Tirante", minQty: 20 },
  { id: "sacochila", label: "Sacochilas", minQty: 10 },
  { id: "cachecol", label: "Cachecol", minQty: 1 },
  { id: "faixa", label: "Faixas de Mão", minQty: 10 },
  { id: "uniforme", label: "Uniforme", minQty: 10 },
  { id: "shorts-doll", label: "Shorts Doll", minQty: 10 },
  { id: "flamula", label: "Flâmula", minQty: 1 },
  { id: "estandarte", label: "Estandarte", minQty: 1 },
  { id: "backdrop", label: "Backdrop", minQty: 1 },
  { id: "almofada", label: "Almofada", minQty: 1 },
];

const categories = [
  { id: "atletica", label: "Atlética Universitária" },
  { id: "terceirao", label: "Terceirão" },
  { id: "interclasse", label: "Interclasse" },
  { id: "outros", label: "Outros" },
];

const categoryMessages: Record<string, string> = {
  atletica: "🎓 Tipo de pedido: Atlética Universitária",
  terceirao: "🎒 Tipo de pedido: Terceirão",
  interclasse: "🏅 Tipo de pedido: Interclasse",
};

export function QuoteSection() {
  const [step, setStep] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cep, setCep] = useState("");
  const [category, setCategory] = useState("");

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const getMinQty = (id: string) => products.find((p) => p.id === id)?.minQty || 1;
  const getQuantity = (id: string) => quantities[id] || getMinQty(id);

  const setQuantity = (id: string, value: number) => {
    const min = getMinQty(id);
    if (value < min) return;
    setQuantities((prev) => ({ ...prev, [id]: value }));
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
    const productLines = selectedProducts
      .map((id) => {
        const product = products.find((p) => p.id === id);
        const qty = getQuantity(id);
        return `• ${product?.label} — Qtd: ${qty}`;
      })
      .join("\n");

    const categoryLine = categoryMessages[category]
      ? `\n${categoryMessages[category]}\n`
      : "";

    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para os seguintes produtos:\n\n` +
      `${productLines}\n\n` +
      `📍 CEP: ${cep}\n` +
      `${categoryLine}\n` +
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
            {[1, 2, 3, 4].map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-display text-lg transition-colors ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {i < 3 && (
                  <div className={`h-1 w-12 rounded-full transition-colors ${step > s ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-lg">
            {/* Step 1: Product Selection */}
            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  ESCOLHA OS PRODUTOS
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Selecione um ou mais produtos para o orçamento.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {products.map((product) => {
                    const isSelected = selectedProducts.includes(product.id);
                    return (
                      <button
                        key={product.id}
                        onClick={() => toggleProduct(product.id)}
                        className={`flex items-center justify-center min-h-[72px] px-4 py-5 rounded-2xl border-2 transition-all text-center relative
                          ${isSelected
                            ? "border-primary bg-primary/10 shadow-md scale-[1.02]"
                            : "border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/60"
                          }`}
                      >
                        <span className={`font-semibold text-base text-center leading-tight ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {product.label}
                        </span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-primary absolute top-2 right-2" />
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

            {/* Step 2: Quantities */}
            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  DEFINA AS QUANTIDADES
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Informe a quantidade desejada para cada produto.
                </p>
                <div className="flex flex-col gap-3">
                  {selectedProducts.map((id) => {
                    const product = products.find((p) => p.id === id);
                    const qty = getQuantity(id);
                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between p-4 rounded-2xl border border-border bg-secondary/30"
                      >
                        <span className="font-medium text-foreground text-sm md:text-base">
                          {product?.label}
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setQuantity(id, qty - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <Input
                            type="number"
                            min={1}
                            value={qty}
                            onChange={(e) => setQuantity(id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center p-1 rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <button
                            onClick={() => setQuantity(id, qty + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="font-semibold px-6 py-3 rounded-2xl"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all group"
                  >
                    Próximo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: CEP */}
            {step === 3 && (
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
                      const qty = getQuantity(id);
                      return (
                        <span key={id} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {product?.label} (x{qty})
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
                    onClick={() => setStep(2)}
                    className="font-semibold px-6 py-3 rounded-2xl"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                  <Button
                    onClick={() => setStep(4)}
                    disabled={cep.replace(/\D/g, "").length < 8}
                    className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all group"
                  >
                    Próximo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Category */}
            {step === 4 && (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                  TIPO DE PEDIDO
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Selecione a categoria do seu pedido.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {categories.map((cat) => {
                    const isSelected = category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`flex items-center justify-center min-h-[72px] px-4 py-5 rounded-2xl border-2 transition-all text-center relative
                          ${isSelected
                            ? "border-primary bg-primary/10 shadow-md scale-[1.02]"
                            : "border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/60"
                          }`}
                      >
                        <span className={`font-semibold text-base text-center leading-tight ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {cat.label}
                        </span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-primary absolute top-2 right-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(3)}
                    className="font-semibold px-6 py-3 rounded-2xl"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                  <Button
                    onClick={sendWhatsApp}
                    disabled={!category}
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
